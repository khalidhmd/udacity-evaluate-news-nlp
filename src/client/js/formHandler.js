const callAPI = async (url) => {
    const baseUrl = 'http://localhost:8080/test?url='
    const response = await fetch(`${baseUrl}${url}`);
    const data = await response.json();
    return data;
}

export { callAPI }
