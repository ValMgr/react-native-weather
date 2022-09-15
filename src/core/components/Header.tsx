import { View, Text, StyleSheet } from 'react-native';

export const Header = () => {
  return (
    <View style={styles.header} pointerEvents={'none'}>
      <Text style={styles.headerText}>.Weather</Text>
      {/* <Text style={styles.headerText}>v0.1.0</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    paddingTop: 55,
    padding: 20,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 99,

  },
  headerText: {
    color: '#BB86FC',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
