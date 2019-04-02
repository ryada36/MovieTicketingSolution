// Async await
async function testAsync(){
    var promise =  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(6)
        },2000)
    });


    // main point is await can only be used inside async function
    var res = await promise;
    console.log(res);
    console.log('after async call');
}


testAsync();