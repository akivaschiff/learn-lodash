'use strict';

const { _, checker } = require('../src/lodash');

describe('Zip it!', () => {

  const transactions = [
    { transactionId: 1230, billingAmount: 100, source: 'isracard' },
    { transactionId: 1231, billingAmount: 235.67, source: 'cal'  },
    { transactionId: 1232, billingAmount: 434.54, source: 'isracard' },
  ];

  const transactionsCategories = [
    { transactionId: 1230, category: 'אוכל בחוץ' },
    { transactionId: 1231, category: 'פארמה' },
    { transactionId: 1232, category: 'רכב' },
  ]

  test('Associate transactions to their categories using _.zip and _.map', () => {
    // TODO: CHANGE THIS LINE - https://lodash.com/docs/4.17.15#zip
    const categorizedTransactions = _.map(transactions, t1 => {
      const { category } = _.find(transactionsCategories, t2 => {
        return t1.transactionId === t2.transactionId;
      });
      return { ...t1, category };
    });

    expect(categorizedTransactions).toEqual(
      [
        { transactionId: 1230, billingAmount: 100, source: 'isracard', category: 'אוכל בחוץ' },
        { transactionId: 1231, billingAmount: 235.67, source: 'cal', category: 'פארמה' },
        { transactionId: 1232, billingAmount: 434.54, source: 'isracard', category: 'רכב' },
      ]
    );
    expect(checker.usesOnly('zip', 'map')).not.toThrow();
  });

  test('Associate transactions to their categories using only _zipWith', () => {
    // TODO: Zip is so messy, I had to use _.map! If only I had an alternative...
    // TODO: CHANGE THIS LINE - use https://lodash.com/docs/4.17.15#zipWith this time
    const categorizedTransactions = _.map(transactions, t1 => {
      const { category } = _.find(transactionsCategories, t2 => {
        return t1.transactionId === t2.transactionId;
      });
      return { ...t1, category };
    });

    expect(categorizedTransactions).toEqual(
      [
        { transactionId: 1230, billingAmount: 100, source: 'isracard', category: 'אוכל בחוץ' },
        { transactionId: 1231, billingAmount: 235.67, source: 'cal', category: 'פארמה' },
        { transactionId: 1232, billingAmount: 434.54, source: 'isracard', category: 'רכב' },
      ]
    );
    expect(checker.usesOnly('zipWith')).not.toThrow();
  });
});

beforeEach(() => {
  checker.reset();
});
