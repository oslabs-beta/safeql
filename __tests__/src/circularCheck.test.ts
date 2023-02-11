import { circularCheck } from '../../src/schemaFuncs/circularCheck';

const testData = [
    {name: 'NotConnected', node: 0,  fields:[    {name: 'id', type: 'ID'},    {name: 'user', type:'User'}    ]  },
    {name: 'User',  node: 1, fields:[    {name: 'id', type: 'ID'},     {name: 'location', type:'Location'},    {name: 'cohort', type: 'String'}    ]  }, 
    {name: 'Location', node: 2, fields:[    {name: 'id', type: 'ID'},    {name: 'gps', type: 'Number'},    {name: 'user', type:'Third'}    ]  },
    {name: 'Third', node: 3,   fields:[    {name: 'id', type: 'ID'},    {name: 'user', type:'User'}    ]  }  
  ]

describe('Validate Circular check functionality', () => {
    const map = new Map([['Location', 2], ['Third', 3], ['User', 1]]);

    test('test for circular data', () => {
      expect(circularCheck(testData)).toStrictEqual([map]);
    })
    // @ts-ignore
    // test.each(circularCheck(testData)[0])(`%s, %s, %s doesn't contain NotConnected`, (a, b, c) => {
    //   expect(a + b + c).not.toContain('NotConnected');
    // });
})