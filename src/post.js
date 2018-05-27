if (navigator.userAgent.match(/Chrome\/\d+/)) {
    result['UA'] = navigator.userAgent.match(/Chrome\/\d+/)[0]
} else if (navigator.userAgent.match(/Firefox\/\d+/)) {
    result['UA'] = navigator.userAgent.match(/Firefox\/\d+/)[0]
} else {
    // Chrome/FF以外は知らない
    result['UA'] = `Unknown -> ${navigator.userAgent}`
}

fetch('http://host.docker.internal:28000', {
    method: 'POST',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(result),
});

console.log(result);

document.title = 'Finished';
