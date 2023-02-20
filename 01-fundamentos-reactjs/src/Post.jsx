//props: { author:"", content=""}

export function Post(props) {
  const { author, content } = props;
  return (
    <p>
      {author},{content}
    </p>
  );
}
