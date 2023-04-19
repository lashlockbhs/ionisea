const add = (a, b) => {
  if (b === 0) {
    return a;
  } else {
    return 1 + add(a, b - 1);
  };
};

const multiply = (a, b) => {
  if (b === 0) {
    return 0;
  } else {
    return a + multiply(a, b - 1);
  };
};

const double = (n, a) => {
  if (a === 0) {
    return n;
  } else {
    return double(n * 2, a - 1);
  };
};

const triple = (n, a) => {
  if (a === 0) {
    return n;
  } else {
    return triple(n * 3, a - 1);
  };
};

const power = (n, a) => {
  if (a === 0) {
    return 1
  } else {
    return n * power(n, a - 1)
  }
}

const deleteXs = (str) => {
  if (str.length === 0){
    return str
  } else if (str[0] === 'x'){
    return deleteXs(str.slice(1))
  } else {
    return str[0] + deleteXs(str.slice(1))
  }
}

const countXs = (str) => { //it doesnt use index of !! (:::
  if (str.split('').every(x => x === 'x')) {
    return str.length;
  } else if (str[0] === 'x') {
    return countXs(str.substring(1) + 'x');
  } else {
    return countXs(str.substring(1));
  };
};

const maximum = (arr) => {
  if (arr.length === 0){
    return -Infinity
  } else {
    return Math.max(arr[0], maximum(arr.slice(1)))
  }
}

const every = (arr, p) => {
  if (arr.length === 0) {
    return true
  } else {
    return !p(arr[0]) && every(arr.slice(1), p)
  }
}

const some = (arr, p) => {
  if (arr.length === 0) {
    return false
  } else if (p(arr[0])) {
    return true
  } else {
    return some(arr.slice(1), p)
  }
}