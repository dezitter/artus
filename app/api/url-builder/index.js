const { API_HOST, API_PORT } = process.env;

export default function(url) {
    return `http://${API_HOST}:${API_PORT}${url}`;
}
