export default function Question(props) {
  console.log(props.question);
  return (
    <div className="question-container">
      <h2 className="question">How would one say goodbye in Spanish?</h2>
      <div className="answer-container">
        <button className="answer selected">Adios</button>
        <button className="answer">Hola</button>
        <button className="answer">Au Revoir</button>
        <button className="answer">Salir</button>
      </div>
      <div className="line" />
    </div>
  );
}
