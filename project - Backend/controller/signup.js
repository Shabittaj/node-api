const express = require('express');
const router = express.Router();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


router.get('/', async (req, res) => {
    res.json({ message: "this is signup page" });
})

module.exports = router