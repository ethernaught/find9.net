const addRecordButton = document.getElementById('add-record');
const formType = document.getElementById('form-type');
const formTTL = document.getElementById('form-ttl');

addRecordButton.onclick = function(e){
    console.log('CLICK');
    getPage('/fragments/add-record');
};

formType.onchange = function(e){
    console.log(e.target.value);
};



