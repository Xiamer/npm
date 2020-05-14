import  demo from './lib/demo'; // demo


import * as browser from './lib/browser'; // 浏览器相关
import * as dom from './lib/dom'; // dom相关
import * as design from './lib/design'; // 设计模式相关
import * as pure from './lib/pure'; // 纯函数


const arr1 = [1,2,3];
const arr2 = [4,5,6];
console.log([...arr1, ...arr2]);

console.log('2222');

async function initDemo () {
  let data = await demo();
  console.log(data);
}
console.log('zzz');

initDemo();



export {
  browser,
  design,
  dom,
  pure
}
