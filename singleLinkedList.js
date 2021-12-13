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

function printList(list) {
    // Loop-based solution
    while (list) {
        alert(list.value);
        list = list.next;
    }

    // Recursive solution
    alert(list.value);
    if (list.next) {
        printList(list.next);
    }
}