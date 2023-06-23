const express = require('express');
const { appendFile } = require('fs');
const router = express.Router();
const song = require('../models/songschema')


//GETTING ALL ID USING GETTING GET METHOD
router.get('/', async (req, res, next) => {
    try {
        const songs = await song.find()
        res.json(songs);
    } catch (err) {
        res.send(err);
    }
    next()
    // res.json({ "message": "this is a song page" });
})


//GETTING PARTICULAR ID USING GET METHOD
router.get('/:id', async (req, res, next) => {
    try {
        const so = await song.findById(req.params.id)
        res.json({ Song: so });
    } catch (err) {
        res.send(err);
    }
    next()
})


//POSTING ID USING POST METHOD
router.post('/', async (req, res, next) => {
    console.log(req.body);
    const songs = new song({
        name: req.body.name,
        author: req.body.author,
        song: req.body.song
    })

    try {
        const s1 = await songs.save()
        res.json(s1);
    } catch (error) {
        res.send(error)
    }
})


//PATCHING PARTICULAR FIELD USING PATCH METHOD
router.patch('/:id', async (req, res, next) => {
    try {
        const so = await song.findById(req.params.id)

        if (req.body.song) {

            so.song = req.body.song
        }
        if (req.body.author) {

            so.author = req.body.author
        }
        if (req.body.name) {
            so.name = req.body.name

        }

        const p1 = await so.save()
        res.json(p1)
        console.log(req.body);
    } catch (err) {
        res.send(err);
    }
    next()
})



//DELETING FIELD USING DELETE METHOD
router.delete('/:id', async (req, res, next) => {
    try {
        const so = await song.findById(req.params.id)
        const p1 = await so.remove()
        res.json(p1)
    } catch (err) {
        res.send(err);
    }
    next()
})



module.exports = router