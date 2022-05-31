import { Homepage } from './pages/Homepage/Homepage';
import { PageHeader } from 'antd';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
  <PageHeader
    className="site-page-header"
    title="Shipping Requests Page"
    subTitle="React + Redux + AntDesign"
  />
      <Homepage />
    </div>
  );
}

export default App;
