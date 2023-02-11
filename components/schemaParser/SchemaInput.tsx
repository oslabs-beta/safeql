import { useRef, useEffect, useContext, useState } from 'react';
import { EditorView, basicSetup } from 'codemirror';
import { keymap } from '@codemirror/view';
import { defaultKeymap, indentWithTab } from '@codemirror/commands';
import { syntaxHighlighting } from '@codemirror/language';
import { graphql } from 'cm6-graphql';
import { Context } from '../../src/context';
import { fixedHeightEditor, customHighlightStyle } from '../../src/cm6Theme';
import { circularCheck } from '../../src/schemaFuncs/circularCheck';
import { constructRFNodes } from '../../src/schemaFuncs/constructRFNodes';
import { constructRFEdges } from '../../src/schemaFuncs/constructRFEdges';
// @Types for code-mirror
import { EditorState, Extension } from '@codemirror/state';
import QueryAttack from './QueryAttack';
import { Query } from 'pg';

export const SchemaInput = (props: { setParsedSchema: any }) => {
  const {
    setInitialNodes,
    initialNodes,
    setInitialEdges,
    setQueryAttack,
    queryAttack,
  } = useContext(Context);
  const editor = useRef(null);
  let circularRefsAndAttack;

  const [schema, setSchema] = useState('');

  const updateSchema = EditorView.updateListener.of((v) => {
    setSchema(v.state.doc.toString());
  });

  const fetchSchema = async (input: string) => {
    try {
      const result = await fetch('/api/schemaEndpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(input),
      });
      const toVisualize = await result.json();
      return toVisualize;
    } catch (error) {
      return 'Error in schemaEndpoint function';
    }
  };

  /* submiting schema starts a cascade of events: parsing the schema, determining circular references and updating Nodes and Edges in context*/
  const submitSchema = async () => {
    const parsedResult = await fetchSchema(schema);
    circularRefsAndAttack = circularCheck(parsedResult);
    props.setParsedSchema(parsedResult);
    const updatedNodes = constructRFNodes(parsedResult);
    if (circularRefsAndAttack) {
      const createdEdges = constructRFEdges(circularRefsAndAttack[0]);
      const constructedQuery = circularRefsAndAttack[1];
      setQueryAttack(constructedQuery);
      setInitialEdges(createdEdges);
    }
    setInitialNodes(updatedNodes);
  };

  useEffect(() => {
    const startState = EditorState.create({
      doc: schema || '',
      extensions: [
        basicSetup,
        // @ts-ignore
        keymap.of([defaultKeymap, indentWithTab]),
        graphql(),
        updateSchema,
        fixedHeightEditor,
        syntaxHighlighting(customHighlightStyle),
      ],
    });

    const view = new EditorView({
      state: startState,
      // @ts-ignore
      parent: editor.current,
    });

    return () => {
      view.destroy();
    };
  }, []);

  return (
    <section className='bg-blue-300 mt-2 rounded-t-lg-1 w-1/3 box-border min-w-fit mr-1'>
      <div className='flex justify-between font-bold h-15 px-2 py-2 content-center'>
        <h2 className='flex text-xl p-2'>Schema</h2>
        <button
          className='text-md bg-blue-200 rounded-lg-1 p-2 min-w-fit'
          onClick={submitSchema}
        >
          ▶ Run
        </button>
      </div>
      <div
        ref={editor}
        className='editor'
      ></div>
      <QueryAttack queryText={queryAttack} />
    </section>
  );
};
