import { parseModule } from "https://code4fukui.github.io/acorn-es/parseModule.js";
import escodegen from "https://code4fukui.github.io/escodegen/escodegen.js";

export const syncjs = (src) => {
  const ast = parseModule(src);
  const addAwait = (ast) => {
    const add = (ast) => {
      if (ast.type != "CallExpression") {
        return addAwait(ast);
      }
      return {
        type: "AwaitExpression",
        argument: addAwait(ast),
      }
    };
  
    //console.log(ast.type)
    if (ast.type == "Program") {
      ast.body.forEach(b => addAwait(b));
    } else if (ast.type == "ExpressionStatement") {
      if (ast.expression.type == "CallExpression") {
        ast.expression = add(ast.expression);
        const a = ast.expression.arguments;
        if (a) {
          for (let i = 0; i < a.length; i++) {
            a[i] = addAwait(a[i]);
          }
        }
      } else if (ast.expression.type == "AwaitExpression") {
        addAwait(ast.expression.argument);
      }
    } else if (ast.type == "VariableDeclaration") {
      ast.declarations.forEach(d => d.init = add(d.init));
    } else if (ast.type == "CallExpression") {
      const a = ast.arguments;
      for (let i = 0; i < a.length; i++) {
        a[i] = add(a[i]);
      }
    }
    return ast;
  };
  //console.log(JSON.stringify(ast, null, 2));
  addAwait(ast);
  //console.log(JSON.stringify(ast, null, 2));
  return escodegen.generate(ast);
};

export default syncjs;
