//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    let arr = [];
    for(let key in object){
        arr.push(object[key]);
    }
    return arr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    // Should take an object and return all its keys in a string each separated with a space
    let string = '';
    for(let key in object){
       string += key + ' ';
    }
    let newString = string.slice(0, string.length - 1);
    return newString;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    let string = '';
    for(let key in object){
        if(typeof object[key] === 'string'){
        string += object[key] + ' ';
        }
    }
    let newString = string.slice(0, string.length - 1);
    return newString;
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
       if(Array.isArray(collection)){
       return 'array';
   } else if(typeof collection === 'string'){
       return 'string';
   }  else if(collection === undefined){
       return 'undefined';
   } else if(typeof collection === 'number'){
       return 'number';
   } else if(typeof collection === 'boolean'){
       return 'boolean';
   } else if(collection === null){
       return 'null';
   } else if(typeof value === 'function'){
       return 'function';
   } else if(collection instanceof Date){
       return 'date';
   } else{
       return 'object';
   }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string[0].toUpperCase() + string.substring(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    let newString = '';
    let stringArray = string.split(' ');
    for(let i = 0; i < stringArray.length; i++){
       stringArray[i] = stringArray[i][0].toUpperCase() + stringArray[i].substring(1);
       newString += stringArray[i] + ' ';
    }
     return newString = newString.slice(0, newString.length - 1);
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
//  Should take an object with a name property and return 'Welcome <Name>!'
    for(let key in object){
        let modifiedString = object.name[0].toUpperCase() + object.name.substring(1);
        return 'Welcome ' + modifiedString + '!';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    // Should take an object with a name an a species and return '<Name> is a <Species>
    let name = object.name[0].toUpperCase() + object.name.substring(1);
    let species = object.species[0].toUpperCase() + object.species.substring(1);
    return name + ' is a ' + species;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
// Should take an object, if this object has a noises array return them as a string separated by a space,
// if there are no noises return 'there are no noises' 
    if(object.hasOwnProperty('noises') === true && object.noises.length > 0){
        return object.noises.join(" ");
    } else{
        return 'there are no noises';
    }
}
//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
// Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.
    let splitArray = string.split(" "); //make array
    for(let i = 0; i < splitArray.length; i++){ //loop through array
        //check to see if array contains param word
        if(splitArray.includes(word)){
            return true;
        } else{
            return false;
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    // Should take a name and an object and add the name to the object's friends array then return the object
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    //  Should take a name and an object and return true if <name> is a friend of <object> and false otherwise
    if(object.friends){
        for(var i = 0; i < object.friends.length; i++){
            if(object.friends[i] === name){
                return true;
            }
        }
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
// Should take a name and a list of people, and return a list of all the names that <name> is not friends with"
    // {name: "Jimmy", friends:["Sara", "Liza"]},
    //     {name: "Bob", friends:[]},
    //     {name: "Liza", friends: ["Jimmy"]},
    //     {name: "Sara", friends: ["Jimmy"]}
    let notFriend = [];
    for(var i = 0; i < array.length; i++){
        if(!isFriend(name, array[i]) && array[i].name !== name){
            notFriend.push(array[i].name);
        }
    }
    return notFriend;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    // Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. 
    // If <key> does not exist on <object> create it."
    //update the key on object with value
    //if key isn't there, create it
        object[key] = value;
        return object;
    
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
// Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>"
// function remove(animals, name){
//     for(var i = 0; i < animals.length; i++){
//         if(animals[i].name === name){
//             var removeObject = animals.splice(i, 1);
//             return removeObject;
//         }
//     }
// }
    for(var i = 0; i < array.length; i++){
        for(let key in object){
            if(key === array[i]){
                delete object[key];
            }
        }
    } return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    // Should take an array and return an array with all the duplicates removed"
    return array.filter(function(elem, i, array){
        return array.indexOf(elem) === i;
    });
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}