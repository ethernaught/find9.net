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
    clearRecordContent();

    switch(e.target.value){
        case RecordTypes.A:
            createARecord();
            break;

        case RecordTypes.AAAA:
            createAAAARecord();
            break;
            
        case RecordTypes.CAA:
            createCAARecord();
            break;
            
        case RecordTypes.CERT:
            createCERTRecord();
            break;
            
        case RecordTypes.CNAME:
            createCNAMERecord();
            break;
            
        case RecordTypes.DNSKEY:
            createDNSKEYRecord();
            break;
            
        case RecordTypes.DS:
            createDSRecord();
            break;
            
        case RecordTypes.HTTPS:
            createHTTPSRecord();
            break;
            
        case RecordTypes.LOC:
            createLOCRecord();
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
    const address = createTextField({
        label: 'IPv4 Address',
        name: 'address',
        required: true
    });
    recordContent.appendChild(address);
}

function createAAAARecord(){
    const address = createTextField({
        label: 'IPv6 Address',
        name: 'address',
        required: true
    });
    recordContent.appendChild(address);
}

function createCAARecord(){
    //FLAGS - no change = 0

    const caDomain = createTextField({
        label: 'CA Domain',
        name: 'ca_domain',
        required: true
    });
    recordContent.appendChild(caDomain);
}

function createCERTRecord(){
    const field = document.createElement('field');

    //NUMBER FIELD
    const certType = createTextField({
        label: 'Cert Type',
        name: 'cert_type',
        required: true
    });
    field.appendChild(certType);

    const keyTag = createTextField({
        label: 'Key Tag',
        name: 'key_tag',
        required: true
    });
    field.appendChild(keyTag);

    const algorithm = createTextField({
        label: 'Algorithm',
        name: 'algorithm',
        required: true
    });
    field.appendChild(algorithm);

    recordContent.appendChild(field);

    //TEXT FIELD
    const certificate = createTextField({
        label: 'Certificate',
        name: 'certificate',
        required: true
    });
    recordContent.appendChild(certificate);
}

function createCNAMERecord(){
    const target = createTextField({
        label: 'Target',
        name: 'target',
        required: true
    });
    recordContent.appendChild(target);
}

function createDNSKEYRecord(){
    const field = document.createElement('field');

    const flags = createTextField({
        label: 'Flags',
        name: 'flags',
        required: true
    });
    field.appendChild(flags);

    //SELECT PROTOCOL

    const algorithm = createTextField({
        label: 'Algorithm',
        name: 'algorithm',
        required: true
    });
    field.appendChild(algorithm);

    recordContent.appendChild(field);

    //TEXT FIELD
    const publicKey = createTextField({
        label: 'Public Key',
        name: 'publicKey',
        required: true
    });
    recordContent.appendChild(publicKey);
}

function createDSRecord(){
    const field = document.createElement('field');

    const keyTag = createTextField({
        label: 'Key Tag',
        name: 'key_tag',
        required: true
    });
    field.appendChild(keyTag);

    const algorithm = createTextField({
        label: 'Algorithm',
        name: 'algorithm',
        required: true
    });
    field.appendChild(algorithm);

    //SELECT DIGEST_TYPE

    recordContent.appendChild(field);

    //TEXT FIELD
    const digest = createTextField({
        label: 'Digest',
        name: 'digest',
        required: true
    });
    recordContent.appendChild(digest);
}

function createHTTPSRecord(){
    const field = document.createElement('field');

    const priority = createTextField({
        label: 'Priority',
        name: 'priority',
        required: true
    });
    field.appendChild(priority);

    const target = createTextField({
        label: 'Target',
        name: 'target',
        required: true
    });
    field.appendChild(target);

    const value = createTextField({
        label: 'Value',
        name: 'value',
        required: true
    });
    field.appendChild(value);

    recordContent.appendChild(field);
}

function createLOCRecord(){
    let field = document.createElement('field');

    let degrees = createTextField({
        label: 'Degrees',
        name: 'degrees',
        required: true
    });
    field.appendChild(degrees);

    let minutes = createTextField({
        label: 'Minutes',
        name: 'minutes',
        required: true
    });
    field.appendChild(minutes);

    let seconds = createTextField({
        label: 'Seconds',
        name: 'seconds',
        required: true
    });
    field.appendChild(seconds);

    //SELECT DIRECTION

    recordContent.appendChild(field);


    field = document.createElement('field');

    degrees = createTextField({
        label: 'Degrees',
        name: 'degrees',
        required: true
    });
    field.appendChild(degrees);

    minutes = createTextField({
        label: 'Minutes',
        name: 'minutes',
        required: true
    });
    field.appendChild(minutes);

    seconds = createTextField({
        label: 'Seconds',
        name: 'seconds',
        required: true
    });
    field.appendChild(seconds);

    //SELECT DIRECTION

    recordContent.appendChild(field);


    field = document.createElement('field');

    const horizontal = createTextField({
        label: 'Horizontal',
        name: 'horizontal',
        required: true
    });
    field.appendChild(horizontal);

    const vertical = createTextField({
        label: 'Vertical',
        name: 'vertical',
        required: true
    });
    field.appendChild(vertical);

    const altitude = createTextField({
        label: 'Altitude',
        name: 'altitude',
        required: true
    });
    field.appendChild(altitude);

    const size = createTextField({
        label: 'Size',
        name: 'size',
        required: true
    });
    field.appendChild(size);

    recordContent.appendChild(field);
}

