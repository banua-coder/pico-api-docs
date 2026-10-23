import Prism from 'prismjs'

// The language grammars in prismjs/components call a global `Prism`. Publish it in its own
// module so it exists before any grammar loads. The bundler does not guarantee that order
// for a side-effect import, and the production build failed with "Prism is not defined".
;(globalThis as { Prism?: typeof Prism }).Prism = Prism

export default Prism
