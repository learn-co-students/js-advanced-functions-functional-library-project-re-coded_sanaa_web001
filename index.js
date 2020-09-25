const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },


    each: function(collection, callback) {
      if (Array.isArray(collection)) {
        collection.forEach(element =>
          callback(element)
        );
      } else {
        for (const key in collection) {
          if (collection.hasOwnProperty(key)) {
            const element = collection[key];
            callback(element)
          }
        }
      }
      return collection
    },

    map: function(collection, callback) {
      let newCollection = []

      if (Array.isArray(collection)) {
        collection.forEach(element =>
          newCollection.push(callback(element))
        );
      } else {
        for (const key in collection) {
          if (collection.hasOwnProperty(key)) {
            const element = collection[key];
            newCollection.push(callback(element))
          }
        }
      }
      return newCollection
    },

    reduce: function(collection, callback, acc) {
      let total = (!!acc) ? acc : collection[0]
      let i = (!!acc) ? 0 : 1

      for (; i < collection.length; i++) {
        total = callback(total, collection[i], collection)
      }
      return total
    },

    find: function(collection, predicate) {

      if (!(Array.isArray(collection))) {
        collection = Object.values(collection)
      }

      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i]
        }
      }
    },

    filter: function(collection, predicate) {
      let truthValues = []
      if (!(Array.isArray(collection))) {
        collection = Object.values(collection)
      }
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          truthValues.push(collection[i])
        }
      }
      return truthValues
    },

    size: function(collection) {
    if (!(Array.isArray(collection))) {
        collection = Object.values(collection)
      }
      return collection.length
    },

    first: function(array, num) {
      let n = (!!num) ? num : 1
      let nArray = array.slice(0, n)

      return (!!num) ? nArray : nArray[0]
    },

    last: function(array, num) {
      let n = (!!num) ? -num : -1
      let nArray = array.slice(n)

      return (!!num) ? nArray : nArray[0]
    },

    compact: function(array) {
      let compactArray = []

      for (const i of array) {
        if (!!i) {
          compactArray.push(i)
        }
      }
      return compactArray
    },

  sortBy: function(array, callback) {
    let sortedArray = [...array]

    return sortedArray.sort(function(a,b) {
      return callback(a) - callback(b)
  })


},

    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },

    flatten: function(collection, shallow, newArr=[]) {
      if (!Array.isArray(collection)) return newArr.push(collection)
      if (shallow) {
        for (let val of collection)
          Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
      } else {
        for (let val of collection) {
          this.flatten(val, false, newArr)
        }
      }
      return newArr
    },

    uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx-1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
    },
    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },
    keys: function(object) {
      let keysArray = []

      for (const key in object) {
        keysArray.push(key)
      }
      return keysArray
    },

        values: function(object) {
      let valuesArray = []

      for (const key in object) {
        valuesArray.push(object[key])
      }

      return valuesArray
    },

     functions: function(object) {
      let sortedArray = []

      for (const key in object) {
        if (typeof object[key] === 'function') {
          sortedArray.push(key)
        }
      }

      return sortedArray.sort()
    },
  }
})()

fi.libraryMethod()
