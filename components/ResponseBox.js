import { useRef, useEffect, useContext, useState } from "react"
import { EditorState } from "@codemirror/state"
import { EditorView, basicSetup } from 'codemirror';
import { keymap } from "@codemirror/view"
import { defaultKeymap, indentWithTab } from "@codemirror/commands"
import { oneDark } from '@codemirror/theme-one-dark';
import { graphql } from 'cm6-graphql'
import { Context } from "../src/context";

export const ResponseBox = (props) => {
  const responseBox = useRef();
  const { response } = useContext(Context);

  useEffect(() => {
    const startState = EditorState.create({
      doc: response || '',
      extensions: [
        basicSetup,
        keymap.of([defaultKeymap, indentWithTab]),
        oneDark,
        graphql(),
      ],
    });

    const view = new EditorView({ 
      state: startState, 
      parent: responseBox.current,
    });

    return () => {
      view.destroy();
    };
}, [response]);

  return (
    <section className="queryComponent">
      <h1>Response</h1>
      <div ref={responseBox} className='response'></div>
    </section>
  )
};