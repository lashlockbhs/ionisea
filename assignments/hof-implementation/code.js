// N.B. Do not use the array methods of the same name to implement these functions!

const filter = (predicate, array) => {
  const filtered = []
  for (const element of array) {
    if (predicate(element)) {
      filtered.push(element)
    }
  }
  return filtered
};

const map = (fn, array) => {
};

const flatMap = (fn, array) => {
};

const reduce = (fn, initialValue, array) => {
};

const every = (predicate, array) => {
};

const some = (predicate, array) => {
};
