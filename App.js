import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

const DATA = [
  { id: '1', title: 'Desenvolvedor Front-end', salary: 'R$ 5.000', description: 'Desenvolvimento de interfaces web', contact: 'contato@empresaabc.com' },
  { id: '2', title: 'Analista de Dados', salary: 'R$ 6.500', description: 'Análise e interpretação de dados', contact: 'contato@empresaxyz.com' },
  { id: '3', title: 'Designer UX/UI', salary: 'R$ 4.000', description: 'Criação de interfaces intuitivas', contact: 'contato@empresa123.com' },
  { id: '4', title: 'Engenheiro de Software', salary: 'R$ 7.200', description: 'Desenvolvimento de sistemas', contact: 'contato@empresateste.com' },
  { id: '5', title: 'Gerente de Projetos', salary: 'R$ 9.000', description: 'Gestão de equipes e projetos', contact: 'contato@empresacontrata.com' },
];

const Item = ({ title, company, salary, description, contact }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.company}>{company}</Text>
    <Text style={styles.info}>Salário: {salary}</Text>
    <Text style={styles.info}>Descrição: {description}</Text>
    <Text style={styles.info}>Contato: {contact}</Text>
  </View>
);

export default function App() {
  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      company={item.company}
      salary={item.salary}
      description={item.description}
      contact={item.contact}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Vagas</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'red',
  },
  item: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    marginVertical: 8,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue', // Cor azul para os títulos das vagas
  },
  company: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 5,
  },
  info: {
    fontSize: 14,
    marginBottom: 5,
  },
});
