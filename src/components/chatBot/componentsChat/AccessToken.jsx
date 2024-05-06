import { dbURL, jwtKey } from "../../../config"
import CryptoJS from 'crypto-js';



export const generateToken = async () =>{
    const key = CryptoJS.SHA256(jwtKey)
    const doesTokenExist = localStorage.getItem('token')
    if (!doesTokenExist) {
        const createToken = await fetch(dbURL+'/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ jwtSecret: key.toString() })
        })
        const {token} =  await createToken.json();
        localStorage.setItem("token",token)
    }else{
        const createToken = await fetch(dbURL+'/refresh-token',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token: doesTokenExist })
        })
        const {refreshedToken} = await createToken.json();
        localStorage.removeItem("token");
        localStorage.setItem("token", refreshedToken);
    }
}

export const refreshToken = () => {
    // Set intertval cada 14 minutos
    setInterval(async ()=> {
        const doesTokenExist = localStorage.getItem('token')
        const createToken = await fetch(dbURL+ '/refresh-token',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token: doesTokenExist })
        })
        const {refreshedToken} = await createToken.json();
        localStorage.removeItem("token");
        localStorage.setItem("token",refreshedToken);
    }, 840000)
}