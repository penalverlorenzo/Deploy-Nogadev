// import { jwtKey } from "../../config";
import CryptoJS from "crypto-js"

export const generateToken = async () =>{
    // const key = bcrypt.hash(jwtKey , 10);
    // const doesTokenExist = localStorage.getItem('token')
    // if (!doesTokenExist) {
    //     const createToken = await fetch('http://localhost:3000/api/v1/login',{
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ jwtSecret: key })
    //     })
    //     const {token} =  await createToken.json();
    //     console.log({token});
    //     return token
    // }else{
    //     return doesTokenExist
    // }

    const mensajeOriginal = 'Este es mi mensaje secreto';

    // Clave para cifrar el mensaje original (debe ser la misma clave utilizada para cifrar el mensaje cifrado)
    const claveAES = '1234567890123456'; // Clave de 128 bits (16 bytes) para AES

    // Vector de inicialización aleatorio
    const iv = CryptoJS.lib.WordArray.random(16); // Vector de inicialización aleatorio

    // Cifrar el mensaje original
    const mensajeCifrado = CryptoJS.AES.encrypt(mensajeOriginal, claveAES, { iv }).toString();
    console.log('Mensaje cifrado:', mensajeCifrado);

    const bytesCifrados = CryptoJS.AES.decrypt(mensajeCifrado, claveAES, { iv });
    const mensajeDescifrado = bytesCifrados.toString(CryptoJS.enc.Utf8);
    console.log({mensajeDescifrado});
    // Comparar el mensaje cifrado con el mensaje original
    if (mensajeDescifrado === mensajeOriginal) {
    console.log('El mensaje cifrado y el mensaje original son iguales.');
    } else {
    console.log('El mensaje cifrado y el mensaje original son diferentes.');
    }
}