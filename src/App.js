import './styles.css';
import Login from './screen/LoginScreen'
import Home from './screen/HomeScreen'
import { Provider } from "react-redux"
import { store } from "../src/redux/store/store";

function App() {
  return (
    <div>
      <Provider store={store}>
      <Home/>
      </Provider>
    </div>
  );
}

export default App;
