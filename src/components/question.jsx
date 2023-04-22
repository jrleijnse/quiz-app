export default function Question(props) {
  const { question, correct_answer, incorrect_answers } = props.question;

  function correctStrings(string) {
    return string
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
      .replace(/&uuml;/g, "ü")
      .replace(/&amp;/g, "&");
  }

  const incorrectAnswers = incorrect_answers.map((answer) => {
    return <button className="answer">{correctStrings(answer)}</button>;
  });

  const correctAnswer = (
    <button className="answer selected">
      {correctStrings(correct_answer)}
    </button>
  );

  return (
    <div className="question-container">
      <h2 className="question">{correctStrings(question)}</h2>
      <div className="answer-container">
        {[incorrectAnswers, correctAnswer]}
      </div>
      <div className="line" />
    </div>
  );
}
