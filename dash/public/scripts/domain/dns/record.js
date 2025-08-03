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
            createMXRecord();
            break;
            
        case RecordTypes.NAPTR:
            createNAPTRRecord();
            break;
            
        case RecordTypes.NS:
            createNSRecord();
            break;
            
        case RecordTypes.PTR:
            createPTRRecord();
            break;
            
        case RecordTypes.SMIMEA:
            createSMIMEARecord();
            break;
            
        case RecordTypes.SRV:
            createSRVRecord();
            break;
            
        case RecordTypes.SSHFP:
            createSSHFPRecord();
            break;
            
        case RecordTypes.SVCB:
            createSVCBRecord();
            break;
            
        case RecordTypes.TLSA:
            createTLSARecord();
            break;
            
        case RecordTypes.TXT:
            createTXTRecord();
            break;
            
        case RecordTypes.URI:
            createURIRecord();
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

function createMXRecord(){
    const server = createTextField({
        label: 'Mail Server',
        name: 'server',
        required: true
    });
    recordContent.appendChild(server);
}

function createNAPTRRecord(){
    let field = document.createElement('field');

    const order = createTextField({
        label: 'Order',
        name: 'order',
        required: true
    });
    field.appendChild(order);

    const preference = createTextField({
        label: 'Preference',
        name: 'preference',
        required: true
    });
    field.appendChild(preference);

    const flags = createTextField({
        label: 'Flags',
        name: 'flags',
        required: true
    });
    field.appendChild(flags);

    recordContent.appendChild(field);

    field = document.createElement('field');

    const service = createTextField({
        label: 'Service',
        name: 'service',
        required: true
    });
    field.appendChild(service);

    const regex = createTextField({
        label: 'RegEx',
        name: 'regex',
        required: true
    });
    field.appendChild(regex);

    const replacement = createTextField({
        label: 'Replacement',
        name: 'replacement',
        required: true
    });
    field.appendChild(replacement);

    recordContent.appendChild(field);
}

function createNSRecord(){
    const server = createTextField({
        label: 'Name Server',
        name: 'server',
        required: true
    });
    recordContent.appendChild(server);
}

function createPTRRecord(){
    const domain = createTextField({
        label: 'Domain',
        name: 'domain',
        required: true
    });
    recordContent.appendChild(domain);
}

function createSMIMEARecord(){
    const field = document.createElement('field');

    const usage = createTextField({
        label: 'Usage',
        name: 'usage',
        required: true
    });
    field.appendChild(usage);

    const selector = createTextField({
        label: 'Selector',
        name: 'selector',
        required: true
    });
    field.appendChild(selector);

    const matchingType = createTextField({
        label: 'Flags',
        name: 'matching_type',
        required: true
    });
    field.appendChild(matchingType);

    recordContent.appendChild(field);

    const certificate = createTextField({
        label: 'Certificate',
        name: 'certificate',
        required: true
    });
    recordContent.appendChild(certificate);
}

function createSRVRecord(){
    const field = document.createElement('field');

    const priority = createTextField({
        label: 'Priority',
        name: 'priority',
        required: true
    });
    field.appendChild(priority);

    const weight = createTextField({
        label: 'Weight',
        name: 'weight',
        required: true
    });
    field.appendChild(weight);

    const port = createTextField({
        label: 'Port',
        name: 'port',
        required: true
    });
    field.appendChild(port);

    recordContent.appendChild(field);

    const target = createTextField({
        label: 'Target',
        name: 'target',
        required: true
    });
    recordContent.appendChild(target);
}

function createSSHFPRecord(){
    const field = document.createElement('field');

    const algorithm = createTextField({
        label: 'Algorithm',
        name: 'algorithm',
        required: true
    });
    field.appendChild(algorithm);

    const sshfp_type = createTextField({
        label: 'Type',
        name: 'sshfp_type',
        required: true
    });
    field.appendChild(sshfp_type);

    recordContent.appendChild(field);

    const fingerprint = createTextField({
        label: 'Fingerprint',
        name: 'fingerprint',
        required: true
    });
    recordContent.appendChild(fingerprint);
}

function createSVCBRecord(){
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

function createTLSARecord(){
    const field = document.createElement('field');

    const usage = createTextField({
        label: 'Usage',
        name: 'usage',
        required: true
    });
    field.appendChild(usage);

    const selector = createTextField({
        label: 'Selector',
        name: 'selector',
        required: true
    });
    field.appendChild(selector);

    const matching_type = createTextField({
        label: 'Matching Type',
        name: 'matching_type',
        required: true
    });
    field.appendChild(matching_type);

    recordContent.appendChild(field);

    const certificate = createTextField({
        label: 'Certificate',
        name: 'certificate',
        required: true
    });
    recordContent.appendChild(certificate);
}

function createTXTRecord(){
    const content = createTextField({
        label: 'Content',
        name: 'content',
        required: true
    });
    recordContent.appendChild(content);
}

function createURIRecord(){
    const field = document.createElement('field');

    const priority = createTextField({
        label: 'Priority',
        name: 'priority',
        required: true
    });
    field.appendChild(priority);

    const weight = createTextField({
        label: 'Weight',
        name: 'weight',
        required: true
    });
    field.appendChild(weight);

    recordContent.appendChild(field);

    const target = createTextField({
        label: 'Target',
        name: 'target',
        required: true
    });
    recordContent.appendChild(target);
}

