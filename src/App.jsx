import { IpProvider } from "./context/IpContext";

import GlobalStyle from "./styles/global";

import DashBoard from './components/Dashboard';

function App() {
  return (
    <IpProvider>
      <div className="App">
        <GlobalStyle />
        <DashBoard />
      </div>
    </IpProvider>
  );
}

export default App;
