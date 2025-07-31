const { v4: uuidv4 } = require('uuid');
const numberTypes = require('../../modules/number_types');
const express = require('express');

exports.getRouter = () => {
    const router = express.Router({ mergeParams: true });

    router.use((req, res, next) => {
        res.locals.sidebar = [
            {
                title: 'Overview',
                page: `/domain/${req.params.domain}`,
                icon: 'M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z'
            },
            {
                title: 'DNS',
                icon: 'M10,2C8.89,2 8,2.89 8,4V7C8,8.11 8.89,9 10,9H11V11H2V13H6V15H5C3.89,15 3,15.89 3,17V20C3,21.11 3.89,22 5,22H9C10.11,22 11,21.11 11,20V17C11,15.89 10.11,15 9,15H8V13H16V15H15C13.89,15 13,15.89 13,17V20C13,21.11 13.89,22 15,22H19C20.11,22 21,21.11 21,20V17C21,15.89 20.11,15 19,15H18V13H22V11H13V9H14C15.11,9 16,8.11 16,7V4C16,2.89 15.11,2 14,2H10M10,4H14V7H10V4M5,17H9V20H5V17M15,17H19V20H15V17Z',
                sub: [
                    {
                        title: 'Records',
                        page: `/domain/${req.params.domain}/dns/records`,
                    },
                    {
                        title: 'Analytics',
                        page: `/domain/${req.params.domain}/dns/analytics`,
                    },
                    {
                        title: 'Settings',
                        page: `/domain/${req.params.domain}/dns/settings`,
                    }
                ]
            },
            {
                title: 'SSL/TLS',
                icon: 'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z',
                sub: [
                    {
                        title: 'Overview',
                        page: `/domain/${req.params.domain}/ssl-tls`,
                    }
                ]
            },
            {
                title: 'Caching',
                icon: 'm19 8-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z',
                sub: [
                    {
                        title: 'Overview',
                        page: `/domain/${req.params.domain}/caching`,
                    },
                    {
                        title: 'Configuration',
                        page: `/domain/${req.params.domain}/caching/configuration`,
                    },
                    {
                        title: 'Cache Rules',
                        page: `/domain/${req.params.domain}/caching/cahce-rules`,
                    }
                ]
            }
        ];

        next();
    });

    router.get('/', (req, res) => {
        res.render('layouts/domain', {
            title: `${req.params.domain} | Overview`,
            page: `/domain/${req.params.domain}`,
            uniqid: uuidv4,
            styles: [
                'domain',
                'home'
            ],
            numberTypes,
            data: {
                domain: req.params.domain,
                graph: [
                    {
                        title: '24 Hours',
                        data: [
                            {
                                title: 'Unique Visitors',
                                type: 'number',
                                points: [ 10, 20, 30, 25, 60, 90, 100, 80, 50, 10 ]
                            },
                            {
                                title: 'Total Requests',
                                type: 'number',
                                points: [ 10, 20, 30, 25, 60, 90, 100, 80, 50, 10 ]
                            },
                            {
                                title: 'Percent Cached',
                                type: 'percent',
                                points: [ 10, 20, 30, 25, 60, 90, 100, 80, 50, 10 ]
                            },
                            {
                                title: 'Total Data Served',
                                type: 'bytes',
                                points: [ 10, 20, 30, 25, 60, 90, 100, 80, 50, 10 ]
                            },
                            {
                                title: 'Data Cached',
                                type: 'bytes',
                                points: [ 10, 20, 30, 25, 60, 90, 100, 80, 50, 10 ]
                            }
                        ]
                    },
                    {
                        title: '7 Days',
                        data: [
                            {
                                title: 'Unique Visitors',
                                type: 'number',
                                points: [ 10, 20, 30, 25, 60, 90, 100, 80, 50, 10 ]
                            },
                            {
                                title: 'Total Requests',
                                type: 'number',
                                points: [ 10, 20, 30, 25, 60, 90, 100, 80, 50, 10 ]
                            },
                            {
                                title: 'Percent Cached',
                                type: 'percent',
                                points: [ 10, 20, 30, 25, 60, 90, 100, 80, 50, 10 ]
                            },
                            {
                                title: 'Total Data Served',
                                type: 'bytes',
                                points: [ 10, 20, 30, 25, 60, 90, 100, 80, 50, 10 ]
                            },
                            {
                                title: 'Data Cached',
                                type: 'bytes',
                                points: [ 10, 20, 30, 25, 60, 90, 100, 80, 50, 10 ]
                            }
                        ]
                    },
                    {
                        title: '30 Days',
                        data: [
                            {
                                title: 'Unique Visitors',
                                type: 'number',
                                points: [ 10, 20, 30, 25, 60, 90, 100, 80, 50, 10 ]
                            },
                            {
                                title: 'Total Requests',
                                type: 'number',
                                points: [ 10, 20, 30, 25, 60, 90, 100, 80, 50, 10 ]
                            },
                            {
                                title: 'Percent Cached',
                                type: 'percent',
                                points: [ 10, 20, 30, 25, 60, 90, 100, 80, 50, 10 ]
                            },
                            {
                                title: 'Total Data Served',
                                type: 'bytes',
                                points: [ 10, 20, 30, 25, 60, 90, 100, 80, 50, 10 ]
                            },
                            {
                                title: 'Data Cached',
                                type: 'bytes',
                                points: [ 10, 20, 30, 25, 60, 90, 100, 80, 50, 10 ]
                            }
                        ]
                    }
                ]
            }
        });
    });

    router.get('/dns/records', (req, res) => {
        res.render('layouts/domain/dns', {
            title: `${req.params.domain} | DNS | Records`,
            page: `/domain/${req.params.domain}/dns/records`,
            uniqid: uuidv4,
            styles: [
                'home'
            ],
            data: {
                domain: req.params.domain
            }
        });
    });

    return router;
};
