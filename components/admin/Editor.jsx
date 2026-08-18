'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import { useRef } from 'react';

async function uploadFile(file) {
  const fd = new FormData();
  fd.append('file', file);
  const res = await fetch('/admin/api/upload', { method: 'POST', body: fd });
  const json = await res.json();
  if (!res.ok) throw new Error(json.error || 'Upload failed');
  return json.url;
}

function Btn({ editor, cmd, active, children, title }) {
  return (
    <button
      type="button"
      title={title}
      className={active ? 'active' : ''}
      onClick={cmd}
    >
      {children}
    </button>
  );
}

export default function Editor({ value, onChange }) {
  const fileRef = useRef(null);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Link.configure({ openOnClick: false }),
      Image,
    ],
    content: value || '',
    editorProps: { attributes: { 'data-placeholder': 'Write your post…' } },
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
  });

  if (!editor) return <div className="ProseMirror">Loading editor…</div>;

  const insertImage = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    try {
      const url = await uploadFile(file);
      editor.chain().focus().setImage({ src: url }).run();
    } catch (err) {
      alert(err.message);
    }
  };

  const setLink = () => {
    const prev = editor.getAttributes('link').href;
    const url = window.prompt('Link URL', prev || 'https://');
    if (url === null) return;
    if (url === '') return editor.chain().focus().unsetLink().run();
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  return (
    <div>
      <div className="editor-toolbar">
        <Btn editor={editor} title="Bold" active={editor.isActive('bold')}
          cmd={() => editor.chain().focus().toggleBold().run()}><b>B</b></Btn>
        <Btn editor={editor} title="Italic" active={editor.isActive('italic')}
          cmd={() => editor.chain().focus().toggleItalic().run()}><i>I</i></Btn>
        <Btn editor={editor} title="Strike" active={editor.isActive('strike')}
          cmd={() => editor.chain().focus().toggleStrike().run()}><s>S</s></Btn>
        <Btn editor={editor} title="H2" active={editor.isActive('heading', { level: 2 })}
          cmd={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>H2</Btn>
        <Btn editor={editor} title="H3" active={editor.isActive('heading', { level: 3 })}
          cmd={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>H3</Btn>
        <Btn editor={editor} title="Bullet list" active={editor.isActive('bulletList')}
          cmd={() => editor.chain().focus().toggleBulletList().run()}>• List</Btn>
        <Btn editor={editor} title="Numbered list" active={editor.isActive('orderedList')}
          cmd={() => editor.chain().focus().toggleOrderedList().run()}>1. List</Btn>
        <Btn editor={editor} title="Quote" active={editor.isActive('blockquote')}
          cmd={() => editor.chain().focus().toggleBlockquote().run()}>❝</Btn>
        <Btn editor={editor} title="Link" active={editor.isActive('link')} cmd={setLink}>🔗</Btn>
        <Btn editor={editor} title="Image" active={false}
          cmd={() => fileRef.current?.click()}>🖼</Btn>
      </div>
      <EditorContent editor={editor} />
      <input ref={fileRef} type="file" accept="image/*" hidden onChange={insertImage} />
    </div>
  );
}
