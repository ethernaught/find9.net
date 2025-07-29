const { v4: uuidv4 } = require('uuid');

exports.getSideBar = (req, res) => {
    res.locals.sidebar = [
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
    ];
};

exports.getHome = (req, res) => {
    //((req.useragent.isMobile) ? 'mobile' : 'desktop')
    res.render('layouts', {
        title: 'Home Page',
        page: '/',
        uniqid: uuidv4,
        styles: [
            'table',
            'home'
        ]
    });
};
