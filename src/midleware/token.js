import jwt from 'jsonwebtoken'
export async function createToken(id) {
    return  await jwt.sign({id: id}, process.env.SECRET, {expiresIn: 3600} )
}

export async function verifyToken(req, res, next) {
try {
const {xtoken} = req.headers

    if(!xtoken) return res.json({value:"no has iniciado session", status:null})
    jwt.verify(xtoken,process.env.SECRET )
    next()
} catch (error) {
    res.json({value: "se debe iniciar session de nuevo", status: false})
}    
}