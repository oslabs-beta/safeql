//codemirror doesn't work with server side rendering
//https://www.codiga.io/blog/implement-codemirror-6-in-react/
import { useRef, useEffect, useContext, useState } from "react"
import { EditorState } from "@codemirror/state"
import { EditorView, basicSetup } from 'codemirror';
import { keymap } from "@codemirror/view"
import { defaultKeymap, indentWithTab } from "@codemirror/commands"
import { oneDark } from '@codemirror/theme-one-dark';
import { graphql } from 'cm6-graphql'
import { Context } from "../src/context";
import { queryEndpoint } from "../src/queryService";
import { ResponseBox } from "./ResponseBox";
import { fixedHeightEditor } from "../src/cm6Theme";

export const EditorBox = () => {
  const editor = useRef();
  const { url, response, setResponse, analysisData, setAnalysisData } = useContext(Context);
  const [query, setQuery] = useState('');

  const updateQuery = EditorView.updateListener.of((v) => {
    setQuery(v.state.doc.toString());
});

  const submitQuery = async () => {
    const results = await queryEndpoint(url, query);
    const display = JSON.stringify(results[0], null, 2)
    setResponse(display);
    setAnalysisData({
      ...analysisData,
      querySpeed: `${results[1]} ms`
    })
    console.log(analysisData)
  }

  useEffect(() => {
    const startState = EditorState.create({
      doc: query || '',
      extensions: [
        basicSetup,
        keymap.of([defaultKeymap, indentWithTab]),
        oneDark,
        graphql(),
        updateQuery, 
        fixedHeightEditor
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
      <div ref={editor} className='editor'></div>
      <button onClick={submitQuery}>Submit Query</button>
    </section>
  )
};
