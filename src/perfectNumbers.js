//Mükemmel Sayı
function perfectNumbers() {
    let number=1
    for(let number=1;number<=1000;number++){
        let check=0;
        for(let i=1;i<number;i++){
            if(number%i==0)
            check+=i
        }
        if(check==number)
        
        console.log(number);
    }    
}
perfectNumbers()