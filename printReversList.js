let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
function printRevL(list) {
    if(list.next) {
        printRevL(list.next);
    }
    alert(list.value);
}  