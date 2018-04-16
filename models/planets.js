const db = require('./base_models')

const requestPromise = require('request-promise-native')

class Planets {
    constructor () {
        db.planets.hasMany(db.comments)
    }

    async getAll () {
        const planets = await db.planets.findAll({
            include: [db.comments],
        })

        return planets
    }

    async getById (id) {
        let planet = await db.planets.findOne({
            where: {id: id,},
            include: [db.comments],
        })

        return planet
    }

    async getByName (name) {
        let planet = await db.planets.findOne({where: {name: name,}})

        if (!planet) {
            planet = await this.fetchPlanet(name)
        }

        return planet
    }

    async fetchPlanet (name) {
        let fetchedPlanet = JSON.parse(await requestPromise(
            `https://swapi.co/api/planets/?search=${name}`)).results[0]

        let url = fetchedPlanet.url

        let splittedUrl = url.split('/')
        let id = +splittedUrl[splittedUrl.length - 2]

        const e = Object.assign({}, fetchedPlanet, {
            swapi_id: id,
        })
        let localPlanet = await db.planets.create(e)

        return localPlanet
    }

}

module.exports = new Planets()