import logo from './logo.svg';
import Notification from './components/Notification';
import something from'./api/index';
import MyConnectionsProvider from './ContextProviders/MyConnectionsProvider';
import Cart from './components/Cart';

function App() {
  return (
    <MyConnectionsProvider>
      <div className="App">
        <Notification />
        <Cart/>
      </div>
      </MyConnectionsProvider>
  );
}

export default App;
