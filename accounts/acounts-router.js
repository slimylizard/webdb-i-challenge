const express = require('express');
const router = express.Router();
const Accounts = require('./accounts-module.js');

router.get('/', (req, res) => {
    Accounts.get()
        .then(accounts => {
            console.log(res , accounts)
            res.status(200).json(accounts)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ err: 'error fetching review' })
        })
});

module.exports = router;