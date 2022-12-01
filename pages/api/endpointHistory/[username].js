//brackets tell nextjs that it is a dynamic routing parameter

export default function getEndpointByUsername (req, res){
    res.json({saveUser: req.query.username, message: 'getEndpointbyUsername'})

}

//req.query.username matches teh [username]