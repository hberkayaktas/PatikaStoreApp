import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './Header.style';
function Header() {
  const [text, onChangeText] = React.useState(null);

  return (
    <View>
      <View>
        <Text style={styles.header_title}>PATİKASTORE</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Ara..."
        />
      </View>
    </View>
  );
}

export default Header;
