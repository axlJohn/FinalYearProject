const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('The server is now up and running!');
});

module.exports = router;