import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  filterTitulo: {
    fontWeight: 500,
    fontSize: 18,
    lineHeight: 22,
    color: '#000000',
    marginBottom: 20
  },
  manutencoesTitulo: {
    fontWeight: 500,
    fontSize: 18,
    lineHeight: 22,
    color: '#000000',
    marginTop: 20,
    marginBottom: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 30,
    width: '100%',
    maxWidth: '1170px',
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 50,
    borderRadius: 5
  },
  filterContainer: {
    width: '33.33%',
    marginBottom: 20,
    display: 'flex',
    paddingRight: 30,
  },
  contentContainer: {
    width: '66.66%',
  },
  filterItem: {
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 17,
    color: '#000000',
  },
  statusPicker: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 17,
    color: '#000000',
  },
  filterButton: {
    height: 40,
    backgroundColor: '#0047b3',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  filterButtonText: {
    color: '#fff',
    fontWeight: 'bold',
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
    fontWeight: 'normal',
  },
  taskIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  addButton: {
    position: 'fixed',
    bottom: 40,
    right: 40,
    width: 60,
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
    paddingHorizontal: 20,
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
