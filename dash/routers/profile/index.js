const express = require('express');
const { v4: uuidv4 } = require('uuid');

exports.getRouter = () => {
    const router = express.Router({ mergeParams: true });

    router.use((req, res, next) => {
        res.locals.sidebar = [
            {
                title: 'Preferences',
                page: '/profile',
                icon: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z'
            },
            {
                title: 'Authentication',
                page: '/profile/authentication',
                icon: 'M21,10h-8.35C11.83,7.67,9.61,6,7,6c-3.31,0-6,2.69-6,6s2.69,6,6,6c2.61,0,4.83-1.67,5.65-4H13l2,2l2-2l2,2l4-4.04L21,10z M7,15c-1.65,0-3-1.35-3-3c0-1.65,1.35-3,3-3s3,1.35,3,3C10,13.65,8.65,15,7,15z'
            },
            {
                title: 'API Tokens',
                page: '/profile/api-tokens',
                icon: 'M4,7v2c0,0.55-0.45,1-1,1H2v4h1c0.55,0,1,0.45,1,1v2c0,1.65,1.35,3,3,3h3v-2H7c-0.55,0-1-0.45-1-1v-2 c0-1.3-0.84-2.42-2-2.83v-0.34C5.16,11.42,6,10.3,6,9V7c0-0.55,0.45-1,1-1h3V4H7C5.35,4,4,5.35,4,7z M21,10c-0.55,0-1-0.45-1-1V7c0-1.65-1.35-3-3-3h-3v2h3c0.55,0,1,0.45,1,1v2c0,1.3,0.84,2.42,2,2.83v0.34 c-1.16,0.41-2,1.52-2,2.83v2c0,0.55-0.45,1-1,1h-3v2h3c1.65,0,3-1.35,3-3v-2c0-0.55,0.45-1,1-1h1v-4H21z'
            },
            {
                title: 'Active sessions',
                page: '/profile/sessions',
                icon: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z'
            }
        ];

        next();
    });

    router.get('/', (req, res) => {
        res.render('layouts/profile', {
            title: 'Preferences',
            page: '/profile',
            uniqid: uuidv4,
            styles: [
                'home'
            ],
            data: {}
        });
    });

    return router;
};
