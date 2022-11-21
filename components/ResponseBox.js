import { useRef, useEffect, useContext, useState } from "react"
import { EditorState } from "@codemirror/state"
import { EditorView, basicSetup } from 'codemirror';
import { keymap } from "@codemirror/view"
import { defaultKeymap, indentWithTab } from "@codemirror/commands"
import { oneDark } from '@codemirror/theme-one-dark';
import { graphql } from 'cm6-graphql'
import { Context } from "../src/context";

export const ResponseBox = () => {
  const responseBox = useRef();
  const { response } = useContext(Context);

  // To display the rsponse need to figure out how to update based on response variable being updated JSON.stringify(response, null, 2)

  useEffect(() => {
    const startState = EditorState.create({
      doc: '',
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
}, []);

  return (
    <section className="queryComponent">
      <h1>Response</h1>
      <div ref={responseBox} className='response'></div>
    </section>
  )
};