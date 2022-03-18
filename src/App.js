import './App.css';
import { Container } from 'react-bootstrap'

import Header from './components/Header';
import BudgetBar from './components/BudgetBar';
import List from './components/List';
import Receipt from './components/Receipt';

function App() {
  return (
    <Container className="App px-5" fluid="md">
      <Header />
      <BudgetBar />
      <List />
      <Receipt />
    </Container>
  );
}

export default App;
