const { device, expect, element, by } = require('detox');

describe('Authentication flow', () => {
  beforeEach(async () => {
    // await start();
    await device.launchApp();
  });

  afterEach(async () => {
    await device.reloadReactNative();
    // cleaning up the mess left behind the previous test
  });

  it('should have an email and password to tap button', async () => {
    await element(by.id('button_sign')).tap();

    await expect(element(by.text('Campo obrigatório'))).toBeVisible();
  });

  it('should have a valid password', async () => {
    await element(by.id('input_email')).replaceText('michael@reqres');
    await element(by.id('input_password')).replaceText('dsdsd');

    await element(by.id('button_sign')).tap();

    await expect(element(by.text('Senha deve ter mais que 6 caracteres'))).toBeVisible();
  });

  it('should have a valid email', async () => {
    await element(by.id('input_email')).replaceText('michael@reqres');
    await element(by.id('input_password')).replaceText('dsdsdsdsa');

    await element(by.id('button_sign')).tap();

    await expect(element(by.text('Informe um e-mail válido'))).toBeVisible();
  });

  it('should go to home screen', async () => {
    await element(by.id('input_email')).replaceText('michael.lawson@reqres.in');
    await element(by.id('input_password')).replaceText('Uillia1234');

    await element(by.id('button_sign')).tap();

    await expect(element(by.text('Built with react-native-nave-typescript'))).toBeVisible();
  });

  it('should have a valid credentials', async () => {
    await element(by.id('input_email')).replaceText('michael@reqres.in');
    await element(by.id('input_password')).replaceText('dsdsdsdsa');

    await element(by.id('button_sign')).tap();

    await expect(element(by.text('Credenciais Inválidas'))).toBeVisible();
  });
});

/**
 *
 */
