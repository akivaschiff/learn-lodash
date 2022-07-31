'use strict';

const { _, checker } = require('../src/lodash');

describe('Using the "difference" and "intersection" you can calculate', () => {

  const customers = [
    { customerId: 5, name: 'samantha' },
    { customerId: 6, name: 'olaf' },
    { customerId: 7, name: 'elsa' },
    { customerId: 8, name: 'sven' },
  ];

  const primeList = [
    { customerId: 5 },
    { customerId: 6 },
  ];

  const activeList = [
    { customerId: 6 },
    { customerId: 7 },
  ];

  test('the prime and non-prime customers', () => {
    // TODO: CHANGE THESE LINE - https://lodash.com/docs/4.17.15#intersectionBy
    const primeCustomers = customers;
    const nonPrimeCustomers = customers;

    expect(primeCustomers).toEqual([
      { customerId: 5, name: 'samantha' },
      { customerId: 6, name: 'olaf' },
    ]);
    expect(nonPrimeCustomers).toEqual([
      { customerId: 7, name: 'elsa' },
      { customerId: 8, name: 'sven' },
    ]);
    expect(checker.usesOnly('differenceBy', 'intersectionBy')).not.toThrow();
  });

  test('the prime active customers', () => {
    // TODO: CHANGE THESE LINE - https://lodash.com/docs/4.17.15#intersectionBy
    // Note: Only use `intersectionBy` ONCE! (Hint: it can get multiple arrays)
    const primeActiveCustomers = customers;

    expect(primeActiveCustomers).toEqual([
      { customerId: 6, name: 'olaf' },
    ]);
    expect(checker.usesOnly( 'intersectionBy')).not.toThrow();
  });

  test('the non-prime active customers', () => {
    const nonPrimeActiveCustomers = customers;

    expect(nonPrimeActiveCustomers).toEqual([
      { customerId: 7, name: 'elsa' },
    ]);
    expect(checker.usesOnly( 'intersectionBy', 'differenceBy')).not.toThrow();
  });

  test('the newCustomers with intersectionWith', () => {
    const newList = [
      { _id: 7 },
      { _id: 8 },
    ];
    const newCustomers = customers;

    expect(newCustomers).toEqual([
      { customerId: 7, name: 'elsa' },
      { customerId: 8, name: 'sven' },
    ]);
    expect(checker.usesOnly( 'intersectionWith')).not.toThrow();
  })
});

beforeEach(() => {
  checker.reset();
});
