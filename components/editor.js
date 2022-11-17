//codemirror doesn't work with server side rendering
//https://www.codiga.io/blog/implement-codemirror-6-in-react/
import { useRef, useEffect } from "react"
import {EditorState} from "@codemirror/state"
import {EditorView, keymap} from "@codemirror/view"
import {defaultKeymap} from "@codemirror/commands"

export const Editor = () => {
  const editor = useRef();

//   useEffect(() => {
//     const startState = EditorState.create({
//       doc: 'Hello World',
//       extensions: [keymap.of(defaultKeymap)],
//     });

//     const view = new EditorView({ state: startState, parent: editor.current });

//     return () => {
//       view.destroy();
//     };
// }, []);

  return (
    <div ref={editor}></div>
  )
};
