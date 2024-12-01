'use dom';

import '../../../global.css';
import { StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <div style={styles.container}>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});