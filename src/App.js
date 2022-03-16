import './App.css';
import { Container } from 'react-bootstrap'

import Header from './components/Header';
import List from './components/List';

function App() {
  return (
    <Container className="App" fluid="md">
      <Header />
      <List />
    </Container>
  );
}

export default App;
