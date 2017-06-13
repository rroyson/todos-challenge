const {get} = require('../lib/store')
const {map, reduce} = require('ramda')
const converter = require('number-to-words')

function li (todo){
  return `[${todo.completed ? 'x' : ' ' }] - ${todo.id} ${todo.text} `}

module.exports = function() {
const list = get()


console.log('')
console.log("Rob's To Dos")
console.log('-------------------')


map(function(todo){
console.log(li(todo))
}, list.todos)

console.log('-------------------')
console.log(`Items Completed `, completedCount(list) )
console.log(`Items Left `, list.todos.length - completedCount(list))
console.log(`Total`, list.todos.length)

return `${converter.toWords(completedCount(list) / list.counter * 100)} % Complete`

}


function completedCount(list) {
  return reduce(function(acc, obj) {
    if(obj.completed) {
      return acc += 1
    }
    return acc
  }, 0, list.todos)
}
