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
  const ind = str.indexOf('x')
  if (ind === -1) {
    return str;
  } else {
    return deleteXs(str.substring(0, ind) + str.substring(ind + 1, str.length))
  }
}

const maximum = (arr) => {
  if (arr.length = 1){
    return arr[0]
  } else if (arr[0] < arr[1]){
    return arr.slice(1) // store max in first val
  } else {
    return arr[0].concat(arr.slice(2))
  }
}