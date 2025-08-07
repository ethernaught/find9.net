const express = require('express');
const { v4: uuidv4 } = require('uuid');
const numberTypes = require('../modules/number_types');

exports.getRouter = () => {
    const router = express.Router({ mergeParams: true });

    router.use((req, res, next) => {
        res.locals.sidebar = [
            {
                title: 'Home',
                page: '/',
                icon: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'
            },
            {
                title: 'Analytics & Logs',
                page: '/analytics',
                icon: 'M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z'
            },
            {
                title: 'Load Balancing',
                page: '/load-balancing',
                icon: 'M9.78,11.16l-1.42,1.42c-0.68-0.69-1.34-1.58-1.79-2.94l1.94-0.49C8.83,10.04,9.28,10.65,9.78,11.16z M11,6L7,2L3,6h3.02 C6.04,6.81,6.1,7.54,6.21,8.17l1.94-0.49C8.08,7.2,8.03,6.63,8.02,6H11z M21,6l-4-4l-4,4h2.99c-0.1,3.68-1.28,4.75-2.54,5.88 c-0.5,0.44-1.01,0.92-1.45,1.55c-0.34-0.49-0.73-0.88-1.13-1.24L9.46,13.6C10.39,14.45,11,15.14,11,17c0,0,0,0,0,0h0v5h2v-5 c0,0,0,0,0,0c0-2.02,0.71-2.66,1.79-3.63c1.38-1.24,3.08-2.78,3.2-7.37H21z'
            }
        ];

        next();
    });

    router.get('/', (req, res) => {
        res.render('layouts', {
            title: 'Home',
            page: '/',
            uniqid: uuidv4,
            styles: [
                'table',
                'home'
            ],
            numberTypes,
            data: {
                domains: [
                    {
                        name: 'find9.net',
                        status: true,
                        points: [ 10, 20, 30, 25, 60, 90, 100, 80, 50, 10 ]
                    }
                ]
            }
        });
    });

    return router;
};
