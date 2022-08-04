const { device, expect, element, by, waitFor } = require('detox');

const mockServer = require('./__mocks__/server-mock');

describe('Home screen', () => {
  beforeAll(async () => {
    mockServer.start();
    await device.launchApp();
    await grantAccessToUserWithValidCredentials();
  });

  afterAll(async () => {
    mockServer.stop();
  });

  it('should scroll down list', async () => {
    await waitFor(element(by.text('Item 20')))
      .toBeVisible()
      .whileElement(by.id('flatlist'))
      .scroll(50, 'down');
  });

  it('should filter by checked items', async () => {
    await element(by.id('switch_button')).tap();

    await expect(element(by.text('Item 6'))).toBeVisible();
    await expect(element(by.text('Item 1'))).not.toBeVisible();
  });
});

const grantAccessToUserWithValidCredentials = async () => {
  await element(by.id('input_email')).replaceText('michel@gmail.com');
  await element(by.id('input_password')).replaceText('test12345@');

  await element(by.id('button_sign')).tap();
};
