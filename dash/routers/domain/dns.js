const express = require('express');
const { v4: uuidv4 } = require('uuid');

exports.getRouter = () => {
    const router = express.Router({ mergeParams: true });

    router.get('/records', (req, res) => {
        res.render('layouts/domain/dns/records', {
            title: `${req.params.domain} | DNS | Records`,
            page: `/domain/${req.params.domain}/dns/records`,
            uniqid: uuidv4,
            styles: [
                'table',
                'domain/dns/records'
            ],
            data: {
                domain: req.params.domain,
                records: [
                    {
                        _id: 'asdasdasdasd',
                        type: 'A',
                        name: 'find9.net',
                        content: '127.0.0.1',
                        proxy_status: false,
                        ttl: 'Auto'
                    },
                    {
                        _id: 'asdasdasdasd',
                        type: 'CNAME',
                        name: 'a4',
                        content: 'a5.find9.net',
                        proxy_status: false,
                        ttl: 'Auto'
                    }
                ]
            }
        });
    });

    router.get('/analytics', (req, res) => {
        res.render('layouts/domain/dns/analytics', {
            title: `${req.params.domain} | DNS | Analytics`,
            page: `/domain/${req.params.domain}/dns/analytics`,
            uniqid: uuidv4,
            styles: [
                'table',
                'domain/dns/analytics'
            ],
            data: {
                domain: req.params.domain
            }
        });
    });

    router.get('/settings', (req, res) => {
        res.render('layouts/domain/dns/settings', {
            title: `${req.params.domain} | DNS | Settings`,
            page: `/domain/${req.params.domain}/dns/settings`,
            uniqid: uuidv4,
            styles: [
                'table',
                'domain/dns/settings'
            ],
            data: {
                domain: req.params.domain
            }
        });
    });

    return router;
};
