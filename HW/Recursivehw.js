let dosa = 0;
function cooking(n) {
    if(n=1){
        console.log("dosa is ready");
    }
    else{
        dosa++;
        return cooking(n-1);
    }
    
}
cooking(5);