function myEach(collection, callback){

    let collectionToProcess
    if( !Array.isArray(collection)){
        collectionToProcess= Object.values(collection)
     }

     else{
        collectionToProcess = collection
     }

    for(let i = 0; i < collectionToProcess.length; i ++){
        callback(collectionToProcess[i])
    }
    return collection
}

function myMap(collection, callback){
    let newArray = []
    let collectionToProcess

    if(!Array.isArray(collection)){
        collectionToProcess= Object.values(collection)
     }

     else{
        collectionToProcess = collection
     }

    for(let i = 0; i < collectionToProcess.length; i ++){
        newArray.push(callback(collectionToProcess[i]))
    }
    return newArray
}

function myReduce(collection, callback, acc){

    let collectionToProcess

    if(!Array.isArray(collection)){
        collectionToProcess= Object.values(collection)
     }

     else{
        collectionToProcess = collection
     }
    
    let total = 0
    
    for (let i= 0; i< collectionToProcess.length; i++){
  
      if (i< 1){

        if (acc=== undefined)
            {
                acc = collectionToProcess[i];
                i+=1
            }

        total+= callback(acc, collectionToProcess[i], collectionToProcess)
      }
      else{
        let acc = 0
        total+= callback(acc, collectionToProcess[i], collectionToProcess)
      }
    }
    
   return total 
  }

  function myFind(collection, predicate){
    for (let i = 0; i < collection.length; i++){
        if (predicate(collection[i])=== true){
            return collection[i];
        }
    }
  }

  function myFilter(collection, predicate){
    let arr= []
    for (let i = 0; i < collection.length; i++){
        if (predicate(collection[i])=== true){
            arr.push(collection[i])
        }
    }
    return arr
  }

function mySize(collection){
    let collectionToProcess
    if( !Array.isArray(collection)){
        collectionToProcess= Object.values(collection)
     }

     else{
        collectionToProcess = collection
     }
    return collectionToProcess.length
}


function myFirst(array, n){
    if (n!== undefined){
        return array.slice(0, n)

    }
    return array[0]
}

function myLast(array, n){
    if (n!== undefined){
        let result = array.slice(-n)
        return result
    }

    return array[(array.length -1)]
}


function myKeys(object){
    let arr = []
    for(let property in object){
        arr.push(property)
    }
    return arr
}

function myValues(object){
    let arr = []
    for(let property in object){
        arr.push(object[property])
    }
    return arr
}