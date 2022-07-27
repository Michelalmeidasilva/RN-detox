const { device, expect, element, by, waitFor } = require('detox');

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should show a text: "built with react-native-nave-typescript"', async () => {
    await expect(element(by.text('Built with react-native-nave-typescript'))).toBeVisible();
  });
});

/**
 *
 */
