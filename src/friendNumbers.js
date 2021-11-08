//Arkadaş sayılar
function friendNumbers(number1,number2) {
    let check1=1
    let check2=1
    let bigNumber
    let i=2
    if(number1>number2){
        bigNumber=number1
    }
    else
    bigNumber=number2
    while(i<=bigNumber/2){
        if(number1%i==0){
            check1=check1+i
        }
        if(number2%i==0){
            check2=check2+i
        }
        i++
    }
    if(number1==check2 && number2==check1){
        console.log(number1 + " ve " + number2 + " arkadaş sayılardır.")
    }
    else
    console.log(number1 + " ve " + number2 + " arkadaş sayı değildir.")


}
friendNumbers(5,10)
friendNumbers(220,284)
friendNumbers(512,354)
friendNumbers(17296 ,18416)
