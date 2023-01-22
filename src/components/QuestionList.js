import React from "react";
import QuestionItem from "./QuestionItem"
function QuestionList({ question, handleDelete }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}

        {question.map((item) =>

          <QuestionItem key={item.id} handleDelete={handleDelete} question={item} />)}

      </ul>
    </section>
  );
}

export default QuestionList;
