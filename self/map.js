arr = [
  ["철수", 11],
  ["영희", 12],
];
arr.reduce((acc, cur) => {
  return [
    ...acc,
    {
      name: cur[0],
      age: cur[1],
    },
  ];
}, []);

// arr.map(ele=>ele).reduce((a,b)=>a+b)

// arr.map((ele,idx)=>ele[ele[0]]=ele[1])

// let arr1 = []

// let aaa = arr.map(([a,b]) => {return {"name":a,"age":b}})

const obj = [
  { name: "Aiden", age: 33 },
  { name: "Gray", age: 52 },
  { name: "Junny", age: 9 },
  { name: "Aaron", age: 52 },
  { name: "Oliver", age: 11 },
];

// let qqq = obj.sort((a,b)=> {return b.age-a.age}).shift()
// qqq.age === obj[0].age
console.log(obj.reduce((acc, cur) => [...acc, cur], []));

// let num = [
// for(let i=0; i<obj.length;i++){
//   num.push(obj[i].age)
// }

// Math.max(...num)

// let aar = obj.filter((ele)=>ele.age===Math.max(...num))

// aar.reverse().pop()

// obj.sort((a,b)=>{return b.age - a.age})

// arr1.push({name:a,age:b})
// arr.map(a=>a).reduce((acc,cur)=>acc)

//  arr.reduce((acc,cur)=>{return {acc}})
