import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import database from '../../config/firebase';
import styles from './style';
import { TextInputMask } from 'react-native-masked-text';

export default function Task({ navigation }) {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filterModel, setFilterModel] = useState('');
  const [filterBrand, setFilterBrand] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [totalExpense, setTotalExpense] = useState(0);

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

  function handleDeleteTask(id) {
    database.collection('Tasks').doc(id).delete();
  }

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

    setFilteredTasks(filtered);
    calculateTotalExpense(filtered); // Recalcula o valor total gasto com as tarefas filtradas
  }

  function calculateTotalExpense(tasks) {
    const total = tasks.reduce((sum, task) => sum + parseFloat(task.expense.replace(/[^0-9.-]+/g, '')), 0);
    setTotalExpense(total);
  }


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Filtrar por modelo"
        onChangeText={(text) => setFilterModel(text)}
        value={filterModel}
        onBlur={handleFilterTasks}
      />

      <TextInput
        style={styles.input}
        placeholder="Filtrar por marca"
        onChangeText={(text) => setFilterBrand(text)}
        value={filterBrand}
        onBlur={handleFilterTasks}
      />

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

      <View style={styles.totalExpenseContainer}>
        <Text style={styles.totalExpenseLabel}>Valor Total Gasto:</Text>
        <Text style={styles.totalExpenseValue}>R$ {totalExpense.toFixed(2)}</Text>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <TouchableOpacity
              style={styles.deleteTask}
              onPress={() => handleDeleteTask(item.id)}
            >
              <FontAwesome name="trash" size={23} color="#0047b3" />
            </TouchableOpacity>
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
                  expense: item.expense, // Adicionando o valor gasto à navegação
                })
              }
            >
              <Text style={styles.taskDescription}>{item.description}</Text>
              <Text style={styles.taskDate}>{item.date}</Text>
              <Text style={styles.taskModel}>{item.model}</Text>
              <Text style={styles.taskBrand}>{item.brand}</Text>
              <Text style={styles.taskObservation}>{item.observation}</Text>
              <Text style={styles.taskExpense}>{item.expense}</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('Registrar')}
      >
        <Text style={styles.addButtonIcon}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

