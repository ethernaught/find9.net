const { v4: uuidv4 } = require('uuid');

exports.getSideBar = (req, res) => {
    res.locals.sidebar = [
        {
            title: 'Overview',
            page: `/domain/${domain}`
        },
        {
            title: 'DNS',
            sub: [
                {
                    title: 'Records',
                    page: `/domain/${domain}/dns/records`,
                },
                {
                    title: 'Analytics',
                    page: `/domain/${domain}/dns/analytics`,
                },
                {
                    title: 'Settings',
                    page: `/domain/${domain}/dns/settings`,
                }
            ]
        },
        {
            title: 'SSL/TLS',
            sub: [
                {
                    title: 'Overview',
                    page: `/domain/${domain}/ssl-tls`,
                }
            ]
        },
        {
            title: 'Caching',
            sub: [
                {
                    title: 'Overview',
                    page: `/domain/${domain}/caching`,
                },
                {
                    title: 'Configuration',
                    page: `/domain/${domain}/caching/configuration`,
                },
                {
                    title: 'Cache Rules',
                    page: `/domain/${domain}/caching/cahce-rules`,
                }
            ]
        }
    ];
};

exports.getDomain = (req, res) => {
	const domain = req.params.domain ? req.params.domain : '';

    //((req.useragent.isMobile) ? 'mobile' : 'desktop')
    res.render('layouts/domain', {
        title: 'Overview Page',
        page: `/domain/${domain}`,
        uniqid: uuidv4,
        styles: [
            'table',
            'home'
        ],
        data: {
            domain
        }
    });
};
