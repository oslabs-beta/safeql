import { circularCheck } from '../../src/schemaFuncs/circularCheck';

const testData = [
    {name: 'NotConnected',   fields:[    {name: 'id', type: 'ID'},    {name: 'user', type:'User'}    ]  },
    {name: 'User',   fields:[    {name: 'id', type: 'ID'},     {name: 'location', type:'Location'},    {name: 'cohort', type: 'String'}    ]  }, 
    {name: 'Location',   fields:[    {name: 'id', type: 'ID'},    {name: 'gps', type: 'Number'},    {name: 'user', type:'Third'}    ]  },
    {name: 'Third',   fields:[    {name: 'id', type: 'ID'},    {name: 'user', type:'User'}    ]  }  
  ]

describe('Validate Circular check functionality', () => {

    test('test for circular data', () => {
        expect(circularCheck(testData)).toStrictEqual([[ 'Location', 'Third', 'User' ], [ 'Third', 'User', 'Location' ], [ 'User', 'Location', 'Third' ]]);
    })
    // @ts-ignore
    test.each(circularCheck(testData))(`%s, %s, %s doesn't contain NotConnected`, (a, b, c) => {
      expect(a + b + c).not.toContain('NotConnected');
    });
})