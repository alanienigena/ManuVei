/**
 * Componente de edição de detalhes de uma tarefa de manutenção.
 * Permite editar os campos da tarefa, como descrição, data, modelo, marca, observação, valor gasto e status de conclusão.
 * Os dados da tarefa são recuperados da rota passada por parâmetro.
 * Os dados editados são salvos no banco de dados e a navegação é redirecionada para a tela principal de manutenções.
 */
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch } from 'react-native';
import database from '../../config/firebase';
import styles from './style';
import { TextInputMask } from 'react-native-masked-text';

export default function Details({ navigation, route }) {
  // Estado para armazenar os valores editados dos campos
  const [descriptionEdit, setDescriptionEdit] = useState(route.params.description);
  const [dateEdit, setDateEdit] = useState(route.params.date);
  const [modelEdit, setModelEdit] = useState(route.params.model);
  const [brandEdit, setBrandEdit] = useState(route.params.brand);
  const [observationEdit, setObservationEdit] = useState(route.params.observation);
  const [expenseEdit, setExpenseEdit] = useState(route.params.expense);
  const [isCompleted, setIsCompleted] = useState(route.params.isCompleted);

  const idTask = route.params.id;

  // Função para salvar os dados editados no banco de dados
  function editTask(description, date, model, brand, observation, expense, isCompleted, id) {
    console.log("Valor de isCompleted:", isCompleted); // Adicione esta linha para depurar o valor

    // Atualiza os campos da tarefa no banco de dados
    database.collection('Tasks').doc(id).update({
      description: description,
      date: date,
      model: model,
      brand: brand,
      observation: observation,
      expense: expense,
      isCompleted: isCompleted,
    });
    
    // Navega para a tela principal de manutenções
    navigation.navigate('ManuVei');
  }

  return (
    <View style={styles.container}>
      {/* Campo de edição: Descrição */}
      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Troca de Óleo, Revisão, etc..."
        onChangeText={setDescriptionEdit}
        value={descriptionEdit}
      />

      {/* Campo de edição: Data */}
      <Text style={styles.label}>Data</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: DD/MM/AAAA"
        onChangeText={setDateEdit}
        value={dateEdit}
      />

      {/* Campo de edição: Modelo */}
      <Text style={styles.label}>Modelo</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Sedan, Hatch, SUV"
        onChangeText={setModelEdit}
        value={modelEdit}
      />

      {/* Campo de edição: Marca */}
      <Text style={styles.label}>Marca</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Toyota, Honda, Ford"
        onChangeText={setBrandEdit}
        value={brandEdit}
      />

      {/* Campo de edição: Observação */}
      <Text style={styles.label}>Observação</Text>
      <TextInput
        style={styles.input}
        placeholder="Observações adicionais"
        onChangeText={setObservationEdit}
        value={observationEdit}
      />

            {/* Campo de edição: Valor Gasto */}
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

      {/* Campo de edição: Status de Conclusão */}
      <View style={styles.checkboxContainer}>
        <Text style={styles.checkboxLabel}>Manutenção Realizada</Text>
        <Switch
          value={isCompleted}
          onValueChange={(value) => setIsCompleted(value)}
        />
      </View>

      {/* Botão para salvar as edições */}
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

