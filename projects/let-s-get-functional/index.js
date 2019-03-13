// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-kylekelly1');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(array) {
    return _.filter(array, function(customer){
        return customer.gender === 'male';
    }).length;
};

var femaleCount = function(array){
    return _.filter(array, function(customer){
        return customer.gender === 'female';
    }).length;
};

var oldestCustomer = function(array){
    return _.reduce(array, function(oldest, customer){
        return (oldest.age || 0) > customer.age ? oldest : customer;
    }, '').name;
};

var youngestCustomer = function(array){
    var youngests = array.reduce(function(seed, e, a){
      if(e.age < seed.age){
          seed = e;
      }
      return seed;
    });
    return youngests.name;

};

var averageBalance = function(array){
    var balances = 0;
    _.each(array, function(e, i, a){
        balances += parseFloat(e.balance.replace(/[^\d.-]/g, ''));
    });
    return balances / array.length;
};

var firstLetterCount = function(array, letter){
  return _.reduce(array, function(acc, customer){
       if(customer.name[0].toLowerCase() === letter.toLowerCase()){
           acc.push(customer);
       }
       return acc;
   }, []).length;
};

var friendFirstLetterCount = function(array, customer, letter){
    var counter = 0;
    array.forEach(function(person){
        if(person.name === customer){
            person.friends.forEach(function(friend){
                if(friend.name[0].toLowerCase() === letter.toLowerCase()){
                    counter += 1;
                }
            });
        }

    });
    return counter;
};

var friendsCount = function(array, name){
  return _.reduce(array, function(list, customer){
      _.each(customer.friends, function(friend){
          if(friend.name === name){
              list.push(customer.name);
          }
      })
      return list;
  }, []);
}

var topThreeTags = function(array){
    var tagCo = {};
    _.each(array, function(e, i, a){
        _.each(e.tags, function(tag, i, a){
            if(!tagCo[tag]){
                tagCo[tag] = 0;
            }
            tagCo[tag] += 1;
        });
    });
    var results = [];
    _.each(tagCo, function(value, key, a){
        results.push({tag: key, counter: value});
    });
    var compare = function(a, b){
        if(a.counter < b.counter)
        return -1;
        if(a.counter > b.counter)
        return 1;
        return 0;
    };
    var sortedArr = results.sort(compare);
    var topThree = _.map(sortedArr, function(e){
        return e.tag;
    });
    return topThree.slice(-3);
};

var genderCount = function(array){
    return _.reduce(array, function(seed, customer){
        if(!seed[customer.gender]){
            seed[customer.gender] = 1;
        }else{
            seed[customer.gender]++;
        }
        return seed;
    }, {})
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
