const { device, expect, element, by } = require('detox');
const { mockAxios } = require('jest-mock-axios');

const BASE_URL = 'https://reqres.in/api';
describe('Authentication flow', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  afterEach(() => {
    // cleaning up the mess left behind the previous test
    mockAxios.reset();
  });

  it('should go to home screen', async () => {
    await element(by.id('input_email')).replaceText('michael.lawson@reqres.in');
    await element(by.id('input_password')).replaceText('Uillia1234');

    mockAxios.post.mockResolvedValueOnce({ token: 'heaheuahueahuehua' });

    await element(by.id('button_sign')).tap();

    await expect(mockAxios.post).toHaveBeenCalledWith(`${BASE_URL}/login`);

    // await expect(element(by.text('Built with react-native-nave-typescript'))).toBeVisible();
  });
});

/**
 *
 */
