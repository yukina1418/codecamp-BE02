function boolean(input1, input2) {
  if (input1 === true || input2 === true) {
    return true;
  } else if (input1 === false && input2 === false) {
    return false;
  }
}

boolean(true, true);
