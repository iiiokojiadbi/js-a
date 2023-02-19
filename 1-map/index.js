// Maps и Sets
// Сделать с помощью Set уникализацию массива объектов

const names = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 1, name: "Вася" },
];

function uniqElements(iter, key) {
  const elements = new Set();

  for (const elem of iter) {
    if (elem[key]) elements.add(elem[key]);
  }

  return [...elements].map((item) => iter.find((elem) => elem[key] === item));
}

console.log(uniqElements(names, "id"));
