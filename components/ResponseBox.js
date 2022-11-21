import { useRef, useEffect, useContext, useState } from "react"
import { EditorState } from "@codemirror/state"
import { EditorView, basicSetup } from 'codemirror';
import { keymap } from "@codemirror/view"
import {defaultKeymap, indentWithTab } from "@codemirror/commands"
import { oneDark } from '@codemirror/theme-one-dark';
import { graphql } from 'cm6-graphql'
import { Context } from "../src/context";
import { queryEndpoint } from "../src/queryService";

export const ResponseBox = () => {
  const response = useRef();
  const { url } = useContext(Context);
  const [query, setQuery] = useState('');

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
      parent: response.current,
    });

    return () => {
      view.destroy();
    };
}, []);

  return (
    <section className="queryComponent">
      <h1>Response</h1>
      <div ref={response} className='response'></div>
    </section>
  )
};