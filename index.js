// let uniqueFlavors= new WeakSet();
//  let flavor1={flavor:'chocolate'};
//  let flavor2={flavors:'sugar'};
//  uniqueFlavors.add(flavor1);
//  uniqueFlavors.add(flavor2)
//  console.log(uniqueFlavors);


// function check(arr){
//     let res=[];
//     for(let vv of arr){
//      return vv.match(/\d+/g).map(Number)
//     }

// }
// console.log(check(['wow32','ry65f']))


// function check(arr){
//     let res=[];
//     for(let vv of arr){
//      return  vv.split('').filter(item=> Number(item)).join(',');
     
  
//     }
  
// }
// console.log(check(['wow32','ry65f',7]))
function check(arr){
    let result=[];
    for(let value of arr){
result.push(value.replace(/\D/g, ""));
    }
    return result;
}
console.log(check(['fjhg432h','jfh5981b']));
