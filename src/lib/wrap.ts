/** Break opportunities for URLs and key paths: split after each separator, render `<wbr>` between the parts. */
export const afterSlash = (s: string) => s.split(/(?<=\/)/)
export const afterDot = (s: string) => s.split(/(?<=\.)/)

const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
/** `R_t` becomes R with a real subscript t. Input is our own locale text, escaped first. */
export const subscripts = (s: string) => escape(s).replace(/([A-Za-zλ])_([a-z0-9]+)/g, '$1<sub>$2</sub>')
