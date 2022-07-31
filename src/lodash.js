'use strict';

// If you are doing the exercise - no need to touch this file

const _ = require('lodash');
const myLodash = {};
let counter = {};

class ExerciseError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

Object.keys(_).forEach(key => {
  counter[key] = 0;
  Object.defineProperty(myLodash, key, {
    get() {
      if (_[key]) {
        counter[key] += 1;
      }
      return _[key];
    },
  })
});

const checker = {
  reset() {
    counter = _.mapValues(counter, val => 0);
  },
  usesOnly(...functionsToUse) {
    return () => {
      _.chain(counter).omit(functionsToUse).omitBy(count => count === 0).forEach((counter, funcName) => {
        throw new ExerciseError(`You can't use _.${funcName} but you've used it ${counter} time${counter > 1 ? 's' : ''}`);
      }).value();
      this.mustUse(functionsToUse);
    };
  },
  mustUse(...functionsToUse) {
    return () => {
      _.forEach(functionsToUse, func => {
        if (counter[func] === 0) {
          throw new ExerciseError(`You must use _.${func} to succeed!`);
        }
      });
    }
  },
  prohibit(...functionToNotUse) {
    _.chain(counter).pick(functionToNotUse).pickBy(count => count > 0).forEach((counter, funcName) => {
      throw new ExerciseError(`You can't use _.${funcName} but you've used it ${counter} time${counter > 1 ? 's' : ''}`);
    }).value();
  }
};

Object.defineProperty(checker, 'invokationsOf', {
  get() {
    return counter;
  }
});

module.exports = {
  _: myLodash,
  checker,
};
