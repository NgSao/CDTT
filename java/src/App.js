
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Outlet } from "react-router-dom";
import HeaderSlider from './components/home/HeaderSlider';
import HomeHeader from './components/home/HomeHeader';
import Footer from './components/home/Footer';
import BoxChat from './components/home/BoxChat';

import rootReducer from './reducer/Reducer';
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
function App() {

  return (
    <div>
      <Provider store={store}>
        <HeaderSlider />
        <HomeHeader />
        <Outlet />
        <BoxChat />
        <Footer />
      </Provider>


    </div >
  );
}

export default App;