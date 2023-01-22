import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(() =>
    fetch("http://localhost:4000/questions")
      .then(res => res.json())
      .then(data => setQuestions(data))
    , []

  )
  function handleDelete(id) {
    const newarr = questions.filter((question) => question.id !== id);
    fetch("http://localhost:4000/questions/" + id, { method: "DELETE" })
      .then(res => res.json())
      .then(data => setQuestions(newarr))
  }
  function addItem(newItem) {
    setQuestions([...questions, newItem])
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm addItem={addItem} /> : <QuestionList handleDelete={handleDelete} question={questions} />}
    </main>
  );
}

export default App;
