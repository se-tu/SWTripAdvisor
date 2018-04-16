const express = require('express')
const router = express.Router()

const Planets = require('../models/planets')
const Comments = require('../models/comments')

const validator = require('../util/validaion')

router.post('/planets', async (req, res, next) => {
    try{
        const name = req.body.name

        let validationResult = validator.validateName(name)
        if(validationResult.error){
            next({error: 'not valid name'})
        }

        const planets = await Planets.getByName(name)
        res.status(201).json(planets)
    }catch(err){
        next({error: err.message})
    }
})

router.get('/planets',  async (req, res, next) => {
    try{
        const planets = await Planets.getAll()
        res.json(planets)
    }catch(err){
        next({error: err.message})
    }
})

router.get('/planets/:planetId', async (req, res, next) => {
    try{
        const planet = await Planets.getById(req.params.planetId)
        res.json(planet)
    }catch(err){
        next({error: err.message})
    }
})

router.post('/planets/:planetId/comment',async (req, res, next) => {
        try{
        let validationResult = validator.validateScore(req.body.score)
        if(validationResult.error){
            next({error: 'not valid score'})
        }

        const comments = await Comments.create(req.params.planetId, req.body)
        res.json(comments)
    }catch(err){
        next({error: err.message})
    }
})

module.exports = router
