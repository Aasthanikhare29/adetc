'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import { useRef } from 'react';
import { toast } from 'sonner';
import {
  Bold, Italic, Strikethrough, Heading1, Heading2, Heading3,
  List, ListOrdered, Quote, Minus, Code, Link2, ImagePlus, Undo2, Redo2,
} from 'lucide-react';
import { cn } from '@/lib/utils';

async function uploadFile(file) {
  const fd = new FormData();
  fd.append('file', file);
  const res = await fetch('/admin/api/upload', { method: 'POST', body: fd });
  const json = await res.json();
  if (!res.ok) throw new Error(json.error || 'Upload failed');
  return json.url;
}

function Tb({ onClick, active, disabled, title, children }) {
  return (
    <button
      type="button"
      title={title}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'inline-flex size-8 items-center justify-center rounded-md transition-colors disabled:opacity-40 [&_svg]:size-4',
        active ? 'bg-primary text-primary-foreground' : 'hover:bg-accent hover:text-accent-foreground'
      )}
    >
      {children}
    </button>
  );
}

export default function Editor({ value, onChange }) {
  const fileRef = useRef(null);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [StarterKit, Link.configure({ openOnClick: false }), Image],
    content: value || '',
    editorProps: { attributes: { class: 'px-4 py-3', 'data-placeholder': 'Write your post…' } },
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
  });

  if (!editor) return <div className="px-4 py-3 text-sm text-muted-foreground">Loading editor…</div>;

  const insertImage = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    try {
      const url = await uploadFile(file);
      editor.chain().focus().setImage({ src: url }).run();
    } catch (err) {
      toast.error(err.message);
    }
  };

  const setLink = () => {
    const prev = editor.getAttributes('link').href;
    const url = window.prompt('Link URL', prev || 'https://');
    if (url === null) return;
    if (url === '') return editor.chain().focus().unsetLink().run();
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  const c = editor.chain().focus();

  return (
    <div>
      <div className="flex flex-wrap items-center gap-0.5 border-b border-border p-1.5">
        <Tb title="Bold" active={editor.isActive('bold')} onClick={() => c.toggleBold().run()}><Bold /></Tb>
        <Tb title="Italic" active={editor.isActive('italic')} onClick={() => c.toggleItalic().run()}><Italic /></Tb>
        <Tb title="Strikethrough" active={editor.isActive('strike')} onClick={() => c.toggleStrike().run()}><Strikethrough /></Tb>
        <span className="mx-1 h-5 w-px bg-border" />
        <Tb title="Heading 1" active={editor.isActive('heading', { level: 1 })} onClick={() => c.toggleHeading({ level: 1 }).run()}><Heading1 /></Tb>
        <Tb title="Heading 2" active={editor.isActive('heading', { level: 2 })} onClick={() => c.toggleHeading({ level: 2 }).run()}><Heading2 /></Tb>
        <Tb title="Heading 3" active={editor.isActive('heading', { level: 3 })} onClick={() => c.toggleHeading({ level: 3 }).run()}><Heading3 /></Tb>
        <span className="mx-1 h-5 w-px bg-border" />
        <Tb title="Bullet list" active={editor.isActive('bulletList')} onClick={() => c.toggleBulletList().run()}><List /></Tb>
        <Tb title="Numbered list" active={editor.isActive('orderedList')} onClick={() => c.toggleOrderedList().run()}><ListOrdered /></Tb>
        <Tb title="Quote" active={editor.isActive('blockquote')} onClick={() => c.toggleBlockquote().run()}><Quote /></Tb>
        <Tb title="Code block" active={editor.isActive('codeBlock')} onClick={() => c.toggleCodeBlock().run()}><Code /></Tb>
        <Tb title="Divider" onClick={() => c.setHorizontalRule().run()}><Minus /></Tb>
        <span className="mx-1 h-5 w-px bg-border" />
        <Tb title="Link" active={editor.isActive('link')} onClick={setLink}><Link2 /></Tb>
        <Tb title="Image" onClick={() => fileRef.current?.click()}><ImagePlus /></Tb>
        <span className="mx-1 h-5 w-px bg-border" />
        <Tb title="Undo" disabled={!editor.can().undo()} onClick={() => c.undo().run()}><Undo2 /></Tb>
        <Tb title="Redo" disabled={!editor.can().redo()} onClick={() => c.redo().run()}><Redo2 /></Tb>
      </div>
      <EditorContent editor={editor} />
      <input ref={fileRef} type="file" accept="image/*" hidden onChange={insertImage} />
    </div>
  );
}
