import Prism from 'prismjs'

// Grammars register on the Prism singleton, so they must live in this one file
// (and one chunk) with the core. Only the languages the docs show are loaded.
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-go'

export default Prism
