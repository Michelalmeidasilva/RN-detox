// const { device, element, expect, config, by, init, waitFor } = require('detox');
// const { expect: expectGlobal } = require('@jest/globals');
// const axios = require('axios');
// const { postLogin } = require('./login');

// // Mock out all top level functions, such as get, put, delete and post:
// jest.mock('axios');

// // ...

// const BASE_URL = 'https://reqres.in/api';
// describe('Authentication flow', () => {
//   beforeAll(async () => {
//     await device.launchApp();
//     jest.clearAllMocks();
//     // await init(config, { exposeGlobal: false });
//   });

//   afterEach(() => {
//     // cleaning up the mess left behind the previous test
//   });

//   // it('should go to home screen', async () => {
//   // axios.post.mockImplementation(() => Promise.resolve({ data: { token: 'e2e2e2e2' } }));
//   // await postLogin({ email: 'michael.lawson@reqres.in', password: 'Uillia1234' });
//   // await element(by.id('input_email')).replaceText('michael.lawson@reqres.in');
//   // await element(by.id('input_password')).replaceText('Uillia1234');
//   // await element(by.id('button_sign')).tap();
//   // expectGlobal(axios.post).toHaveBeenCalledWith(`${BASE_URL}/login`, {
//   //   email: 'michael.lawson@reqres.in',
//   //   password: 'Uillia1234'
//   // });
//   // await waitFor(button).toExist().withTimeout(1000);
//   // });
// });
