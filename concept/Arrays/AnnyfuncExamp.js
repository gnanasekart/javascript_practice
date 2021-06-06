var quantity = 0;
function cooking() {
    console.log("dosa ready");
    return ()=>{
        console.log("vasa included");
    }
}

cooking()();