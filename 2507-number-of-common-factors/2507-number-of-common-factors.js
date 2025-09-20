var commonFactors = function(a, b) {
    let ac=[];
    let bc=[];
    for(let i=1;i<=a;i++){
        if(a%i===0){
            ac.push(i)
        }
    }
    for(let j=1;j<=b;j++){
        if(b%j===0){
            bc.push(j);
        }
    }
    let res = [...ac,...bc];
    let cf = res.filter((ele,index,res)=>{return res.indexOf(ele)!==index})
    return cf.length;
};