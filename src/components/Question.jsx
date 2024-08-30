import { useState } from "react";
import { arrowdown, arrowup } from "../helper/icons";

function Question({ id, question, answer }) {
  const [show, setShow] = useState(false);
  return (
    <div className="question">
      <div className="ques">
        <span>
          {id}.{question}
        </span>
        <span onClick={() => setShow(!show)}>{show ? arrowup : arrowdown}</span>
      </div>
      <div className="answer">{show && answer}</div>
    </div>
  );
}

export default Question;
