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
    return multiply(a + a, b-1);
  };
};

const double = (n, a) => {
  if (a === 0){
    return n;
  } else {
    return double(n*2, a-1);
  };
};

const triple = (n, a) => {
  if (a === 0){
    return n;
  } else {
    return triple(n*3, a-1);
  };
};

const power = (n, a) =>{
  if (a === 0){
    return 1
  } else if (a === 1){
    return n;
  } else {
    return power(n**a, a-1)
  }
}

const deleteXs = (str) => {
  if (str.find()){

  }
}