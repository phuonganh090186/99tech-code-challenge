var sum_to_n_a = function (n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};

var sum_to_n_b = function (n) {
  return (n * (n + 1)) / 2;
};

var sum_to_n_c = function (n) {
  let numberArray = Array.from(Array(n), (_, i) => i + 1);
  return numberArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};
