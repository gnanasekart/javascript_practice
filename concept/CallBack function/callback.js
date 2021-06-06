
function credit(creditAmount){
    setTimeout(() => {
    return creditAmount;
    }, 2000);
    }
    
    function debit(debitAmount){
    return debitAmount;
    }
    //here credit will wait for 2 sec but debit will start execute 
    //it wont consider the credit wait function. due to that we may face issue.
    //to over come this we go with call back
    
    function credit(creditAmount,callback){
    setTimeout(()=> {
    callback(creditAmount);//callback(creditAmount - 2000)
    }, 2000);
    }
    
    function debit(debitAmount){
    return debitAmount;
    }
    
    credit(10000, (amt) => {
    console.log(`amount of ${amt} is credited...`);
    console.log(debit(5000));
    })
    