const {get, set} = require('../lib/store')
const {map, reject, filter} = require('ramda')
const ls = require('./ls')


module.exports = function(id) {
  const list = get()
  list.todos = reject(
    function(obj) {
      return findId(id, obj)
    }, list.todos)

set(list)
return ls()

}

function checkText(text, obj) {
  return text == obj.text
}

function findId(id, obj){
return id == obj.id
}
