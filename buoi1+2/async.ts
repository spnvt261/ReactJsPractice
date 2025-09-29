const demoAsync = async ()=>{
    console.log('demo async');
    let result = await new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Processing...');
            resolve('finished')
        },3000  )
    })
    console.log(result);
    
}

export {
    demoAsync
}