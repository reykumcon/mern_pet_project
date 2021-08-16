import './App.css';
import { Router } from '@reach/router';
import Main from './views/Main';
import CreatePet from './views/CreatePet';
import Detail from './views/Detail';
import UpdatePet from './views/UpdatePet';

function App() {
  return (
    <div>
      <Router>
        <Main path = '/' />
        <CreatePet path = '/pets/new' />
        <Detail path = '/pets/:id' />
        <UpdatePet path = '/pets/:id/edit'/>
      </Router>
    </div>
  );
}

export default App;
