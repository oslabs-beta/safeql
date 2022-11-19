//codemirror doesn't work with server side rendering
//https://www.codiga.io/blog/implement-codemirror-6-in-react/
import { useRef, useEffect, useContext, useState } from "react"
import {EditorState} from "@codemirror/state"
import { EditorView, basicSetup } from 'codemirror';
import {keymap} from "@codemirror/view"
import {defaultKeymap, indentWithTab } from "@codemirror/commands"
import { oneDark } from '@codemirror/theme-one-dark';
import { graphql } from 'cm6-graphql'
import { Context } from "../src/context";
import { queryEndpoint } from "../src/queryService";

export const EditorGraphQL = () => {
  const editor = useRef();
  const { url } = useContext(Context);
  const [query, setQuery] = useState('');


  const updateQuery = (value) => {
    setQuery(value)

  }

  const submitQuery = () => {
    queryEndpoint(url)
  }

  const clearQuery = () => {
    console.log(query)
    setQuery('')
    console.log(query)
  }

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
    });

    return () => {
      view.destroy();
    };
}, []);

  return (
    <section className="queryComponent">
      <h1>Query</h1>
      <div ref={editor} className='editor' onChange={updateQuery}></div>
      <button onClick={submitQuery}>Submit Query</button>
      <button onClick={clearQuery}>Clear</button>
    </section>
  )
};
