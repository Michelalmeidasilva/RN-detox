const { device, expect, element, by } = require('detox');

describe('Authentication flow', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should go to home screen', async () => {
    await expect(element(by.text('Built with react-native-nave-typescript'))).toBeVisible();
  });

  it('should go to login screen', async () => {
    await expect(element(by.text('Built with react-native-nave-typescript'))).toBeVisible();
  });
});

/**
 *
 */
