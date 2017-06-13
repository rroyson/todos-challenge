const {get, set} = require('../lib/store')
const {map} = require('ramda')
const ls = require('./ls')

module.exports = function(id) {
  const list = get()
  list.todos = map(function(obj) {
    if (checkId(id, obj)){
      return toggle(obj)
    }
    return obj
  }, list.todos)
  set(list)
  return ls()


}

function checkId(id, obj) {
return id == obj.id
}

function toggle(obj) {
obj.completed = !obj.completed
return obj
}
