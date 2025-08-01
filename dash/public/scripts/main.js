function getPage(page){
    if(processing){
        return;
    }
    processing = true;

    fetch(page, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((response) => {
        if(!response.ok){
            throw new Error('Failed to get data');
        }

        return response.json();

    }).then((data) => {
        console.log(data);

        processing = false;

    }).catch((error) => {
        console.log(error);
        processing = false;
    });
}
