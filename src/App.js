import './App.css';

import ResponsiveAppBar from './Components/Appbar';
import LoginForm from './Components/LoginForm';
import Form from './Components/Form/Form';
function App() {
  return (
    <div className="App">
        <ResponsiveAppBar />
        {/* <LoginForm/> */}
        <Form/>
        </div>
  );
}

export default App;
