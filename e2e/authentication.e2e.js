const { device, expect, element, by } = require('detox');

describe('Authentication flow', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  afterEach(async () => {
    await device.reloadReactNative();
  });

  afterAll(async () => {
    await device.terminateApp();
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

  it('should go to home screen', async () => {
    await element(by.id('input_email')).replaceText('michel@gmail.com');
    await element(by.id('input_password')).replaceText('test12345@');

    await element(by.id('button_sign')).tap();

    await expect(element(by.text('Built with react-native-nave-typescript'))).toBeVisible();
  });

  // Multiple taps
  // Rodar testes no CI.
  // Gray box end-to-end testing and automation framework for mobile apps

  it('shouldn`t go to home screen', async () => {
    await element(by.id('input_email')).replaceText('ovier@ddmail.com');
    await element(by.id('input_password')).replaceText('dsdsadasdada');

    await element(by.id('button_sign')).tap();

    await expect(element(by.text('Credenciais Inválidas'))).toBeVisible();
  });
});
