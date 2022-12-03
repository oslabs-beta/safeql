import { useRef, useEffect, useContext, useState } from 'react';
import { EditorState } from '@codemirror/state';
import { EditorView, basicSetup } from 'codemirror';
import { keymap } from '@codemirror/view';
import { defaultKeymap, indentWithTab } from '@codemirror/commands';
import { oneDark } from '@codemirror/theme-one-dark';
<<<<<<< HEAD
import { graphql } from 'cm6-graphql'
import { Context } from "../src/context";
import { fixedHeightEditor } from "../src/cm6Theme";
=======
import { graphql } from 'cm6-graphql';
import { Context } from '../src/context';
import { fixedHeightEditor } from '../src/cm6Theme';
>>>>>>> dev

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
<<<<<<< HEAD
        fixedHeightEditor
=======
        fixedHeightEditor,
>>>>>>> dev
      ],
    });

    const view = new EditorView({
      state: startState,
      parent: responseBox.current,
    });

    return () => {
      view.destroy();
    };
<<<<<<< HEAD
}, [response]);
=======
  }, [response]);
>>>>>>> dev

  return (
    <section className='mt-2 mx-1 rounded-t-lg-1 w-1/3 box-border min-w-1/3'>
      <div className='flex px-1 font-bold h-15 px-2 py-2 content-center'>
        <h1 className='flex text-xl p-2'>Response</h1>
      </div>
      <div
        ref={responseBox}
        className='response'
      ></div>
    </section>
  );
};
