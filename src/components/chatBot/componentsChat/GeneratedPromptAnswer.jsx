/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react"

const parseMessage = (message) => {
    const lowerCasePrompt = message.toLowerCase()
    const noQuestionMark = lowerCasePrompt.replaceAll('?',"")
    const noInitialQuestionMark = noQuestionMark.replaceAll('¿',"")
    const deletedSpaces = noInitialQuestionMark.replaceAll(' ',"")
    return deletedSpaces
}


export const GeneratedPromptAnswer = async (prompt) => {
    let result;
    const parsedData = parseMessage(prompt)

    const localData = localStorage.getItem(`${parsedData}`)
    try {

        if (!localData) {
            const response = await fetch('http://localhost:3000/api/v1/info', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: prompt })
            });
            const data = await response.json();
            result = data;
            if (data.response === "") {
                localStorage.removeItem(`${parseMessage}`)
            }
            localStorage.setItem(`${parsedData}`, JSON.stringify(data.response))
        } 
        else {
            result = JSON.parse(localData)
        }
        
        return result.response ? result.response : result;
    } catch (error) {
        return `EN: There's something wrong, try sending your message again. ESP: Se ha producido un error, intenta enviar tu mensaje de vuelta`;
    }

}
