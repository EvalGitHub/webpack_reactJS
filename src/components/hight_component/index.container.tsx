
// 反向继承的高阶组件，可以用来自定义组件的内容
import * as React from "react";

export const MyContainer = (WrapperComponent:any) => 
  class extends WrapperComponent {
    render() {
      const elementsTree = super.render();
      let newProps = {};

      if (elementsTree && elementsTree.type === 'input') {
        newProps = {defaultValue: '反向继承的高阶组件'};
      }

      const props = Object.assign({}, elementsTree.props, newProps);
      const newElementsTree = React.cloneElement(elementsTree, props, elementsTree.props.children);
      return newElementsTree;
    }
  }