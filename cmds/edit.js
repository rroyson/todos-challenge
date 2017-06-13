const {get, set} = require('../lib/store')
const { map } = require('ramda')
const ls = require('./ls')

module.exports = function(id, text) {
  const list = get()
  list.todos = map(function(obj) {
    if (checkId(id, obj)){
      return changeText(obj, text)
    }
    return obj
  }, list.todos)
  set(list)
  return ls()


}

function checkId(id, obj) {
return id == obj.id
}


function changeText (obj, text) {
 obj.text = text
 return obj
}
