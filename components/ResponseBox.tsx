import { useRef, useEffect, useContext, useState } from 'react';
import { EditorState } from '@codemirror/state';
import { EditorView } from 'codemirror';
import { customSetup } from '../src/cmCustomSetup';
import { keymap } from '@codemirror/view';
import { syntaxHighlighting } from '@codemirror/language';
import { defaultKeymap, indentWithTab } from '@codemirror/commands';
import { graphql } from 'cm6-graphql';
import { Context } from '../src/context';
import { fixedHeightResponse, customHighlightStyle } from '../src/cm6Theme';

export const ResponseBox = (props: any) => {
  const responseBox = useRef(null);
  const { response } = useContext(Context);

  useEffect(() => {
    const startState = EditorState.create({
      doc: response || '',
      extensions: [
        customSetup,
        // @ts-ignore
        keymap.of([defaultKeymap, indentWithTab]),
        syntaxHighlighting(customHighlightStyle),
        graphql(),
        fixedHeightResponse,
      ],
    });

    const view = new EditorView({
      state: startState,
      // @ts-ignore
      parent: responseBox.current,
    });

    return () => {
      view.destroy();
    };
  }, [response]);

  return (
    <section className='mt-2 mx-1 rounded-t-lg-1 w-1/3 box-border min-w-1/3'>
      <div className='flex px-1 font-bold h-15 px-2 py-2 content-center'>
        <h1 className='flex text-xl p-2'>Response</h1>
      </div>
      <div
        ref={responseBox}
        className='response mx-3'
      ></div>
    </section>
  );
};
