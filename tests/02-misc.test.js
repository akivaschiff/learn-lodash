'use strict';

const { _, checker } = require('../src/lodash');

describe('Using miscellaneous functions you can', () => {

  const primeCustomers = [
    { customerId: 5, name: 'samantha' },
    { customerId: 6, name: 'olaf' },
  ];

  const stuckCustomers = [
    { customerId: 6, name: 'olaf' },
    { customerId: 7, name: 'elsa' },
    { customerId: 8, name: 'sven' },
  ];

  const funnyCustomers = [
    { customerId: 6, name: 'olaf' },
    { customerId: 8, name: 'sven' },
    { customerId: 9, name: 'bulda' },
  ];

  test('create the allCustomers variable', () => {


    // TODO: CHANGE THESE LINE - https://lodash.com/docs/4.17.15#unionBy
    const allCustomers = primeCustomers;

    expect(allCustomers).toEqual([
      { customerId: 5, name: 'samantha' },
      { customerId: 6, name: 'olaf' },
      { customerId: 7, name: 'elsa' },
      { customerId: 8, name: 'sven' },
      { customerId: 9, name: 'bulda' },
    ]);
    expect(checker.usesOnly('unionBy')).not.toThrow();
  });

  test('combine map and flatten', () => {
    const cashflows = [
      { budgetDate: '2020-04', transactions: [
          { billingAmount: 100 },
          { billingAmount: 50 },
        ]
      },
      { budgetDate: '2020-03', transactions: [
          { billingAmount: 75 },
        ]
      },
    ];

    // TODO: CHANGE THESE LINE - https://lodash.com/docs/4.17.15#flatMap
    const transactions = _.flatten(_.map(cashflows, cashflow => cashflow.transactions));

    expect(transactions).toEqual([
      { billingAmount: 100 },
      { billingAmount: 50 },
      { billingAmount: 75 },
    ]);
    expect(checker.usesOnly( 'flatMap')).not.toThrow();
  });
});

beforeEach(() => {
  checker.reset();
});
