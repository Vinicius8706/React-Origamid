import React from "react";
import { COMMENT_POST } from "../../api";
import { ReactComponent as Enviar } from "../../Assets/enviar.svg";
import useFetch from "../../Hooks/useFetch";
const PhotoCommentsForm = ({ id , setComments}) => {
  const {request, error}= useFetch()
  const [comment, setComment] = React.useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const {url,options} = COMMENT_POST(id, {comment});
    const {response, json} = await request(url,options)
    if(response.ok) {
      setComment('')
      setComments((comments)=> [...comments, json])
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <textarea
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button>
        <Enviar />
      </button>
    </form>
  );
};

export default PhotoCommentsForm;
