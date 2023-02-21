import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/EliasFMartins.png"
          />
          <div className={styles.authorInfo}>
            <strong>Elias F. Martins</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="21 de Fereveiro às 13:01" dateTime="2023-02-21 13:01:22">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          com nlw Return, eventoda Rocketseat. O nome do projeto é DoctorCare
        </p>
        <p>
          {" "}
          👉 <a href="#">Projeto.desing/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback aqui!</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
}
