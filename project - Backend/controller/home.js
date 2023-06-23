const express = require('express');
const router = express.Router();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


router.get('/', async (req, res) => {
    res.json({ message: "this is home page" });
})
router.get('/songs', async (req, res) => {
    res.json({ message: "this is home page" });
})
router.get('/songs', async (req, res) => {
    res.json({ message: "this is home page" });
})

router.get('/h1', async (req, res) => {
    res.send("this is inside work of home page");
})

router.post('/post', async (req, res) => {
    console.log(req.body);
    res.send(req.body);
})
module.exports = router;
