
function handleException1(){
    let pi = 3.14159;
    console.log(pi.toFixed(2));//two decimal values
    console.log(pi.toFixed(100));//100 decimal values
    //console.log(pi.toFixed(101));//RangeError: over the limit, digit should be 0 to 100
    }
    
    //to overcome this type of exception use the round with throw keyword
    
    function handleException2(round){
    if(round >= 0 && round < 101){
    let pi = 3.14159;
    console.log(pi.toFixed(round));
    }else{
    throw new SyntaxError("change your number");
    }
    }
    
    // another way to handle with try - catch
    function handleException3(round){
    try{
    let pi = 3.14159;
    console.log(pi.toFixed(round));
    }catch(error){
    console.error("not a valid range")
    console.error(error.stack);
    }
    }
    
    //ignore the error
    function handleException4(round){
    try {
    let pi = 3.14159;
    console.log(pi.toFixed(round));
    }catch{}
    }
    
    
    //using finally
    
    function handleException5(round){
    try {
    let pi = 3.14159;
    console.log(pi.toFixed(round));
    }catch(error){
    console.error("range issue")
    }finally{
    console.log("I am done");
    }
    }
    
//customized exception
    function handleException6(round){
        if(round >= 0 && round < 101){
        let pi = 3.14159;
        console.log(pi.toFixed(round));
        }else{
        throw new NewException();
        }
        }
        
        class NewException{
        constructor(){
        console.log("this is customized exception");
        }
        }
    handleException6(101);
    
    