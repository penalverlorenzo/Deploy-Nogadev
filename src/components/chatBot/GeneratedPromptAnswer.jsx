/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react"

export const GeneratedPromptAnswer = async ({ prompt }) => {
    let result;
            try {
                const response = await fetch('http://localhost:3000/api/v1/info', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ message: prompt })
                });
                const data = await response.json();
                console.log({data});
                result = data;
            } catch (error) {
                result = {response: `EN: There's something wrong, try sending your message again. ESP: Se ha producido un error, intenta enviar tu mensaje de vuelta`};
            }
            return result.response ? result.response: result.error;
        }



