//Asal Sayı.
function findPrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
      let number = 0;
      for (let j = 1; j <= numbers[i]; j++) {
        if (numbers[i] % j == 0) {
          number++;
        }
      }
  
      if (number == 2) {
        console.log(numbers[i] + " Asal Sayıdır.");
      } else {
        console.log(numbers[i] + " ASal Sayı değildir.");
      }
    }
  }
  
  findPrime(12, 19, 25, 31, 7, 25);