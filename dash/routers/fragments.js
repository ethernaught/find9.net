const express = require('express');
const { v4: uuidv4 } = require('uuid');

exports.getRouter = () => {
    const router = express.Router({ mergeParams: true });

    router.get('/add-record', (req, res) => {
        res.render('fragments/add-record', {
            uniqid: uuidv4
        });
    });

    return router;
};
