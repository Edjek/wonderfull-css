const statusText = document.querySelector('.status-text');

const checkStatus = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        return response.status >= 200 && response.status < 300;
    } catch (error) {
        return false;
    }
};

setInterval(async () => {
    const status = checkStatus();
    console.log(status);
    statusText.innerText = `You're ${status ? 'online' : 'offline'} now!`;
    statusText.className = `status-text ${status ? 'connected' : 'disconnected'}`;
}, 3000);
