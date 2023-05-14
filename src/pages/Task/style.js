import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
  },
  deleteTask: {
    marginRight: 10,
  },
  deleteTaskIcon: {
    color: '#0047b3',
  },
  taskDescriptionContainer: {
    flex: 1,
  },
  taskDescription: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  taskDate: {
    color: '#777',
    marginBottom: 5,
  },
  taskModel: {
    color: '#777',
    marginBottom: 5,
  },
  taskBrand: {
    color: '#777',
    marginBottom: 5,
  },
  taskObservation: {
    color: '#777',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#0047b3',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonIcon: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default styles;
