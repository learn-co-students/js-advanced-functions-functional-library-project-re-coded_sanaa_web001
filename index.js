const fi = (function () {
  return {
    libraryMethod: function () {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function (collection, callback) {
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          callback(collection[i], i, collection)
        }
      } else if (typeof (collection) === "object") {
        for (let i = 0; i < Object.keys(collection).length; i++) {
          callback(collection[Object.keys(collection)[i]], Object.keys(collection)[i], i)
        }
      }
      return collection
    },

    map: function (collection, callback) {
      let newCollection = [];
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          newCollection.push(callback(collection[i], i, collection));
        }
      } else if (typeof (collection) === "object") {
        let keys = Object.keys(collection);
        for (let i = 0; i < keys.length; i++) {
          newCollection.push(callback(collection[keys[i]], keys[i], collection))
        }
      }
      return newCollection;
    },

    reduce: function(c = [], callback = () => {}, acc) {
			let collection = c.slice(0)

			if (!acc) {
				acc = collection[0]
				collection = collection.slice(1)
			}

			let len = collection.length;

			for (let i = 0; i < len; i++) {
				acc = callback(acc, collection[i], collection)
			}
			return acc;
		},


    find: function (collection, callback) {
      for (let i = 0; i < collection.length; i++) {
        if (callback(collection[i])) {
          return collection[i];
        }
      }
      return undefined;
    },

    filter: function (collection, callback) {
      let matches = [];
      for (let i = 0; i < collection.length; i++) {
        if (callback(collection[i])) {
          matches.push(collection[i]);
        }
      }
      return matches
    },

    size: function (collection) {
      if (Array.isArray(collection)) {
        return collection.length;
      } else if (typeof (collection) === "object") {
        return Object.keys(collection).length
      }
    },

    first: function (collection, num = 1) {
      if (num === 1) {
        return (collection[0]);
      }
      return collection.slice(0, num);
    },

    last: function (collection, num = 1) {
      if (num === 1) {
        return collection[collection.length - 1]
      }
      return collection.slice(collection.length - num, collection.length)
    },

    compact: function (collection) {
      let compacted = [];
      for (let i = 0; i < collection.length; i++) {
        if (collection[i]) {
          compacted.push(collection[i]);
        }
      }
      return compacted;
    },
    keys: function (object) {
      // Using for loop
      const keys = []
      for (let key in object) {
        keys.push(key)
      }
      return keys
    },

    sortBy: function (collection, callback) {
      let newCollection = [...collection]
      let sortProgress = [-1]
      while (fi.find(sortProgress, e => e === -1)) {
        for (let i = 0; i < newCollection.length - 1; i++) {
          if (callback(newCollection[i]) > callback(newCollection[i + 1])) {
            let hold = newCollection[i + 1]
            newCollection[i + 1] = newCollection[i]
            newCollection[i] = hold
            sortProgress[i] = -1
          } else {
            sortProgress[i] = 0
          }
        }
      }
      return newCollection
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
    uniq: function (collection, sorted = false, iteratee = false) {
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
    values: function (object) {
      let values = [];

      for (let index in object) {
        values.push(object[index])
      }
      console.log(values)
      return values;
    },

    functions: function (obj) {
      const functionNames = []

      for (let key in obj) {
        if (typeof obj[key] === "function") {
          functionNames.push(key)
        }
      }

      return functionNames.sort()
    },

  }
})()
// fi.values([1,2,3,4]);

fi.libraryMethod()
