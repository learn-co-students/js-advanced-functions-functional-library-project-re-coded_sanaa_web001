const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(a,b) {
      if (Array.isArray(a)){
        for (const ele of a){
          b.call(this, ele)
        }
      }
      else{
        for (const prop in a){
          b.call(this, a[prop])
        }
      }
  return a;
    },

    map: function(a,b) {
      let result =[];
      if (Array.isArray(a)){
        for (const ele of a){
          result.push(b.call(this, ele))
        }
      }
      else {
        for (const prop in a){
          result.push(b.call(this, a[prop],prop))
        }
      }
  return result;
    },

    reduce: function(x=[],y=()=>{},z) {
        let coll = x;
if(!z){
z=coll[0];
coll=coll.slice(1);
}
for( const ele of coll)
{
z=y(z,ele,coll)
}
 return z;

    },
   find: function(x=[],y=()=>{}){
	if(!(x instanceof Array))
	x=Object.values(x);

     for (const ele of x)
      if (y(ele))
      return ele;
    return undefined;

 },
	filter: function(col,cb){
		if(!(col instanceof Array))
	      col=Object.values(col);

		let result = [];
		for (const ele of col){
      		if (cb(ele))
		result.push(ele)
		}
	return result;
	},
	size: function(col){

	if(!(col instanceof Array))
	      col=Object.keys(col);
	return col.length;
	},
	first: function(col,n=0){
         if(n===0)
	return col[0]
	else
	return col.slice(0,n)
	},
	last: function(col,n=0){
         if(n===0)
	return col[col.length-1]
	else
	return col.slice(col.length-n, col.length)
	},
	compact: function(col){
         const badBad = new Set([false, null, 0, "", undefined, NaN])
     return col.filter(el => !badBad.has(el))
	},
	sortBy: function(collection, callback) {
     const newArr = [...collection]
     return newArr.sort(function(a, b) {
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
	keys: function(obj){
	let newArray=[];
	for(const key in obj){
	newArray.push(key)
	}
	return newArray;
	},
	values: function(obj){
	let newArray=[];
	for(const val in obj){
	newArray.push(obj[val])
	}
	return newArray;
	},

    functions: function(obj) {
    let newArray=[];
	for(const key in obj){
	if (typeof obj[key] === "function")
	newArray.push(key)
	}
	return newArray;
    },
  }
})()

fi.libraryMethod()
