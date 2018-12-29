import React from 'react'
import PropTypes from 'prop-types'
import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'
import xml from 'highlight.js/lib/languages/xml'

import 'highlight.js/styles/atom-one-dark.css'

hljs.registerLanguage('js', javascript)
hljs.registerLanguage('xml', xml)

export default class CodeBlock extends React.PureComponent {
  static propTypes = {
    language: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }

  componentDidMount() {
    this.highlightCode()
  }

  componentDidUpdate() {
    this.highlightCode()
  }

  highlightCode() {
    hljs.highlightBlock(this.codeEl)
  }

  render() {
    const { language, value } = this.props

    return (
      <pre>
        <code ref={(node) => { this.codeEl = node }} className={`language-${language}`}>
          {value}
        </code>
      </pre>
    )
  }
}
