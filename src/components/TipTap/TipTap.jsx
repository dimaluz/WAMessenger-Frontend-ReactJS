import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'

import { BsTypeBold } from "react-icons/bs";
import { LiaRedoSolid } from "react-icons/lia";
import { LiaUndoSolid } from "react-icons/lia";
import { PiListBullets } from "react-icons/pi";
import { VscListOrdered } from "react-icons/vsc";
import { AiOutlineStrikethrough } from "react-icons/ai";
import { TbBlockquote } from "react-icons/tb";

import './TipTap.css';

const MenuBar = ({ editor }) => {

  if (!editor) {
    return null
  }

  return (
    <div className='tools-wrapper'>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleStrike()
            .run()
        }
        className={editor.isActive('strike') ? 'is-active' : ''}
      >
        <AiOutlineStrikethrough className='tool-icon'/>
      </button>
      
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
      >
        h1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
      >
        h2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
      >
        h3
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
      >
        h4
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
      >
        h5
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
      >
        h6
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
      >
        <PiListBullets className='tool-icon'/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}
      >
        <VscListOrdered className='tool-icon'/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'is-active' : ''}
      >
        <TbBlockquote className='tool-icon'/>
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .undo()
            .run()
        }
      >
        <LiaUndoSolid className='tool-icon'/>
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .redo()
            .run()
        }
      >
        <LiaRedoSolid className='tool-icon'/>
      </button>
    </div>
  )
}


const TipTap = ({setTemplateText}) => {
    const editor = useEditor({
        extensions: [StarterKit],
        content: ``,
        onUpdate: ({editor}) => {
          const html = editor.getHTML();
          setTemplateText(html);
        }
      });
    
      return (
        <div className='text-editor'>
          <MenuBar editor={editor} />
          <EditorContent editor={editor} />
        </div>
      )
}

export default TipTap;