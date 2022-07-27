import Reactotron from 'reactotron-react-native';

const tron = Reactotron.configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!

tron.clear();

console.tron = tron;
