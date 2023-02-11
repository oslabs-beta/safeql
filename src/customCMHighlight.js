import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags } from '@lezer/highlight';

// main colors used are white and violet
const violet = '#182334',
  white = '#dce4ef',
  cyan = '#143438',
  invalid = '#ffffff',
  chalky = '#402e0d',
  ivory = '#2c313a',
  stone = '#2d3139', // Brightened compared to original to increase contrast
  malibu = '#0e538b',
  sage = '#304620',
  whiskey = '#3b2612',
  darkBackground = '#21252b',
  highlightBackground = '#2c313a',
  background = '#282c34',
  tooltipBackground = '#353a42',
  selection = '#3E4451',
  cursor = '#528bff';

/**
The colors used in the theme, as CSS color strings.
*/
const color = {
  chalky,
  white,
  cyan,
  invalid,
  ivory,
  stone,
  malibu,
  sage,
  whiskey,
  violet,
  darkBackground,
  highlightBackground,
  background,
  tooltipBackground,
  selection,
  cursor,
};

/**
The highlighting style for code in our custom Theme.
*/
const customHighlightStyle = /*@__PURE__*/ HighlightStyle.define([
  { tag: tags.keyword, color: violet },
  {
    tag: [
      tags.name,
      tags.deleted,
      tags.character,
      tags.propertyName,
      tags.macroName,
    ],
    color: white,
  },
  {
    tag: [/*@__PURE__*/ tags.function(tags.variableName), tags.labelName],
    color: malibu,
  },
  {
    tag: [
      tags.color,
      /*@__PURE__*/ tags.constant(tags.name),
      /*@__PURE__*/ tags.standard(tags.name),
    ],
    color: whiskey,
  },
  {
    tag: [/*@__PURE__*/ tags.definition(tags.name), tags.separator],
    color: ivory,
  },
  {
    tag: [
      tags.typeName,
      tags.className,
      tags.number,
      tags.changed,
      tags.annotation,
      tags.modifier,
      tags.self,
      tags.namespace,
    ],
    color: chalky,
  },
  {
    tag: [
      tags.operator,
      tags.operatorKeyword,
      tags.url,
      tags.escape,
      tags.regexp,
      tags.link,
      /*@__PURE__*/ tags.special(tags.string),
    ],
    color: cyan,
  },
  { tag: [tags.meta, tags.comment], color: stone },
  { tag: tags.strong, fontWeight: 'bold' },
  { tag: tags.emphasis, fontStyle: 'italic' },
  { tag: tags.strikethrough, textDecoration: 'line-through' },
  { tag: tags.link, color: stone, textDecoration: 'underline' },
  { tag: tags.heading, fontWeight: 'bold', color: white },
  {
    tag: [tags.atom, tags.bool, /*@__PURE__*/ tags.special(tags.variableName)],
    color: whiskey,
  },
  {
    tag: [tags.processingInstruction, tags.string, tags.inserted],
    color: sage,
  },
  { tag: tags.invalid, color: invalid },
]);

export { customHighlightStyle };
