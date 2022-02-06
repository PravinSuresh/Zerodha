import './App.css';
import Header from './components/Header/Header';
import Table from './components/Table/Table';
import {StocksData, HeaderRows, FooterRows} from './data';

function App() {
  return (
    <div>
      <Header count={12} />
      <Table headerData={HeaderRows} mainData={StocksData} footerData={FooterRows} />
    </div>
  );
}

export default App;
