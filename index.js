const cats = ['Milo', 'Otis', 'Garfield'];
beforeEach(function () {
  cats.length = 0;

  cats.push('Milo', 'Otis', 'Garfield');
});

function destructivelyAppendCat() {
return cats.push('Ralph');
}
destructivelyAppendCat();

function destructivelyPrependCat() {
  return cats.unshift('Bob')
}
destructivelyPrependCat();

function destructivelyRemoveLastCat() {
  return cats.pop();
}
destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat() {
  return cats.shift();
}
destructivelyRemoveFirstCat();

function appendCat() {
 return [...cats, 'Broom'];
}
appendCat();

function prependCat() {
  return ['Arnold', ...cats]
}
prependCat();

function removeLastCat() {
  return cats.slice(0, -1);
}
removeLastCat();

function removeFirstCat() {
  return cats.slice(1);
}
removeFirstCat();
