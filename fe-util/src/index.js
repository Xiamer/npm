import demo from './lib/demo';

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



// 车型- 综述页
