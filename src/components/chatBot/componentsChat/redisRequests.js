
export async function getItem (key,url, token) {
    const response = await fetch(`${url}/items/${key}`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        
    });
    const data = await response.json()
    console.log({data});
    return data.item
}

export async function createItem (key, value,url, token) {
    const response = await fetch(url+'/items', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ key: key , value: value})
    });
    return response
}

