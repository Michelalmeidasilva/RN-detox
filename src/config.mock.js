// src/config.mock.js
import Config from 'react-native-config';

export * from './config.js';

// override the url from the original file:
export const SERVER_URL = Config.API_URL_TESTS;
