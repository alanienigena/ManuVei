import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Picker } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import database from '../../config/firebase.js';
import styles from './style';

const carBrands = [
  'Selecionar',
  'Toyota',
  'Honda',
  'Ford',
  'Chevrolet',
  'Volkswagen',
  'Nissan',
  'Hyundai',
  'Mercedes-Benz',
  'BMW',
  'Audi',
  'Tesla',
  'Mitsubishi',
  'Subaru',
  'Volvo',
  'Land Rover',
  'Fiat',
  'Renault',
  'Peugeot',
  'Jeep',
  'Outro',
];

const carModels = [
  'Selecionar',
  'Sedan',
  'Hatch',
  'SUV',
  'Coupé',
  'Minivan',
  'Pickup',
  'Convertible',
  'Wagon',
  'Luxury',
  'Sports',
  'Electric',
  'Hybrid',
  'Compact',
  'Mid-size',
  'Full-size',
  'Off-road',
  'Performance',
  'Family',
  'Economy',
  'Outro',
];

export default function NewTask({ navigation }, props) {
  const [description, setDescription] = useState('');
  const [model, setModel] = useState('');
  const [brand, setBrand] = useState('');
  const [observation, setObservation] = useState('');
  const [date, setDate] = useState('');
  const [expense, setExpense] = useState('');

  function addTask() {
    if (
      description === '' ||
      model === '' ||
      brand === '' ||
      date === '' ||
      expense === ''
    ) {
      alert('Preencha todos os campos obrigatórios!');
      return;
    }

    database.collection('Tasks').add({
      description: description,
      model: model,
      brand: brand,
      observation: observation,
      date: date,
      expense: expense,
      status: false,
    });
    navigation.navigate('ManuVei');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Troca de óleo, Revisão, etc."
        onChangeText={setDescription}
        value={description}
      />
      <Text style={styles.label}>Modelo</Text>
      <Picker
        style={styles.input}
        selectedValue={model}
        onValueChange={(itemValue) => setModel(itemValue)}
      >
        {carModels.map((carModel) => (
          <Picker.Item key={carModel} label={carModel} value={carModel} />
        ))}
      </Picker>
      <Text style={styles.label}>Marca</Text>
      <Picker
        style={styles.input}
        selectedValue={brand}
        onValueChange={(itemValue) => setBrand(itemValue)}
      >
        {carBrands.map((carBrand) => (
          <Picker.Item key={carBrand} label={carBrand} value={carBrand} />
        ))}
      </Picker>
      <Text style={styles.label}>Data</Text>
      <TextInputMask
        style={styles.input}
        placeholder="Ex: DD/MM/AAAA"
        type="datetime"
        options={{ format: 'DD/MM/YYYY' }}
        value={date}
        onChangeText={setDate}
      />
      <Text style={styles.label}>Valor Gasto</Text>
      <TextInputMask
        style={styles.input}
        placeholder="Ex: R$ 100,00"
        type="money"
        options={{
          precision: 2,
          separator: ',',
          delimiter: '.',
          unit: 'R$',
          suffixUnit: '',
        }}
        value={expense}
        onChangeText={setExpense}
      />
      <Text style={styles.label}>Observação</Text>
      <TextInput
        style={styles.input}
        placeholder="Observações adicionais"
        onChangeText={setObservation}
        value={observation}
      />
      <TouchableOpacity style={styles.buttonNewTask} onPress={addTask}>
        <Text style={styles.iconButton}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}
