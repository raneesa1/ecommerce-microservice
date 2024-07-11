import jwt from 'jsonwebtoken'

export default (payload:{userId: string,userEmail: string,role:string, isAdmin: boolean, isBlocked: boolean}) => {
    return jwt.sign(payload, String(process.env.AUTH_JWT_SECRET),{expiresIn: 60*60*24})
}