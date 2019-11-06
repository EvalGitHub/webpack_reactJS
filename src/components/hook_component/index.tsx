import * as React from 'react';
import { NameContext } from '@/index';
export function HookComponent (props:any) {
  const context = React.useContext(NameContext);
  const [count, setCount] = React.useState(0);
  const [obj, setObj] = React.useState({
    name: '测试对象',
    age: 12
  })

  console.log(context)
  return (
    <div style={{'fontSize': '30px', 'padding': '10px'}}>
      <p>this is context {context.name}</p>
      <p>You clicked {count} times</p>
      <p>You age {obj.age} </p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setObj({...obj, age: obj.age+1})}>
        Add you age
      </button>
      <button onClick={() => context.changeName()}>
        cahngeContext
      </button>
    </div>
  );
}