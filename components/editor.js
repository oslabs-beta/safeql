//codemirror doesn't work with server side rendering
//https://ahmadrosid.com/blog/codemirror-with-nextjs
import { useEffect, useRef } from "react";

const codeMirrorRef = useRef();