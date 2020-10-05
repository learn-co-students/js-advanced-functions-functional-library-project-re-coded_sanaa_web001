const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(array, alert) {
      if (array.length){
        array.forEach((x) => alert(x))
      }else
      {
        for (const property in array) {
                alert(array[property])
         }
      }
       return array;
    },

    map: function(array, callback) {
      if (array.length){
        return array.map(function (x) { return callback(x)} );
      }else
      {
        let res = [];
        for (const property in array) {
           res.push(callback(array[property]));
         }
         return res;
         }

    },

    reduce: function(collection, callback, acc){
      if(acc) {
         return collection.reduce((x,y) => callback(x,y),acc)
      }else {
        return collection.reduce((x,y) => callback(x,y))
      }

    },
    find: function(collection, prediction){
      return  collection.find((x) => prediction(x));
    },
    filter: function(collection, prediction){
      return  collection.filter((x) => prediction(x));
    },
    size: function(collection){
      if(collection.length) {
        return  collection.length
      }else
      {
        let size = 0 ;
        let key ;
        for (key in collection) {
         size += 1;
      }
        return  size;
      }

    },
  first: function(collection , n){
        if(n){
          let result = [];
          for ( let i = 0 ; i < n ; i++ ) {
           result.push(collection[i])
          }
            return result;
        }else
        {
          return  collection[0];
        }
      },

      last: function(collection , n){
            if(n){
              return collection.slice(Math.max(collection.length - n, 0))

            }else
            {
              return  collection[collection.length - 1];
            }
          },

      compact: function(collection ){
        return collection.filter(x => !!x)
        },

    sortBy: function(array, callback){

          return array.slice().sort(function(a, b){return callback(a) - callback(b)});
      },

      flatten : function (arr, shallow) {
              if (shallow === true) {
                return [].concat(...arr) ;
              }else  {
                while (arr.some((item) => Array.isArray(item))) {
                   arr = [].concat(...arr)
                 }
                 return arr;
              }

          },

      uniq : function (array, isSorted, callback) {
        if (isSorted===undefined){
          function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
            }
            return  array.filter( onlyUnique );
        }else{
          function onlyUnique1(value, index, self) {
            for(let i = 0; i < index ; i++) {
              if (callback(value) === callback(self[i])) {
                return false
                }
                }
              return true ;
                }
                return  array.filter( onlyUnique1 );
              }
          },
        keys : function (object) {
           let arr = [] ;
           for (const property in object)  {
             arr.push(property) ;
           }
          return arr;
        },
        values : function (object) {
           let arr = [] ;
           for (const property in object)  {
             arr.push(object[property]) ;
           }
          return arr;
        },

    functions: function(object) {
            let arr = [] ;
              for (const property in object)  {
              if( object[property] === "" ){}else{
                arr.push(property) ;
              }

              }
              arr.sort();
              return arr;
        },

      }
    })()


fi.libraryMethod()