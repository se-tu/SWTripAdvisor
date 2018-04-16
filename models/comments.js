const db = require('./base_models')

class Comments {
    constructor () {
        db.comments.belongsTo(db.planets)
    }

    async create (planetId, content) {
        let comment = await db.comments.create(
            Object.assign({}, {planetId}, content))

        return comment
    }

}

module.exports = new Comments()