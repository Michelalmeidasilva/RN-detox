const { device, expect, element, by, init } = require('detox');

const mockServer = require('./__mocks__/server-mock');

describe('Authentication flow', () => {
  beforeAll(async () => {
    await mockServer.start();

    await device.launchApp();
  });

  afterEach(async () => {
    await device.reloadReactNative();
  });

  afterAll(async () => {
    await mockServer.stop();
  });

  it('should have an email and password to tap button', async () => {
    await element(by.id('button_sign')).tap();

    await expect(element(by.text('Campo obrigatório')).atIndex(0)).toBeVisible();
    await expect(element(by.text('Campo obrigatório')).atIndex(1)).toBeVisible();
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

  it('should have credentials invalid error and stay at login screen', async () => {
    await element(by.id('input_email')).replaceText('ovier@ddmail.com');
    await element(by.id('input_password')).replaceText('dsdsadasdada');

    await element(by.id('button_sign')).tap();

    await element(by.text('OK')).tap();

    await expect(element(by.text('Credenciais Inválidas'))).not.toBeVisible();
  });

  it('should go to home screen', async () => {
    await element(by.id('input_email')).replaceText('michel@gmail.com');
    await element(by.id('input_password')).replaceText('test12345@');

    await element(by.id('button_sign')).tap();

    await expect(element(by.text('Home'))).toBeVisible();
  });
});
