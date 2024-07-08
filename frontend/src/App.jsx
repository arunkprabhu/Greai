import "./main.scss";
import MainContainer from "./components/MainContainer";
import { Provider } from "react-redux";
import { store } from "./services/redux/store";

function App() {
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );
}

export default App;
