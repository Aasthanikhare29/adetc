'use client';

import { useCallback, useEffect, useRef } from 'react';

const MESSAGE = 'You have unsaved changes. Leave this page anyway?';
const snapshot = (form) => (form ? JSON.stringify([...new FormData(form)]) : '');

// Warns before leaving a form with unsaved edits: tab close/reload (beforeunload) and
// in-app link clicks (Next has no route-change blocker, so intercept anchors in capture
// phase, before next/link's handler). "Dirty" = form values differ from the last
// snapshot, which covers hidden inputs (editor HTML, status, SEO fields) too.
// Call the returned markSaved() after a successful save.
export function useUnsavedGuard(formRef) {
  const saved = useRef(null);
  const markSaved = useCallback(() => { saved.current = snapshot(formRef.current); }, [formRef]);

  useEffect(() => {
    markSaved(); // baseline = values as loaded
    const dirty = () => saved.current !== null && snapshot(formRef.current) !== saved.current;

    const onBeforeUnload = (e) => {
      if (!dirty()) return;
      e.preventDefault();
      e.returnValue = '';
    };
    const onClick = (e) => {
      const a = e.target.closest?.('a[href]');
      if (!a || a.target === '_blank' || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
      if (dirty() && !window.confirm(MESSAGE)) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    window.addEventListener('beforeunload', onBeforeUnload);
    document.addEventListener('click', onClick, true);
    return () => {
      window.removeEventListener('beforeunload', onBeforeUnload);
      document.removeEventListener('click', onClick, true);
    };
  }, [formRef, markSaved]);

  return markSaved;
}
