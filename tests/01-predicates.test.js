'use strict'

const { _, checker } = require('../src/lodash');

describe('What is a predicate really??', () => {

  const transactions = [
    { billingAmount: 235.67, source: 'cal', category: 'פארמה' },
    { billingAmount: 100, source: 'isracard', category: 'אוכל בחוץ' },
    { billingAmount: 434.54, source: 'isracard', category: 'רכב' },
    { billingAmount: 555.57, source: 'isracard', category: 'כלכלה' },
    { billingAmount: 543.44, source: 'isracard', category: 'כלכלה' },
    { billingAmount: 136.67, source: 'yahav', category: 'פנאי' },
    { billingAmount: 166.44, source: 'isracard', category: 'העברות קבועות' },
    { billingAmount: 156.87, source: 'leumicard', category: 'חשמל' }
  ];

  test('Keep only Isracard transactions using _.filter and a function predicate', () => {
    // TODO: FIX THIS LINE - Use _.filter with a function predicate, i.e. the way you're used to filter stuff!
    const isracardTransactions = transactions;

    expect(isracardTransactions).toHaveLength(5);
  });

  test('Keep only Isracard transactions using _.filter and a function predicate that uses _.isMatch', () => {
    // TODO: FIX THIS LINE - Use _.filter with a function predicate that uses https://lodash.com/docs/4.17.15#isMatch
    const isracardTransactions = transactions;

    expect(isracardTransactions).toHaveLength(5);
    expect(checker.mustUse('isMatch'));
  });

  test('Keep only Isracard transactions using _.filter and a function predicate that uses _.matches', () => {
    // TODO: FIX THIS LINE - Use _.filter with a function predicate that uses https://lodash.com/docs/4.17.15#matches
    // TODO: _.matches is like _.isMatch only it returns a function, which makes it more composable with functions like
    // TODO: _.filter
    const isracardTransactions = transactions;

    expect(isracardTransactions).toHaveLength(5);
    expect(checker.mustUse('matches'));
  });

  test('Keep only Isracard transactions using _.filter and a matcher', () => {
    // TODO: FIX THIS LINE - Use _.filter with a matcher object e.g. _.filter(users, { 'age': 1, 'active': true });
    // TODO: BTW - the way this works under the hood is that lodash simply uses the passed object as an argument for
    // TODO: _.matches. Pretty cool huh?
    const isracardTransactions = transactions;

    expect(isracardTransactions).toHaveLength(5);
  });

  test('Find the first Isracard transactions', () => {

    // TODO: FIX THIS LINE - use any of the predicate methods you used above. All of them work the same with _.find
    // TODO: as well as other lodash functions
    const firstIsracardTransaction = transactions[0];

    expect(firstIsracardTransaction).toEqual(transactions[1]);
    expect(checker.mustUse('find'));
  });

});
