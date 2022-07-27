const { device, expect, element, by } = require('detox');

describe('Authentication flow', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  // afterAll( async ()=> {
  //   await device.
  // })
  //   it('should go to home screen', async () => {
  //     //TO-DO
  //   });

  it('should go to home screen', async () => {
    await element(by.id('input_email')).replaceText('Uillia@gmail.com');
    await element(by.id('input_password')).replaceText('Uillia1234');

    await element(by.id('button_sign')).tap();

    await expect(element(by.text('Built with react-native-nave-typescript'))).toBeVisible();
  });
});

/**
 *
 */
