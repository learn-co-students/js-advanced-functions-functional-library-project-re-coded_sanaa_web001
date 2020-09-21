const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const updatedCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      for (let i=0; i < updatedCollection.length; i++) {
        callback(updatedCollection[i])
      }

      return collection

    },

    map: function(collection, callback) {
      collection = Object.values(collection)
      const newCollection = []
      for (let i=0; i < collection.length; i++)
        newCollection.push(callback(collection[i]))
      return newCollection
    },

    reduce: function(collection, callback, acc) {
      if (!acc) {
        acc = collection[0]
        collection = collection.slice(1)
      }
      for (let i=0; i < collection.length; i++)
        acc = callback(acc, collection[i], collection)
      return acc
    },

    find: function(collection, predicate) {
      for (let i=0; i<collection.length; i++)
        if (predicate(collection[i]))
          return collection[i]
      return undefined
    },

    filter: function(collection, predicate) {
      const result = []
      for (let i=0; i<collection.length; i++)
        if (predicate(collection[i]))
          result.push(collection[i])
      return result
    },

    size: function(collection) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)
      return collection.length
    },

    first: function(array, n=false) {
      if (n)
        return array.slice(0, n)
      else
        return array[0]
    },

    last: function(array, n=false) {
      if (n)
        return array.slice(array.length-n)
      else
        return array[array.length-1]
    },

    compact: function(arr) {
      const falsey = [false, null, 0, "", undefined, NaN]
      return arr.filter(x => !falsey.includes(x))


      // const newArr = []
      // for (i=0, i<array.length, i++)
      //   if falsey.includes(arr[i])
      //     newArr.push(arr[i])
      // return newArr
    },

    sortBy: function(array, callback) {
      const newArr = [...array]
      return newArr.sort(function(x, y) {
        return callback(x) - callback(y)
      })
    },


    flatten: function(arr, shallow, newArr=[]) {
      //var newArr = []
      if (!Array.isArray(arr)) {
        return newArr.push(arr)
      }
      if (shallow) {
        for (let element of arr) {
          if (Array.isArray(element)) {
            for (let val of element) {
              newArr.push(val)
            }
          } else {
            newArr.push(element)
          }
        }
      } else {
        for (let element of arr) {
          console.log(element)
          this.flatten(element, false, newArr)
        }
      }
      return newArr
    },

    uniq: function(array, isSorted=false, callback=false) {
      if (!callback) {
        return [...new Set(array)]
      }
      else {
        let newArr = []
        let finalArr = []
        for (let val of array) {
          let modVal = callback(val)
          if (!newArr.includes(modVal)) {
            newArr.push(callback(modVal))
            finalArr.push(val)
          }
        }
        return finalArr
      }
    },

    keys: function(obj) {
      const newArr = []
      for (let key in obj) {
        newArr.push(key)
      }
      return newArr
    },

    values: function(obj) {
      const vals = []
      for (let key in obj) {
        vals.push(obj[key])
      }
      return vals
    },

    functions: function(obj) {
      const fx = []
      for (let key in obj) {
        if (typeof obj[key] === 'function') {
          fx.push(key)
        }
      }
      return fx
    }

  }
})()

fi.libraryMethod()
