//codemirror doesn't work with server side rendering
//https://www.codiga.io/blog/implement-codemirror-6-in-react/
import { useRef, useEffect, useContext, useState } from 'react';
import { EditorState } from '@codemirror/state';
import { EditorView, basicSetup } from 'codemirror';
import { keymap } from '@codemirror/view';
import { syntaxHighlighting } from '@codemirror/language';
import { defaultKeymap, indentWithTab } from '@codemirror/commands';
import { graphql } from 'cm6-graphql';
import { Context } from '../src/context';
import { queryEndpoint } from '../src/queryService';
import { ResponseBox } from './ResponseBox';
import { fixedHeightEditor, customHighlightStyle } from '../src/cm6Theme';

export const EditorBox = () => {
  const editor = useRef();
  const { url, response, setResponse, analysisData, setAnalysisData } =
    useContext(Context);
  const [query, setQuery] = useState('');

  const updateQuery = EditorView.updateListener.of((v) => {
    setQuery(v.state.doc.toString());
  });

  const submitQuery = async () => {
    const results = await queryEndpoint(url, query);
    const display = JSON.stringify(results[0], null, 2);
    setResponse(display);
    setAnalysisData({
      ...analysisData,
      querySpeed: `${results[1]} ms`,
    });
    console.log(analysisData);
  };

  useEffect(() => {
    const startState = EditorState.create({
      doc: query || '',
      extensions: [
        basicSetup,
        //@ts-ignore
        keymap.of([defaultKeymap, indentWithTab]),
        graphql(),
        syntaxHighlighting(customHighlightStyle),
        updateQuery,
        fixedHeightEditor,
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
    <section className='bg-blue-300 mt-2 rounded-t-lg-1 w-1/3 box-border min-w-fit mr-1'>
      <div className='flex justify-between px-1 font-bold h-15 px-2 py-2 content-center'>
        <h2 className='flex text-xl p-2'>Sandbox</h2>
        <button
          className='text-md bg-blue-200 rounded-lg-1 p-2 min-w-fit hover:bg-blue-100'
          onClick={submitQuery}
        >
          ▶ Run
        </button>
      </div>
      <div
        ref={editor}
        className='editor'
      ></div>
    </section>
  );
};
