const path = require('path')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

let thisDir = path.join(__dirname,'db.json')
const adapter = new FileSync(thisDir)
const db = low(adapter)

const createPetModel = require('./pet')
const createUserModel = require('./user')

module.exports = {
  models: {
    Pet: createPetModel(db),
    User: createUserModel(db),
  },
  db
}
