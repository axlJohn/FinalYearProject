// calling express and router
const express = require('express');
const router = express.Router();

// get request to a 'route route' (this is intentionally written as route route) with request/response
// sends message that server is up and running
router.get('/', (req, res) => {
    res.send('The server is now up and running!');
});

// exporting this
module.exports = router;