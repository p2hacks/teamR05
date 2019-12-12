function api(data) {
    return fetch('https://', {
        method: 'post',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/jason; charset=utf=8'
        },
        body: JSON.stringify(data)
    })
        .then(res => (res.jasn()))
        .catch(error => ({ error }));
}

export default api;