import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import styles from "./Comment.module.css";

export function Comment({content, onDeleteComments}) {
  const [likeCount, setLikeCount]=useState(0);
  function handleDeleteComment() {
    onDeleteComments(content);
  }
  function handleLikeComment() {
    setLikeCount((state) => {
      return state+1
    });
  }
  return (
    <div className={styles.comment}>
      <img src="https://github.com/EliasFMartins.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Elias F. Martins</strong>
              <time
                title="21 de Fereveiro às 13:01"
                dateTime="2023-02-21 13:01:22"
              >
                Cerca de 1h atrás
              </time>
            </div>
              <button onClick={handleDeleteComment} title="Déletar comentário">
                <Trash size={24} />
              </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
