import questions from "../helper/data";
import Question from "./Question";

function InterviewAccord() {
  return (
    <div className="interviewAccord">
      {questions.map((ques) => (
        <Question {...ques} />
      ))}
    </div>
  );
}

export default InterviewAccord;
