const { v4: uuidv4 } = require('uuid');

exports.getPortal = (req, res) => {
    //((req.useragent.isMobile) ? 'mobile' : 'desktop')
    res.render('layouts/portal', {
        title: 'Portal Page',
        page: 'portal',
        uniqid: uuidv4,
        styles: [
            'portal'
        ]
    });
};
