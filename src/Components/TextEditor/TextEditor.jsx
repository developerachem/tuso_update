import React, { useRef, useState } from 'react'
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
// import JoditEditor from "jodit-react";
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
import {
    FaBold,
    FaHeading,
    FaItalic,
    FaListOl,
    FaListUl,
    FaQuoteLeft,
    FaRedo,
    FaStrikethrough,
    FaUnderline,
    FaUndo,
} from "react-icons/fa";

import './TextEditor.css'


const MenuBar = ({ editor }) => {

    if (!editor) {
        return null;
    }

    return (
        <div >
            <div className="menuBar">
                <div>
                    <button
                        type='button'
                        onClick={() => editor.chain().focus().toggleBold().run()}
                        className={editor.isActive("bold") ? "is_active" : ""}
                    >
                        <FaBold />
                    </button>
                    <button
                        type='button'
                        onClick={() => editor.chain().focus().toggleItalic().run()}
                        className={editor.isActive("italic") ? "is_active" : ""}
                    >
                        <FaItalic />
                    </button>
                    <button
                        type='button'
                        onClick={() => editor.chain().focus().toggleUnderline().run()}
                        className={editor.isActive("underline") ? "is_active" : ""}
                    >
                        <FaUnderline />
                    </button>
                    <button
                        type='button'
                        onClick={() => editor.chain().focus().toggleStrike().run()}
                        className={editor.isActive("strike") ? "is_active" : ""}
                    >
                        <FaStrikethrough />
                    </button>
                    <button
                        type='button'
                        onClick={() =>
                            editor.chain().focus().toggleHeading({ level: 2 }).run()
                        }
                        className={
                            editor.isActive("heading", { level: 2 }) ? "is_active" : ""
                        }
                    >
                        <FaHeading />
                    </button>
                    <button
                        type='button'
                        onClick={() =>
                            editor.chain().focus().toggleHeading({ level: 3 }).run()
                        }
                        className={
                            editor.isActive("heading", { level: 3 }) ? "is_active" : ""
                        }
                    >
                        <FaHeading className="heading3" />
                    </button>
                    <button
                        type='button'
                        onClick={() => editor.chain().focus().toggleBulletList().run()}
                        className={editor.isActive("bulletList") ? "is_active" : ""}
                    >
                        <FaListUl />
                    </button>
                    <button
                        type='button'
                        onClick={() => editor.chain().focus().toggleOrderedList().run()}
                        className={editor.isActive("orderedList") ? "is_active" : ""}
                    >
                        <FaListOl />
                    </button>
                    <button
                        type='button'
                        onClick={() => editor.chain().focus().toggleBlockquote().run()}
                        className={editor.isActive("blockquote") ? "is_active" : ""}
                    >
                        <FaQuoteLeft />
                    </button>
                </div>
                <div>
                    <button
                        type='button' onClick={() => editor.chain().focus().undo().run()}>
                        <FaUndo />
                    </button>
                    <button
                        type='button' onClick={() => editor.chain().focus().redo().run()}>
                        <FaRedo />
                    </button>
                </div>
            </div>
        </div>
    )
}

export const Tiptap = ({ setDescription, description }) => {
    const editor = useEditor({
        extensions: [StarterKit, Underline],
        content: description,

        onUpdate: ({ editor }) => {
            const html = editor.getHTML();
            setDescription(html);
        },
    });


    return (
        <div className="textEditor">
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
        </div>
    );
};