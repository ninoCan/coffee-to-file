import {expect, jest, test} from '@jest/globals'
import { run } from './../src/main';
import { coffeeAPI } from 'buymeacoffee.js'

import * as fs from 'fs'

// shows how the runner will run a javascript action with env / stdout protocol
test('test update readme regexp', () => {
/*

  process.env['BUY_ME_A_COFFEE_TOKEN'] = 'bmac_token';
  process.env['README'] = 'test_README.md';
  process.env['NUMBER_OF_MESSAGES'] = '5';

  const fakeSupporters = jest.fn(() => {
    return {'hello': 'bye'};
  });

  const coffeeMock = jest.mock(coffeeAPI, () => {
    return jest.fn().mockImplementation(() => {
      return {Supporters: fakeSupporters};
    });
  });

  const updatedFile = run();
  expect(fakeSupporters.mock.calls[0]).toEqual(undefined);
  const output = fs.readFileSync('test_README.md', 'utf-8');

  expect(output).toBe('<!--START_SECTION:buy-me-a-coffee-->updated messages<!--END_SECTION:buy-me-a-coffe-->');
*/
})
