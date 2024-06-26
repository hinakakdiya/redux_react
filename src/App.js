import logo from './logo.svg';
import './App.css';
// import { Provider } from 'react-redux';
import ToDo from './components/ToDo.js'
import { Provider } from 'react-redux';
import store from './redux/store.js';




function App() {
  return (
    
    <>
     <Provider store={store}>
      <ToDo />
     </Provider>
     
    </>

  );
}

export default App;
