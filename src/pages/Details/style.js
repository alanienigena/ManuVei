import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
padding: 20,
},
label: {
fontSize: 16,
color: '#2374AB',
marginTop: 10,
},
input: {
width: '100%',
height: 50,
marginTop: 5,
paddingHorizontal: 10,
borderWidth: 1,
borderColor: '#2374AB',
borderRadius: 5,
},
checkboxContainer: {
flexDirection: 'row',
alignItems: 'center',
marginTop: 20,
},
checkboxLabel: {
fontSize: 16,
color: '#333',
marginLeft: 10,
marginRight: 10,
},
switchContainer: {
flexDirection: 'row',
alignItems: 'center',
marginTop: 10,
marginBottom: 20,
},
switchLabel: {
fontSize: 16,
color: '#333',
marginLeft: 20,
},
buttonNewTask: {
width: '100%',
height: 50,
backgroundColor: '#2374AB',
borderRadius: 25,
justifyContent: 'center',
alignItems: 'center',
marginTop: 20,
},
iconButton: {
color: '#ffffff',
fontSize: 16,
fontWeight: 'bold',
},
});

export default styles;