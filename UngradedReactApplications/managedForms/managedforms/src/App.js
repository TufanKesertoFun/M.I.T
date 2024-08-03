import './App.css';
import { MyManagedForm, SignUp, StatusBar,Welcome } from './components';

function App() {
  return (
    <div className="App">
      <MyManagedForm />
      <SignUp />
      <StatusBar />
      <Welcome />
    </div>
  );
}

export default App;
