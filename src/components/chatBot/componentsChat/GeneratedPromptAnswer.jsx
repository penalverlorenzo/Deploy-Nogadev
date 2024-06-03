/* eslint-disable no-control-regex */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { dbURL } from "../../../config";
import { refreshToken } from "./AccessToken";

export const GeneratedPromptAnswer = async (prompt, lang="Español") => {
    const IAmodel = document.getElementById('IA').textContent
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
            body: JSON.stringify({ message: prompt, language: lang, model: IAmodel})
        });
        data = await response.json();
        result = data;
        if (response.status === 401) {
            await refreshToken();
            result = await GeneratedPromptAnswer(prompt);
        }
        // console.log({});
        console.log({result, IAmodel});
        let finalRes = result.response ? result.response : result;
        return finalRes
    } catch (error) {
        return `EN: There's something wrong, try sending your message again. ESP: Se ha producido un error, intenta enviar tu mensaje de vuelta`;
    }

}
