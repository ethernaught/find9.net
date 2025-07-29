const { v4: uuidv4 } = require('uuid');

exports.getHome = (req, res) => {
    //((req.useragent.isMobile) ? 'mobile' : 'desktop')
    res.render('layouts/home', {
        title: 'Home Page',
        page: 'home',
        uniqid: uuidv4,
        styles: [
            'home'
        ]
    });
};
