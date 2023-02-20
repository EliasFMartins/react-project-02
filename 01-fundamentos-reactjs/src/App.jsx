import { Header } from "./components/Header";
import {Post} from "./Post";
import styles from './App.module.css'
import './global.css';
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
    <Header/>
    <div className={styles.wrapper} >
    <Sidebar/>
    <main>
    <Post 
        author='joao'
        content = 'E Legal e.e'
      />
    </main>
    </div>
    </div>
  );
}
