export async function createElement () {
  const element = document.createElement('div');
  const  _  = await import(/* webpackChunkName: "lodash" */ 'lodash');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
};
