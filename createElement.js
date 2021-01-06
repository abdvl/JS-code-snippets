function createElement(type, props, ...children) {
  return {
    type,
    props:{
      ...props,
      children
    }
  }
}


/**
 * @param { MyElement }
 * @returns { HTMLElement } 
 */
function render(myElement) {
  if(!myElement){
    return 
  }
  if(typeof myElement == "string"){
    return document.createTextNode(myElement);
  }
  const {type, props:{children,...res}} = myElement;
  // if function component
  if(typeof type == 'function') {
    return render(type(myElement.props));
  }

  const node = document.createElement(type)
  for(const attr in res){
    const attrName = attr == "className" ? "class" : attr;
    node.setAttribute(attrName, res[attr])
  }
  if(Array.isArray(children)){
    children.map(render).forEach(child => node.appendChild(child))
  }else{
    node.appendChild(render(children))
  }
  return node
}
