import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import database from '../../config/firebase';
import styles from './style';

export default function Details({ navigation, route }) {
  const [descriptionEdit, setDescriptionEdit] = useState(route.params.description);
  const [dateEdit, setDateEdit] = useState(route.params.date);
  const [modelEdit, setModelEdit] = useState(route.params.model);
  const [brandEdit, setBrandEdit] = useState(route.params.brand);
  const [observationEdit, setObservationEdit] = useState(route.params.observation);
  const idTask = route.params.id;

  function editTask(description, date, model, brand, observation, id) {
    database.collection('Tasks').doc(id).update({
      description: description,
      date: date,
      model: model,
      brand: brand,
      observation: observation,
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

      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => {
          editTask(descriptionEdit, dateEdit, modelEdit, brandEdit, observationEdit, idTask);
        }}
      >
        <Text style={styles.iconButton}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}
