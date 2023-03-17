import './App.css';

import ResponsiveAppBar from './Components/Appbar';
import LoginForm from './Components/LoginForm';
function App() {
  return (
    <div className="App">
        <ResponsiveAppBar />
        <LoginForm/>
    </div>
  );
}

export default App;
