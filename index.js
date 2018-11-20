fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, cb) {
      for(i of Object.keys(collection)) {
        cb(collection[i])
      }
      return collection
    },

    map: function(collection, cb) {
      new_arr = []

      for(i of Object.keys(collection)) {
        new_arr.push(cb(collection[i]))
      }
      return new_arr
    },

    reduce: function(collection, cb, acc) {
      acc = acc || 0
      for(i of Object.keys(collection)) {
        acc=cb(acc,collection[i],collection)
      }
      return acc
    },
    
    find: function(collection, cb) {
      for(i of Object.keys(collection)) {
        if(cb(collection[i])) {
          found_val = collection[i]
          return found_val
        }
      }
    },

    filter: function(collection, cb) {
      results = []
      for(i of Object.keys(collection)) {
        if(cb(collection[i])) {
          results.push(collection[i])
        }
      }
      return results
    },

    size: function(collection) {
      return Object.keys(collection).length
    },

    first: function(collection, n) {
      n = n || 1
      results = []
      for(i of Object.keys(collection).slice(0,n)) {
        results.push(collection[i])
      }
      if(n == 1) {
        return results[0]
      }else {
        return results
      }
    },

    last: function(collection, n) {
      n = n || 1
      results = []
      for(i of Object.keys(collection).slice(collection.length-n)) {
        results.push(collection[i])
      }
      if(n == 1) {
        return results[0]
      }else {
        return results
      }
    },

    compact: function(collection) {
      return fi.filter(collection, function(el) {
        if(el) {
          return el
        }
      })
    },

    sortBy: function(collection, cb) {
      new_collection = [...collection]
      return new_collection.sort(function(a, b) {
        return (cb(a) - cb(b))
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

    keys: function(obj) {
      const keys = []
      for (let key in obj){
        keys.push(key)
      }
      return keys
    },

    values: function(obj) {
      const values = []
      for (let key in obj){
        values.push(obj[key])
      }
      return values
    },

    functions: function(obj) {
      const functionNames = []
  
      for (let key in obj) {
        if (typeof obj[key] === "function"){
          functionNames.push(key)
        }
      }

      return functionNames.sort()
    },


  }
})()

fi.libraryMethod()
