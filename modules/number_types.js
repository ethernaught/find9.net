exports.formatBytes = (size, precision = 2) => {
    const base = Math.log(size) / Math.log(1024);
    const suffixes = ['', 'K', 'M', 'G', 'T'];
    
    return `${(Math.pow(1024, base - Math.floor(base))).toFixed(precision)} ${suffixes[Math.floor(base)]}B`;
};

exports.formatNumber = (num, precision = 2) => {
    if(num === 0){
        return '0';
    }

    const suffixes = ['', 'k', 'm', 'b', 't', 'q'];
    const tier = Math.floor(Math.log10(Math.abs(num))/3);

    const scale = Math.pow(10, tier*3);
    const scaled = num/scale;

    return `${scaled.toFixed(precision)}${suffixes[tier]}`;
};
