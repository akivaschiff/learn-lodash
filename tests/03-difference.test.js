'use strict';

const { _, checker } = require('../src/lodash');

describe('Using the "difference" functions you can calculate', () => {

  test('customersToMessage with _.difference', () => {
    const customers = [5, 6 ,7];
    const alreadyGotMessage = [6, 7];

    // TODO: CHANGE THIS LINE - https://lodash.com/docs/4.17.15#difference
    const customersToMessage = _.reject(customers, customer => _.includes(alreadyGotMessage, customer));

    expect(customersToMessage).toEqual([5]);
    expect(checker.usesOnly('difference')).not.toThrow();
  });

  test('customersToMessage with _.differenceBy', () => {
    const customers = [
      { customerId: 5, name: 'samantha' },
      { customerId: 6, name: 'olaf' },
      { customerId: 7, name: 'elsa' },
    ];
    const customersWhoAlreadyGotMessage = [
      { customerId: 5, name: 'samantha' },
      { customerId: 6, name: 'olaf'},
    ];

    // TODO: CHANGE THESE LINE - https://lodash.com/docs/4.17.15#differenceBy
    const alreadyMessagedIds = _.map(customersWhoAlreadyGotMessage, s => s.customerId);
    const customersToMessage = _.reject(customers, customer => _.includes(alreadyMessagedIds, customer.customerId));

    expect(customersToMessage).toEqual([
      { customerId: 7, name: 'elsa' },
    ]);
    expect(checker.usesOnly('differenceBy')).not.toThrow();
  });

  test('customersToMessage with _.differenceBy using multiple lists', () => {
    const customers = [
      { customerId: 5, name: 'samantha' },
      { customerId: 6, name: 'olaf'},
      { customerId: 7, name: 'elsa'},
      { customerId: 8, name: 'sven'},
    ];
    const customersWhoAlreadyGotMessage = [
      { customerId: 6, name: 'olaf'},
    ];
    const customersDisabledMessaged = [
      { customerId: 8, name: 'sven'},
    ];

    // TODO: CHANGE THESE LINE - https://lodash.com/docs/4.17.15#differenceBy
    const alreadyMessagedIds = _.map(customersWhoAlreadyGotMessage, s => s.customerId);
    const disabledMessagedIds = _.map(customersDisabledMessaged, s => s.customerId);
    const customersToMessage = _.reject(customers, customer => _.includes([...alreadyMessagedIds, ...disabledMessagedIds], customer.customerId));

    expect(customersToMessage).toEqual([
      { customerId: 5, name: 'samantha' },
      { customerId: 7, name: 'elsa'},
    ]);
    expect(checker.usesOnly('differenceBy')).not.toThrow();
  });


  test('customersToMessage with _.differenceWith', () => {
    const customers = [
      { _id: 5, name: 'samantha' },
      { _id: 6, name: 'olaf' },
      { _id: 7, name: 'elsa' },
    ];
    const customersWhoAlreadyGotMessage = [
      { customerId: 6, name: 'olaf'},
    ];

    // TODO: CHANGE THESE LINE - https://lodash.com/docs/4.17.15#differenceWith
    const alreadyMessagedIds = _.map(customersWhoAlreadyGotMessage, s => s.customerId);
    const customersToMessage = _.reject(customers, customer => _.includes(alreadyMessagedIds, customer._id));

    expect(customersToMessage).toEqual([
      { _id: 5, name: 'samantha' },
      { _id: 7, name: 'elsa' },
    ]);
    expect(checker.usesOnly('differenceWith')).not.toThrow();
  });
});

beforeEach(() => {
  checker.reset();
});
