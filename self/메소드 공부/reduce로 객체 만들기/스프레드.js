const arr = [
  ["철수", 10],
  ["영희", 11],
  ["훈이", 9],
  ["맹구", 10],
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
