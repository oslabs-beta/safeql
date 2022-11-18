//codemirror doesn't work with server side rendering
//https://www.codiga.io/blog/implement-codemirror-6-in-react/
import { useRef, useEffect } from "react"
import {EditorState} from "@codemirror/state"
import { EditorView, basicSetup } from 'codemirror';
import {keymap} from "@codemirror/view"
import {defaultKeymap, indentWithTab } from "@codemirror/commands"
import { oneDark } from '@codemirror/theme-one-dark';
import { graphql } from 'cm6-graphql'

export const EditorGraphQL = () => {
  const editor = useRef();

  
  useEffect(() => {
    const startState = EditorState.create({
      doc: 'query',
      extensions: [
        basicSetup,
        keymap.of([defaultKeymap, indentWithTab]),
        oneDark,
        graphql()
      ],
    });

    const view = new EditorView({ 
      state: startState, 
      parent: editor.current,
      // contentHeight: 120,
    });

    return () => {
      view.destroy();
    };
}, []);

  return (
    <>
    <div ref={editor} className='editor'></div>
    <button>Submit Query</button>
    <button>Clear</button>
    </>
  )
};
