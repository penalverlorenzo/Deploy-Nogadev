import { dbURL, jwtKey } from "../../../config"
import CryptoJS from 'crypto-js';



export const generateToken = async () =>{
    const key = CryptoJS.SHA256(jwtKey);
    const doesTokenExist = localStorage.getItem('refreshToken');
    if (!doesTokenExist) {
        const createToken = await fetch(dbURL+'/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ jwtSecret: key.toString() })
        })
        const {token, refreshToken} =  await createToken.json();
        localStorage.setItem("token",token);
        localStorage.setItem("refreshToken",refreshToken);
    }
}

export const refreshToken = async() => {
    try {
        const doesTokenExist = localStorage.getItem('refreshToken');
        const createToken = await fetch(dbURL + '/refresh-token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token: doesTokenExist })
        });

        localStorage.removeItem("token");

        if (createToken.status === 401) {
            localStorage.removeItem("refreshToken");
            await generateToken();
            return;
        }

        const { refreshedToken } = await createToken.json();
        localStorage.setItem("token", refreshedToken);
    } catch (error) {
        console.error("Error refreshing token:", error);
    }

}