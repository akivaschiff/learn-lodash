'use strict';

const { _, checker } = require('../src/lodash');

describe('You can turn arrays into objects easily', () => {
  const customerList = [
    { customerId: 5, name: 'elsa', gender: 'female' },
    { customerId: 6, name: 'samantha', gender: 'female' },
    { customerId: 7, name: 'olaf', gender: 'snowman' },
  ];

  test('using _.keyBy', () => {
    // TODO: CHANGE THIS LINE - https://lodash.com/docs/4.17.15#keyBy
    const customers = customerList;

    expect(customers).toEqual({
      5: { customerId: 5, name: 'elsa', gender: 'female' },
      6: { customerId: 6, name: 'samantha', gender: 'female' },
      7: { customerId: 7, name: 'olaf', gender: 'snowman' },
    });
    expect(checker.usesOnly('keyBy')).not.toThrow();
  });

  test('using _.reduce', () => {
    // TODO: CHANGE THIS LINE - https://lodash.com/docs/4.17.15#reduce
    const customers = customerList;

    expect(customers).toEqual({
      5: 'elsa',
      6: 'samantha',
      7: 'olaf',
    });
    expect(checker.usesOnly('reduce')).not.toThrow();
  });

  test('using _.keyBy and _.mapValues', () => {
    // TODO: CHANGE THIS LINE - https://lodash.com/docs/4.17.15#mapValues
    const customers = customerList;

    expect(customers).toEqual({
      5: 'elsa',
      6: 'samantha',
      7: 'olaf',
    });
    expect(checker.usesOnly('keyBy', 'mapValues')).not.toThrow();
  });

  test('using _.groupBy and _.mapValues', () => {
    // TODO: CHANGE THIS LINE - https://lodash.com/docs/4.17.15#groupBy
    const customers = customerList;

    expect(customers).toEqual({
      female: 2,
      snowman: 1,
    });
    expect(checker.usesOnly('groupBy', 'mapValues')).not.toThrow();
  });
});

beforeEach(() => {
  checker.reset();
});
