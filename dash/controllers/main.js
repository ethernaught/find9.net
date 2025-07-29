const { v4: uuidv4 } = require('uuid');

exports.getHome = (req, res) => {
    //((req.useragent.isMobile) ? 'mobile' : 'desktop')
    res.render('layouts', {
        title: 'Home Page',
        page: '/',
        uniqid: uuidv4,
        sidebar: [
            {
                title: 'Home',
                page: '/'
            },
            {
                title: 'Analytics & Logs',
                page: '/analytics'
            },
            {
                title: 'Load Balancing',
                page: '/load-balancing'
            }
        ],
        styles: [
            'table',
            'home'
        ]
    });
};
