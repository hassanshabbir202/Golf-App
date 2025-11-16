import { Text, TouchableOpacity, View } from 'react-native';
import styles from "../styles/AuthFooterStyles"

const AuthFooter = ({ text, linkText, onPress }) => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>{text}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.link}> {linkText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthFooter;
