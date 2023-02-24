import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

//author {avatar_url, name, office }
// publishedAt: Date;
// Content: string

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/EliasFMartins.png",
      name: "Elias F. Martins",
      role: "Estudante Estacio-SA",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fizcom nlw Return, evento da Rocketseat. O nome do projeto é DoctorCare",
      },
      { type: "link", content: "👉Projeto.desing/doctorcare," },
    ],
    publishedAt: new Date('2023-02-21 20:30:30'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/annie-n3.png",
      name: "Annie",
      role: "Educator",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fizcom nlw Return, evento da Rocketseat. O nome do projeto é DoctorCare",
      },
      { type: "link", content: "👉Projeto.desing/doctorcare," },
    ],
    publishedAt: new Date('2023-05-21 20:30:30'),
  },
];

// interação
export function App(props) {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
        {posts.map(post =>{
         return (
          <Post
          key={post.id}
          author={post.author}
          content={post.content}
          publishedAt={post.publishedAt}
         />)
        })}
        </main>
      </div>
    </div>
  );
}
