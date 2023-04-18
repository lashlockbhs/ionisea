const add = (a, b) => {
  if (b === 0) {
    return a;
  } else {
    return add(a + 1, b - 1);
  };
};

const multiply = (a, b) => { //this one looks improvable
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
  if (str[0] === 'x') {
    return str.slice(1)
  } else {
    return str.slice(1)
  }

  const ind = str.indexOf('x')
  if (ind === -1) {
    return str;
  } else {
    return deleteXs(str.substring(0, ind) + str.substring(ind + 1, str.length))
  }
}