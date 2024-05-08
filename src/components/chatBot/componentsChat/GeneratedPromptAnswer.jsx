/* eslint-disable no-control-regex */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { dbURL } from "../../../config";
import { refreshToken } from "./AccessToken";

export const GeneratedPromptAnswer = async (prompt) => {
    let result;
    let data;
    const localStorageToken = localStorage.getItem('token')
    try {
        const response = await fetch(dbURL + '/info', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorageToken}`
            },
            body: JSON.stringify({ message: prompt })
        });
        data = await response.json();
        result = data;
        if (response.status === 401) {
            await refreshToken();
            result = await GeneratedPromptAnswer(prompt);
        }
        if (result === '' || result.response === '') {
            result = await GeneratedPromptAnswer('Toma esta pregunta, reformulala, luego devuelve la respuesta sin devolver la reformulación de la respuesta, solo me interesa la respuesta en sí: ' + prompt)
        }
        let finalRes = result.response ? result.response : result;
        return finalRes
    } catch (error) {
        return `EN: There's something wrong, try sending your message again. ESP: Se ha producido un error, intenta enviar tu mensaje de vuelta`;
    }

}
