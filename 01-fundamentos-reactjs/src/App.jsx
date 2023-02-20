import { Header } from "./components/Header";
import {Post} from "./Post";
import './styles.css';

export function App() {
  return (
    <div>
    <Header/>
      <Post 
        author='joao'
        content = 'E Legal e.e'
      />
    </div>
  );
}
