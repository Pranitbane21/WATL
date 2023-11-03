function checkPrimeNumber(num : number){
    let prime = true;
    for (let i = 2; i < num; i++) {
        if(num %i == 0){
            prime = false;
            break
        }
    }
    if(prime){
        console.log(`The number ${num} is prime`)
    }else{
        console.log(`The number ${num} is not prime`)
    }
}

checkPrimeNumber(5)
checkPrimeNumber(10)

export {}