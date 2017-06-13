const {get, set} = require('../lib/store')
const {map, append} = require('ramda')
const ls = require('./ls')

module.exports = function (text) {
  const list = get()

const createNewObj = {
  "id": countUp(list),
  "text": text,
  "completed": false
}


list.todos = append(createNewObj, list.todos)
  set(list)
 return ls()

}

function countUp(list) {
  list.counter = list.counter + 1
  return list.counter
}
