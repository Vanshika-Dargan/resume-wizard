import './App.css';

import ResponsiveAppBar from './Components/Appbar';
import LoginForm from './Components/LoginForm';
import Form from './Components/Form/Form';
import Resume from './Components/Form/Resume';
function App() {
  return (
    <div className="App">
        <ResponsiveAppBar />
        {/* <LoginForm/> */}
        {/* <Form/> */}
        <Resume/>
        </div>
  );
}

export default App;
