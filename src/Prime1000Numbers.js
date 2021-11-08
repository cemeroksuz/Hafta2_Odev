//Asal Sayı.
function prime1000Number() {
    for (let i = 1; i <= 1000; i++) {
      let check = 0;
      for (let j = 0; j < i; j++) {
        if (i % j == 0) {
          check += j;
        }
      }
      if (check == 1) {
        console.log(i + " --> Asal Sayıdır.");
      }
    }
  }
  prime1000Number();