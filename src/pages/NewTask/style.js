import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20
  },
  label: {
    width: '90%',
    marginTop: 20,
    fontSize: 16,
    marginLeft: 20,
    color: '#2C3E50'
  },
  input: {
    width: '90%',
    marginTop: 10,
    padding: 10,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#2C3E50',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  buttonNewTask: {
    width: 120,
    height: 50,
    marginTop: 20,
    backgroundColor: '#2C3E50',
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
