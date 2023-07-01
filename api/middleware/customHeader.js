const customHeader = (req, res, next) => {
    try{
        const api_key = req.headers.api_key
        if(api_key === 'gabi0'){
            next()
        }else{
            res.status(403).send({error:'API_KEY::INVALID'})    
        }
    }    
    catch(err){
        res.status(403).send({error:'HEAD::ERROR'})
    }
}


module.exports= customHeader;