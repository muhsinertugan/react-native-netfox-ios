import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-netfox-ios' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const NetfoxIos = NativeModules.NetfoxIos
  ? NativeModules.NetfoxIos
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export async function initializeNetfox() {
  if (Platform.OS === 'ios' && NetfoxIos.initializeNetfox) {
    try {
      await NetfoxIos.initializeNetfox();
    } catch (error) {
      console.error('Error initializing Netfox:', error);
    }
  }
}

export async function showNetfox() {
  if (Platform.OS !== 'ios') {
    console.warn('Netfox is only available on iOS.');
    return;
  }

  try {
    await NetfoxIos.showNetfox();
  } catch (error) {
    console.error('Error showing Netfox interface:', error);
  }
}
