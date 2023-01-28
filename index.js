function helper(collection) {
    if (collection instanceof Array) {
        return [...collection]
    }
    else {
        return Object.values(collection)
    }
}

const myEach = function(collection, callback) {
    const newestArray = helper(collection)
    //console.log(newestArray)
    for (let i=0;i<newestArray.length;i++) {
        callback(newestArray[i])
    }
    return collection
    }


const myMap = function (collection, callback) {
    const newestArray = helper(collection)
    const newArr = newestArray.map(callback)
    return newArr
    

}

const myReduce = function (collection, callback, acc) {
    const newestArray = helper(collection)
    if (!acc) {
        acc = newestArray[0]
        newestArray.shift()
    }
    for (let i=0; i<newestArray.length; i++) {
        acc = callback(acc, newestArray[i], newestArray)
    }
    return acc
}

const myFind = function (collection, predicate) {
    const newestArray = helper(collection)
    //console.log("senor thang")
    //console.log(predicate(newestArray[1]))
    for (let i=0; i<newestArray.length; i++) {
        if (predicate(newestArray[i])) {
            {return newestArray[i]}  
        }
    }
    return undefined
    
}




const myFilter = function (collection, predicate) {
const newestArray = helper(collection)
const finalArray = []
for (let i=0; i < newestArray.length; i++) {
    if (predicate(newestArray[i])) {
        finalArray.push(newestArray[i])
    }
}
return finalArray  
}

const mySize = function (collection) {
const newestArray = helper(collection)
return newestArray.length
}

const myFirst = function (array, n) {
if (n) {
    return array.slice(0,n)
}
else {
    return array[0]
}
}

const myLast = function (array, n) {
  if (n) {
return array.slice(array.length-n)
}
else {
    return array[array.length-1]
}
}

const myKeys = function (object) {
const objectArray = Object.keys(object)
return objectArray
}

const myValues = function (object) {
const objectArray = Object.values(object)
return objectArray
}

