import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch } from 'react-native';
import database from '../../config/firebase';
import styles from './style';
import { TextInputMask } from 'react-native-masked-text';

export default function Details({ navigation, route }) {
  const [descriptionEdit, setDescriptionEdit] = useState(route.params.description);
  const [dateEdit, setDateEdit] = useState(route.params.date);
  const [modelEdit, setModelEdit] = useState(route.params.model);
  const [brandEdit, setBrandEdit] = useState(route.params.brand);
  const [observationEdit, setObservationEdit] = useState(route.params.observation);
  const [expenseEdit, setExpenseEdit] = useState(route.params.expense);
  const [isCompleted, setIsCompleted] = useState(route.params.isCompleted);

  const idTask = route.params.id;

  function editTask(description, date, model, brand, observation, expense, isCompleted, id) {
    database.collection('Tasks').doc(id).update({
      description: description,
      date: date,
      model: model,
      brand: brand,
      observation: observation,
      expense: expense,
      isCompleted: isCompleted,
    });
    navigation.navigate('ManuVei');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Troca de Óleo, Revisão, etc..."
        onChangeText={setDescriptionEdit}
        value={descriptionEdit}
      />

      <Text style={styles.label}>Data</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: DD/MM/AAAA"
        onChangeText={setDateEdit}
        value={dateEdit}
      />

      <Text style={styles.label}>Modelo</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Sedan, Hatch, SUV"
        onChangeText={setModelEdit}
        value={modelEdit}
      />

      <Text style={styles.label}>Marca</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Toyota, Honda, Ford"
        onChangeText={setBrandEdit}
        value={brandEdit}
      />

      <Text style={styles.label}>Observação</Text>
      <TextInput
        style={styles.input}
        placeholder="Observações adicionais"
        onChangeText={setObservationEdit}
        value={observationEdit}
      />

      <Text style={styles.label}>Valor Gasto</Text>
      <TextInputMask
        style={styles.input}
        placeholder="Ex: 100.00"
        type="money"
        options={{
          precision: 2,
          separator: '.',
          delimiter: ',',
          unit: 'R$ ',
          suffixUnit: '',
        }}
        value={expenseEdit}
        onChangeText={setExpenseEdit}
        keyboardType="numeric"
      />

      <View style={styles.checkboxContainer}>
        <Text style={styles.checkboxLabel}>Manutenção Realizada</Text>
        <Switch
          value={isCompleted}
          onValueChange={(value) => setIsCompleted(value)}
        />
      </View>       
      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => {
          editTask(
            descriptionEdit,
            dateEdit,
            modelEdit,
            brandEdit,
            observationEdit,
            expenseEdit,
            isCompleted,
            idTask
          );
        }}
      >
        <Text style={styles.iconButton}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}


     
