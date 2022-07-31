'use strict';

const { _, checker } = require('../src/lodash');

describe('Chaining functions make the world better <3', () => {

  const transactions = [
    { billingAmount: 100, source: 'isracard', category: 'אוכל בחוץ' },
    { billingAmount: 235.67, source: 'cal', category: 'פארמה' },
    { billingAmount: 434.54, source: 'isracard', category: 'רכב' },
    { billingAmount: 555.57, source: 'isracard', category: 'כלכלה' },
    { billingAmount: 543.44, source: 'isracard', category: 'כלכלה' },
    { billingAmount: 136.67, source: 'yahav', category: 'פנאי' },
    { billingAmount: 166.44, source: 'isracard', category: 'העברות קבועות' },
    { billingAmount: 156.87, source: 'leumicard', category: 'חשמל' }
  ];

  test('transform all isracard transactions using _.chain', () => {
    // TODO: CHANGE THIS LINE - https://lodash.com/docs/4.17.15#chain. DON'T FORGET TO CALL value()!
    const transformedTransactions = _.map(_.filter(transactions, t => t.source === 'isracard'), t => {
      return { ...t, isIsracard: true }
    });

    expect(transformedTransactions).toHaveLength(5);
    _.forEach(transformedTransactions, t => {
      expect(t).toHaveProperty('isIsracard');
    });
    expect(checker.mustUse('chain')).not.toThrow();
  });

  test('sum isracard transactions that are not "eating out" with _.chain', () => {
    // TODO: CHANGE THE NEXT 3 LINES TO USE _.chain. TIP: AS LONG THE TYPES ARE RIGHT YOU CAN USE _.chain TO COMPOSE DIFFERENT FUNCTIONS
    const allIsracardNonEatingOut = _.reject(_.filter(transactions, t => t.source === 'isracard'), t => t.category === 'אוכל בחוץ');
    const sum = _.sumBy(allIsracardNonEatingOut, t => t.billingAmount);
    const roundedSum = _.round(sum, 2);

    expect(roundedSum).toEqual(1699.99);
    expect(checker.mustUse('chain')).not.toThrow();
  });

  test('filter out all isracard transactions without _.chain', () => {
    const isracardTransactions = _.chain(transactions).filter(t => t.source === 'isracard').value();

    expect(isracardTransactions).toHaveLength(5);
    expect(checker.prohibit('chain'));
  })
});

beforeEach(() => {
  checker.reset();
});
