import { EditorView } from '@codemirror/view';

const fixedHeightEditor = EditorView.theme({
   "&": {height: "600px"},
    ".cm-scroller": {overflow: "auto"}
})

export { fixedHeightEditor };