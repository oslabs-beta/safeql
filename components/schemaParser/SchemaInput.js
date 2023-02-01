import { useRef, useEffect, useContext, useState } from 'react';
import { EditorState } from '@codemirror/state';
import { EditorView, basicSetup } from 'codemirror';
import { keymap } from '@codemirror/view';
import { defaultKeymap, indentWithTab } from '@codemirror/commands';
import { oneDark } from '@codemirror/theme-one-dark';
import { graphql } from 'cm6-graphql';
import { Context } from '../../src/context';
import { fixedHeightEditor } from '../../src/cm6Theme';
import { parseSchema } from "../../src/parseSchema";

export const SchemaInput = (props) => {
  const editor = useRef();
  const [schema, setSchema] = useState(
  `type Cohort {
    id: ID
    studentCount: Number
    region: String
  },
  type Student {
    id: ID
    teacher: Type
    region: String
  },
  `
  );

  const updateSchema = EditorView.updateListener.of((v) => {
    setSchema(v.state.doc.toString());
  });

  const fetchSchema = async (input) => {
  console.log('input: ', input)
    try {
      const result = await fetch('/api/schemaEndpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(input)
      });
      const toVisualize = await result.json();
      console.log('visualize in SchemaInput: ', toVisualize)
      return toVisualize;

    } catch (error) {
      return 'Error in schemaEndpoint function';
    }
  };

  const submitSchema = async () => {
    const parsedResult = await fetchSchema(schema);
    props.setParsedSchema(parsedResult);
  };

  useEffect(() => {
    const startState = EditorState.create({
      doc: schema || '',
      extensions: [
        basicSetup,
        keymap.of([defaultKeymap, indentWithTab]),
        // oneDark,
        graphql(),
        updateSchema,
        fixedHeightEditor,
        // highlighted()
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
    </section>
  );
};