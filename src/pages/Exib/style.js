import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
    width: '80%',
    alignSelf: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  filterContainer: {
    marginBottom: 20,
  },
  filterButton: {
    backgroundColor: '#0047b3',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  filterButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  statusPicker: {
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
    marginRight: 30,
    marginLeft: 20,
  },
  taskDescriptionContainer: {
    flex: 1,
    marginLeft: 10,
  },
  taskDetailsContainer: {
    flexDirection: 'row',
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  taskColumn: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  taskValue: {
    fontSize: 14,
    marginBottom: 5,
  },
  taskIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 150,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#0047b3',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  addButtonIcon: {
    fontSize: 20,
    color: '#FFF',
    marginLeft: 5,
  },
  addButtonLabel: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
    marginLeft: 5,
    marginRight: 5,
  },
  totalExpenseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  totalExpenseLabel: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  totalExpenseValue: {
    fontSize: 16,
  },
});

export default styles;
