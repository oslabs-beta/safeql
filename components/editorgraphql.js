//codemirror doesn't work with server side rendering
//https://www.codiga.io/blog/implement-codemirror-6-in-react/
import { useRef, useEffect } from "react"
import {EditorState} from "@codemirror/state"
import {EditorView, keymap} from "@codemirror/view"
import {defaultKeymap} from "@codemirror/commands"

// import type { ValidationContext } from 'graphql';

import CodeMirror from 'codemirror';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/lint/lint';
import 'codemirror-graphql/hint';
import 'codemirror-graphql/lint';
import 'codemirror-graphql/mode';

export const EditorGraphQL = () => {
  const editor = useRef();

  useEffect(() => {
    const startState = CodeMirror.fromTextArea(myTextarea, {
      mode: 'graphql',
      lint: {
        schema: myGraphQLSchema,
        validationRules: [ExampleRule],
      },
      hintOptions: {
        schema: myGraphQLSchema,
      },
    });

    const view = new EditorView({ state: startState, parent: editor.current });

    return () => {
      view.destroy();
    };
}, []);

  return (
    <div ref={editor}></div>
  )
};
