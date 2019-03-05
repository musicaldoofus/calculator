//define calc functions
const operands = {
	add: (x) => (y) => x + y,
	subtract: (x) => (y) => x - y,
	multiply: (x) => (y) => x * y,
	divide: (x) => (y) => x/y
}
const reduceNums = (a, c) => operands[currOperand](typeof c === Number ? c : Number(c))(typeof a === Number ? a : Number(a));

//define input functions and memory
let numMemory = []
let currOperand;
const addToMemory = (n, mem) => mem.push(n);
const clearMemory = () => numMemory = [];

//define elements
const arrOfNumBtns = document.getElementsByClassName('num-btn');
const arrOfOperandBtns = document.getElementsByClassName('operand-btn');
const equalsBtn = document.querySelector('.equals-btn');
const display = document.querySelector('.calc-display-text');

//manipulate HTML
const updateDisplay = (d) => display.innerHTML = d;

//bind functions to elements
Array.from(arrOfNumBtns).forEach(btn => btn.addEventListener('click', () => addToMemory(btn.getAttribute('data-val'), numMemory)));
Array.from(arrOfOperandBtns).forEach(btn => btn.addEventListener('click', () => currOperand = btn.getAttribute('data-val')));
equalsBtn.addEventListener('click', () => {
  console.log('pressed equals');
  const result = numMemory.reduce(reduceNums);
  console.log(result);
  updateDisplay(result);
  clearMemory();
});