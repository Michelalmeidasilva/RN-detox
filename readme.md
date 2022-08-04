# :rocket: React Native + Detox

> React Native Detox - Fluxo básico de autenticação com o Detox

## :arrow_forward: Usage

```sh
npx react-native init MyApp --template react-native-template-nave-typescript
```

## :wrench: Rodando

Para rodar esse dispositivo você deve seguir os seguintes passos: ps

Clonar o repositório

```sh
git clone git@github.com:Michelalmeidasilva/ReactNativeDetox.git
```

```sh
cd ReactNativeDetox
```

Instalação das dependências.

```sh
yarn && yarn pod-install
```

Rodando a Aplicação

Android

```sh
yarn android
```

iOS

```sh
yarn ios
```

Android

```sh
yarn android
```

iOS

```sh
yarn ios
```

Running tests

## Requisitos:

- Instalação do [detox-cli](https://wix.github.io/Detox/docs/introduction/getting-started/#install-detox-command-line-tools-detox-cli)

Android

```sh
detox build --configuration "android.debug"

npx react-native start --sourceExts mock.js,js,json,ts,tsx

obs: Quando o emulador estiver rodando é necessário rodar o comando adb para expor o servidor ao emulador
 - adb reverse tcp:8080 tcp:8080

yarn detox-android-debug

```

iOS

```sh

detox build --configuration "ios.debug"

npx react-native start --sourceExts mock.js,js,json,ts,tsx

yarn detox-ios-release

```
