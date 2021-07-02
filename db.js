const {prohairesis} = require('prohairesis')
const env  = require('./env')

console.log(env)
const database = new prohairesis(env.CLearDB)


module.exports ={
  db : database
}