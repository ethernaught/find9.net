const addRecordButton = document.getElementById('add-record');
const recordContent = document.getElementById('record-content');
const formType = document.getElementById('form-type');
const formTTL = document.getElementById('form-ttl');

const RecordTypes = {
    A: 'A',
    AAAA: 'AAAA',
    CAA: 'CAA',
    CERT: 'CERT',
    CNAME: 'CNAME',
    DNSKEY: 'DNSKEY',
    DS: 'DS',
    HTTPS: 'HTTPS',
    LOC: 'LOC',
    MX: 'MX',
    NAPTR: 'NAPTR',
    NS: 'NS',
    PTR: 'PTR',
    SMIMEA: 'SMIMEA',
    SRV: 'SRV',
    SSHFP: 'SSHFP',
    SVCB: 'SVCB',
    TLSA: 'TLSA',
    TXT: 'TXT',
    URI: 'URI'
};
/*
addRecordButton.onclick = function(e){
    console.log('CLICK');
    getPage('/fragments/add-record');
};
*/

formType.onchange = function(e){
    switch(e.target.value){
        case RecordTypes.A:
            console.log('A');
            createARecord();
            break;

        case RecordTypes.AAAA:
            console.log('AAAA');
            createAAAARecord();
            break;
            
        case RecordTypes.CAA:
            console.log('CAA');
            break;
            
        case RecordTypes.CERT:
            console.log('CERT');
            break;
            
        case RecordTypes.CNAME:
            console.log('CNAME');
            break;
            
        case RecordTypes.DNSKEY:
            console.log('DNSKEY');
            break;
            
        case RecordTypes.HTTPS:
            console.log('HTTPS');
            break;
            
        case RecordTypes.LOC:
            console.log('LOC');
            break;
            
        case RecordTypes.MX:
            console.log('MX');
            break;
            
        case RecordTypes.NAPTR:
            console.log('NAPTR');
            break;
            
        case RecordTypes.NS:
            console.log('NS');
            break;
            
        case RecordTypes.PTR:
            console.log('PTR');
            break;
            
        case RecordTypes.SMIMEA:
            console.log('SMIMEA');
            break;
            
        case RecordTypes.SRV:
            console.log('SRV');
            break;
            
        case RecordTypes.SSHFP:
            console.log('SSHFP');
            break;
            
        case RecordTypes.SVCB:
            console.log('SVCB');
            break;
            
        case RecordTypes.TLSA:
            console.log('TLSA');
            break;
            
        case RecordTypes.TXT:
            console.log('TXT');
            break;
            
        case RecordTypes.URI:
            console.log('URI');
            break;
    }
};

function clearRecordContent(){
    while(recordContent.firstChild){
        recordContent.removeChild(recordContent.firstChild)
    }
}

function createARecord(){
    clearRecordContent();
    const address = createTextField({
        label: 'IPv4 Address',
        name: 'address'
    });

    recordContent.appendChild(address);
}

function createAAAARecord(){
    clearRecordContent();
    const address = createTextField({
        label: 'IPv6 Address',
        name: 'address'
    });

    recordContent.appendChild(address);
}


