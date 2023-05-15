/**
 * Componente de criação de nova tarefa de manutenção.
 * Permite ao usuário adicionar uma nova tarefa preenchendo os campos de descrição, modelo, marca, data, valor gasto e observação.
 * Os dados da nova tarefa são salvos no banco de dados e a navegação é redirecionada para a tela principal de manutenções.
 */
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Picker } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import database from '../../config/firebase.js';
import styles from './style.js';

// Opções de marcas de carro disponíveis para seleção
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

// Opções de modelos de carro disponíveis para seleção
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
  // Estados para armazenar os valores dos campos
  const [description, setDescription] = useState('');
  const [model, setModel] = useState('');
  const [brand, setBrand] = useState('');
  const [observation, setObservation] = useState('');
  const [date, setDate] = useState('');
  const [expense, setExpense] = useState('');

  // Função para adicionar uma nova tarefa
  function addTask() {
    // Verifica se todos os campos obrigatórios foram preenchidos
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

    // Salva os dados da nova tarefa no banco de dados
    database.collection('Tasks').add({
      description: description,
      model: model,
      brand: brand,
      observation: observation,
      date: date,
      expense: expense,
      status: false,
    });

    // Navega para a tela principal de manutenções
    navigation.navigate('ManuVei');
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Campo de edição: Descrição */}
        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Troca de óleo, Revisão, etc."
          onChangeText={setDescription}
          value={description}
        />
        {/* Campo de seleção: Modelo */}
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

        {/* Campo de seleção: Marca */}
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

        {/* Campo de edição: Data */}
        <Text style={styles.label}>Data</Text>
        <TextInputMask
          style={styles.input}
          placeholder="Ex: DD/MM/AAAA"
          type="datetime"
          options={{ format: 'DD/MM/YYYY' }}
          value={date}
          onChangeText={setDate}
        />

        {/* Campo de edição: Valor Gasto */}
        <Text style={styles.label}>Valor Gasto</Text>
        <TextInputMask
          style={styles.input}
          placeholder="Ex: R$ 100,00"
          type="money"
          options={{
            precision: 2,
            separator: '.',
            delimiter: ',',
            unit: 'R$',
            suffixUnit: '',
          }}
          value={expense}
          onChangeText={setExpense}
        />

        {/* Campo de edição: Observação */}
        <Text style={styles.label}>Observação</Text>
        <TextInput
          style={styles.input}
          placeholder="Observações adicionais"
          onChangeText={setObservation}
          value={observation}
        />

        {/* Botão para salvar a nova tarefa */}
        <TouchableOpacity style={styles.buttonNewTask} onPress={addTask}>
          <Text style={styles.iconButton}>Registrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
