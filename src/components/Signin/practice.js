const obj = [
  { item: 'something' },
  { item: 'more something' },
];

const copy = obj.slice();

Array.prototype.move = function (from, to) {
  this.splice(to, 0, this.splice(from, 1)[0]);
};

copy.move(1, 0);

console.log(copy);

Array.prototype.move = function (from, to) {
  this.splice(to, 0, this.splice(from, 1)[0]);
}

Array.prototype.move = function (from, to) {
  this.splice(to, 0, this.splice(from, 1)[0]);
}