import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
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

  // Initialize Netfox at the very start of the app
  useEffect(() => {
    initializeNetfox();
  }, []);

  return (
    <View style={styles.container}>
      {/* Button to show Netfox UI */}
      <Button
        title="Show Netfox"
        onPress={() => {
          showNetfox();
        }}
      />
      {/* Button to make a GET request */}
      <Button title="Make GET Request" onPress={makeGetRequest} />
      {/* Button to make a POST request */}
      <Button title="Make POST Request" onPress={makePostRequest} />
      {/* Display the response text */}
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
