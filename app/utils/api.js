async function getdata(){
    const res = await fetch('http://172.208.91.27:1337/api/articles')
    

    if(!res.ok){
        throw new Error('failed fecthing data')
    }
    return res.json()
}
