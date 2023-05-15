import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  content: {
    width: '100%',
    maxWidth: '768px',
  },
  label: {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 17,
    color: 'rgba(0, 0, 0, 0.6)',
    marginTop: 15,
  },
  input: {
    width: '100%',
    height: 40,
    marginTop: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0, 0.2)',
    borderRadius: 5,
  },
  buttonNewTask: {
    width: '100%',
    height: 40,
    marginTop: 20,
    backgroundColor: '#0047b3',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  iconButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default styles;
