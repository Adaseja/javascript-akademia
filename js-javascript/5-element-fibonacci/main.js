function main() {
    for (let index = 0; index < 10; index++) {
      console.log(fib(index));
    }
  }
  
  function fib(index) {
    if (index === 0 || index === 1) {
      return 1;
    } else {
      return fib(index - 1) + fib(index - 2);
    }
  }
  
  main();
  