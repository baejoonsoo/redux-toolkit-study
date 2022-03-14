import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { actionCreators } from "../store";

const Detail = ({ toDos, deleteToDo }) => {
  const { id } = useParams();

  const toDo = toDos.find((todo) => todo.id === parseInt(id));

  console.log(toDo);

  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at : {toDo?.id}</h5>
      <button onClick={() => deleteToDo(id)}>DEL</button>
    </>
  );
};

const getStateToProps = (state) => {
  return { toDos: state };
};

const getDispatchToProps = (dispatch) => {
  return {
    deleteToDo: (id) => dispatch(actionCreators.deleteToDo(id)),
  };
};

export default connect(getStateToProps, getDispatchToProps)(Detail);
