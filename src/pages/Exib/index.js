import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput, Picker } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import database from '../../config/firebase';
import styles from './style';
import { TextInputMask } from 'react-native-masked-text';

export default function Task({ navigation }) {
  // Estado para armazenar todas as tarefas
  const [tasks, setTasks] = useState([]);

  // Estado para armazenar as tarefas filtradas
  const [filteredTasks, setFilteredTasks] = useState([]);

  // Estados para armazenar os valores dos filtros
  const [filterModel, setFilterModel] = useState('');
  const [filterBrand, setFilterBrand] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  // Estado para armazenar o valor total gasto
  const [totalExpense, setTotalExpense] = useState(0);

  // Carrega as tarefas do banco de dados ao montar o componente
  useEffect(() => {
    const unsubscribe = database.collection('Tasks').onSnapshot((snapshot) => {
      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(list);
      setFilteredTasks(list); // Inicialmente, exibe todas as tarefas
      calculateTotalExpense(list); // Calcula o valor total gasto
    });

    return () => unsubscribe();
  }, []);

  // Função para lidar com a exclusão de uma tarefa
  function handleDeleteTask(id) {
    database.collection('Tasks').doc(id).delete();
  }

  // Função para filtrar as tarefas com base nos valores dos filtros
  function handleFilterTasks() {
    let filtered = tasks;

    // Aplica o filtro por modelo
    if (filterModel !== '') {
      filtered = filtered.filter((task) =>
        task.model.toLowerCase().includes(filterModel.toLowerCase())
      );
    }

    // Aplica o filtro por marca
    if (filterBrand !== '') {
      filtered = filtered.filter((task) =>
        task.brand.toLowerCase().includes(filterBrand.toLowerCase())
      );
    }

    // Aplica o filtro por data
    if (filterDate !== '') {
      filtered = filtered.filter((task) => task.date.includes(filterDate));
    }

    // Aplica o filtro por status
    if (filterStatus !== 'All') {
      filtered = filtered.filter((task) => {
        if (filterStatus === 'Completed') {
          return task.isCompleted;
        } else {
          return !task.isCompleted;
        }
      });
    }

    setFilteredTasks(filtered);
    calculateTotalExpense(filtered); // Recalcula o valor total gasto com as tarefas filtradas
  }

  // Função para calcular o valor total gasto com as tarefas
  function calculateTotalExpense(tasks) {
    const total = tasks.reduce((sum, task) => {
      const expense = parseFloat(task.expense.replace(/[^0-9.-]+/g, '').replace('.', ','));
      return sum + expense;
    }, 0);
    setTotalExpense(total);
  }

  return (
    <View style={styles.container}>
      {/* Container para os filtros */}
      <View style={styles.filterContainer}>
        {/* Filtro por modelo */}
        <TextInput
          style={styles.input}
          placeholder="Filtrar por modelo"
          onChangeText={(text) => setFilterModel(text)}
          value={filterModel}
          onBlur={handleFilterTasks}
        />

        {/* Filtro por marca */}
        <TextInput
          style={styles.input}
          placeholder="Filtrar por marca"
          onChangeText={(text) => setFilterBrand(text)}
          value={filterBrand}
          onBlur={handleFilterTasks}
        />

        {/* Filtro por data */}
        <TextInputMask
          style={styles.input}
          placeholder="Filtrar por data - Mês e Ano"
          type="datetime"
          options={{
            format: 'MM/YYYY',
          }}
          value={filterDate}
          onChangeText={(text) => setFilterDate(text)}
          onBlur={handleFilterTasks}
        />

        {/* Filtro por status */}
        <Picker
          style={styles.statusPicker}
          selectedValue={filterStatus}
          onValueChange={(itemValue) => setFilterStatus(itemValue)}
        >
          <Picker.Item label="Todos" value="All" />
          <Picker.Item label="Concluídos" value="Completed" />
          <Picker.Item label="Em Aberto" value="Open" />
        </Picker>

        {/* Botão para aplicar os filtros */}
        <TouchableOpacity style={styles.filterButton} onPress={handleFilterTasks}>
          <Text style={styles.filterButtonText}>Filtrar</Text>
        </TouchableOpacity>
      </View>

      {/* Container para o valor total gasto */}
      <View style={styles.totalExpenseContainer}>
        <Text style={styles.totalExpenseLabel}>Valor Total Gasto:</Text>
        <Text style={styles.totalExpenseValue}>R$ {totalExpense.toFixed(2)}</Text>
      </View>

      {/* Lista de tarefas */}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            {/* Botão para excluir a tarefa */}
            <TouchableOpacity
              style={styles.deleteTask}
              onPress={() => handleDeleteTask(item.id)}
            >
              <FontAwesome name="trash" size={23} color="#0047b3" />
            </TouchableOpacity>

            {/* Item da tarefa */}
            <TouchableOpacity
              style={styles.taskDescriptionContainer}
              onPress={() =>
                navigation.navigate('Detalhes', {
                  id: item.id,
                  description: item.description,
                  date: item.date,
                  model: item.model,
                  brand: item.brand,
                  observation: item.observation,
                  expense: item.expense,
                  isCompleted: item.isCompleted,
                })
              }
            >
              {/* Detalhes da tarefa */}
              <View style={styles.taskDetailsContainer}>
                <View style={styles.taskColumn}>
                  <Text style={styles.taskTitle}>Descrição:</Text>
                  <Text style={styles.taskTitle}>Data:</Text>
                  <Text style={styles.taskTitle}>Modelo:</Text>
                  <Text style={styles.taskTitle}>Marca:</Text>
                </View>
                <View style={styles.taskColumn}>
                  <Text style={styles.taskValue}>{item.description}</Text>
                  <Text style={styles.taskValue}>{item.date}</Text>
                  <Text style={styles.taskValue}>{item.model}</Text>
                  <Text style={styles.taskValue}>{item.brand}</Text>
                </View>
              </View>
              {/* Observação da tarefa */}
              <View style={styles.taskObservationContainer}>
                <Text style={styles.taskTitle}>Observação:</Text>
                <Text style={styles.taskValue}>{item.observation}</Text>
              </View>
              {/* Valor da tarefa */}
              <View style={styles.taskExpenseContainer}>
                <Text style={styles.taskTitle}>Valor:</Text>
                <Text style={styles.taskValue}>R$ {item.expense}</Text>
              </View>
              {/* Status da tarefa */}
              <View style={styles.taskStatusContainer}>
                <Text style={styles.taskTitle}>Status:</Text>
                <Text
                  style={[
                    styles.taskStatus,
                    item.isCompleted ? styles.completedStatus : styles.openStatus,
                  ]}
                >
                  {item.isCompleted ? 'Concluída' : 'Em aberto'}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Botão para adicionar uma nova tarefa */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('NovaTarefa')}
      >
        <FontAwesome name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}



