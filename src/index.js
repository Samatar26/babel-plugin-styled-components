import uglifyPure from './visitors/uglifyPure'
import minify from './visitors/minify'
import displayNameAndId from './visitors/displayNameAndId'
import templateLiterals from './visitors/templateLiterals'
import assignStyledRequired from './visitors/assignStyledRequired'


export default function({ types: t }) {
  return {
    visitor: {
      CallExpression(path, state) {
        uglifyPure(path, state)
      },
      TaggedTemplateExpression(path, state) {
        minify(path, state)
        displayNameAndId(path, state)
        templateLiterals(path, state)
      },
      VariableDeclarator(path, state) {
        assignStyledRequired(path, state)
      }
    }
  }
}
