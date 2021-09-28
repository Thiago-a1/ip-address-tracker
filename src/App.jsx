import { IpProvider } from "./context/IpContext";

import GlobalStyle from "./styles/global";

import DashBoard from './components/Dashboard';
import Map from './components/Map';

function App() {
  return (
    <IpProvider>
      <div className="App" >
        <GlobalStyle />
        <DashBoard />
        <Map />
      </div>
    </IpProvider>
  );
}

export default App;
