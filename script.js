function Boo() {
    let count = 1;
    let done = false;
  
    console.log('start');
  
    return {
      next: function() {
        if (count <= 3) {
          return { value: count++, done: false };
        } else {
          console.log('finish');
          done = true;
          return { done: true };
        }
      }
    };
  }
  
  const iterator = Boo();
  console.log(iterator.next().value); // 1
  console.log(iterator.next().done); // false
    