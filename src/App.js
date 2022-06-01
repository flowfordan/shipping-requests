import { Homepage } from './pages/Homepage/Homepage';
import { PageHeader } from 'antd';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>

      <div className={styles.header}>
        <PageHeader
        className="site-page-header"
        title="Shipping Requests Page"
        subTitle="React + Redux + AntDesign"
      />
      </div>
      
      <div className={styles.body}>
        <Homepage />
      </div>

      <div className={styles.footer}>
        Footer
      </div>
      

    

      
    </div>
  );
}

export default App;
