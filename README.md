# react-native-netfox-ios

`react-native-netfox-ios` is a bridge for integrating [Netfox](https://github.com/kasketis/netfox) into React Native iOS applications. Netfox is a powerful network debugging tool for iOS apps, helping you inspect HTTP requests, responses, headers, and more, directly within your app.

## Installation

To install `react-native-netfox-ios`, follow these steps:

### 1. Install the Package

Using Yarn:

```bash
yarn add react-native-netfox-ios
```

Or using npm:

```bash
npm install react-native-netfox-ios
```

### 2. Link Native Dependencies

If you're using React Native 0.59 or below, you may need to link the package manually. For React Native 0.60 and above, auto-linking should work out of the box.

Run the following command if necessary:

```bash
react-native link react-native-netfox-ios
```

### 3. Install CocoaPods

Navigate to your `ios` directory and install the necessary pods:

```bash
cd ios
pod install
```

### 4. Initialize Netfox

In your app, initialize Netfox at the very start by calling the `initializeNetfox()` function:

```js
import { initializeNetfox } from 'react-native-netfox-ios';

useEffect(() => {
  initializeNetfox();
}, []);
```

### 5. Show Netfox UI

To view network requests in the Netfox UI, call the `showNetfox()` function:

```js
import { showNetfox } from 'react-native-netfox-ios';

<Button
  title="Show Netfox"
  onPress={() => {
    showNetfox();
  }}
/>
```

## Example Usage

Here's a simple example demonstrating how to use `react-native-netfox-ios` to initialize and view network requests:

```js
import React, { useEffect, useState } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { showNetfox, initializeNetfox } from 'react-native-netfox-ios';

export default function App() {
  const [responseText, setResponseText] = useState('');

  const makeGetRequest = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts/1'
      );
      const data = await response.json();
      setResponseText(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error('GET Request Error:', error);
      setResponseText('GET Request Error');
    }
  };

  const makePostRequest = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
          }),
        }
      );
      const data = await response.json();
      setResponseText(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error('POST Request Error:', error);
      setResponseText('POST Request Error');
    }
  };

  useEffect(() => {
    initializeNetfox();
  }, []);

  return (
    <View style={styles.container}>
      <Button
        title="Show Netfox"
        onPress={() => {
          showNetfox();
        }}
      />
      <Button title="Make GET Request" onPress={makeGetRequest} />
      <Button title="Make POST Request" onPress={makePostRequest} />
      <Text style={styles.responseText}>{responseText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  responseText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 14,
    color: 'black',
  },
});
```

## API

### `initializeNetfox()`

Initialize Netfox to start capturing network requests. This should be called at the beginning of your app.

### `showNetfox()`

Opens the Netfox UI to show all captured network requests. Call this to debug network requests in your app.

## Development

To contribute to this project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/muhsinertugan/react-native-netfox-ios.git
   cd react-native-netfox-ios
   ```

2. Install dependencies:
   ```bash
   yarn
   ```

3. Run the example app:
   ```bash
   yarn workspace react-native-netfox-ios-example
   ```

4. To run tests:
   ```bash
   yarn test
   ```

## Scripts

- `example`: Run the example app.
- `test`: Run tests using Jest.
- `typecheck`: Check TypeScript types.
- `lint`: Run ESLint to check for code quality issues.
- `clean`: Clean build artifacts.
- `prepare`: Prepare the project for release.
- `release`: Create a new release.

## License

MIT License. See the [LICENSE](LICENSE) file for more details.

## Issues

If you encounter any issues, please report them [here](https://github.com/muhsinertugan/react-native-netfox-ios/issues).

## Author

Muhsin Ertuğan <muhsin.ertugan@gmail.com> (https://github.com/muhsinertugan)