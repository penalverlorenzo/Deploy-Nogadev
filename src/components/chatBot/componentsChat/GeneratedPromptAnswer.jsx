/* eslint-disable no-control-regex */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { dbURL } from "../../../config";
import { refreshToken } from "./AccessToken";

const parseMessage = (message) => {
    // Expresiones Regulares para cada posible caso de vocales con caracteres especiales
    const vowelCaseA = /[áÁàâÀÂäÄãÃ]/g;
    const vowelCaseE = /[èéÈêÊëËÉ]/g;
    const vowelCaseI = /[îíÍÎïÌìÏ]/g;
    const vowelCaseO = /[öóòÒôõÕÔÓÖ]/g;
    const vowelCaseU = /[üÜùûÛÙúÚ]/g;
    // Se limpia el mensaje, se lo pasa a minúsculas, se le quitan los espacios y signos de preguntas, además se reemplazan las vocales con caracteres especiales por vocales simples
    const cleanedMessage = message.toLowerCase()
    .replaceAll(/[¿?\s]/g, '')
    .replaceAll(vowelCaseA, 'a')
    .replaceAll(vowelCaseI, 'i')
    .replaceAll(vowelCaseO, 'o')
    .replaceAll(vowelCaseU, 'u')
    .replaceAll(vowelCaseE, 'e');

    return cleanedMessage
}

export const GeneratedPromptAnswer = async (prompt) => {
    let result;
    let data;
    const parsedData = parseMessage(prompt)
    const localStorageToken = localStorage.getItem('token')
    const localData = localStorage.getItem(`${parsedData}`) 
    try {
        if (!localData) {
                    const response = await fetch(dbURL+'/info', {
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
                    result = await GeneratedPromptAnswer('Toma esta pregunta, reformulala, luego devuelve la respuesta sin devolver la reformulación de la respuesta, solo me interesa la respuesta en sí: '+ prompt)
                }
                localStorage.setItem(`${parsedData}`, JSON.stringify(result.response? result.response : result))
            
        }
        else {
            result = JSON.parse(localData)
        }
        let finalRes = result.response ? result.response : result;

        return finalRes
    } catch (error) {
        return `EN: There's something wrong, try sending your message again. ESP: Se ha producido un error, intenta enviar tu mensaje de vuelta`;
    }

}
