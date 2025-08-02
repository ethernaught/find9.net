const addRecordButton = document.getElementById('add-record');

addRecordButton.onclick = function(e){
    console.log('CLICK');
    getPage('/fragments/add-record');
};


