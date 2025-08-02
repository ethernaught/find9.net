var processing = false;

function getPage(page){
    if(processing){
        return;
    }
    processing = true;

    fetch(page, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        if(!response.ok){
            throw new Error('Failed to get data');
        }

        return response.text();

    }).then((data) => {
        console.log(data);

        document.querySelector('content').innerHTML = data;

        processing = false;

    }).catch((error) => {
        console.log(error);
        processing = false;
    });
}
