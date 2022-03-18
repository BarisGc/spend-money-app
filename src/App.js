import './App.css';
import { Container } from 'react-bootstrap'

import Header from './components/Header';
import List from './components/List';
import Receipt from './components/Receipt';

function App() {
  return (
    <Container className="App" fluid="md">
      <Header />
      <List />
      <Receipt />
    </Container>
  );
}

export default App;
