var checkDivisibility = function(n) {
    const originalNum = n;

    const digits = String(n).split('');

    let sum = digits.reduce((acc,cur)=>acc+Number(cur),0);

    let prod = digits.reduce((acc,cur)=>acc*Number(cur),1);

    let combinedSum = sum + prod;

    if(originalNum % combinedSum === 0 ) {
        return true;
    }else{
        return false;
    }
};