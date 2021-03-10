
//https://bigfrontend.dev/problem/virtual-dom-iv-jsx-1

/**
 * @param {code} string
 * @returns {any} AST 
 */
 function parse(code) {
    const stack = [{children:[]}];
    let current = {children:[]}

    let i = 0;
    code = code.replace(/\s/g,"")
  
    while(i < code.length){
      const c = code[i];
      if(c == "<") {
        if(code[i+1] == "/") {
          const last = stack.pop();
          stack[stack.length -1].children.push(last);
          while(code[i] !== ">") i++;
          i++;
          continue;
        }else{
          current = {}
          current.tag = "";
          current.attrs = null;
          current.children = [];
          i++; // move
          while(code[i] != ">"){
            current.tag += code[i];
            i++
          }
          stack.push(current)
          i++;
          continue;
        }
      }
  
      let children = current.children;
      if(children.length == 0) children.push("")
      children[children.length-1] += c;
      i++;
    }
  
    return stack[0].children
  }
  
  /**
   * @param {any} your AST
   * @returns {string} 
   */
  function generate(ast) {
    // your code here
    return ast.map(tag=>{
        return h(item.tag.trim(), item.attrs, item.children[0] || null)
    }).pop()
  }

  generate(parse('  <  a  >  bfe.dev  <  /  a  >  '))
  
  
  