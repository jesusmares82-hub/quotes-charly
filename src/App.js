import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Quote from "./Quote";
import CreateQuote from "./CreateQuote";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [idEditQuote, setIdEditQuote] = useState(null);
  const [idDeleteQuote, setIdDeleteQuote] = useState(null);

  useEffect(() => {
    axios.get("http://prof-quotes.herokuapp.com/api/quotes").then((res) => {
      setQuotes(res.data.quotes);
    });
  }, []);

  useEffect(() => {
    if (idDeleteQuote) {
      axios
        .delete(`http://prof-quotes.herokuapp.com/api/quotes/${idDeleteQuote}`)
        .then((res) => {
          setQuotes((prevState) =>
            prevState.filter((value) => value._id !== idDeleteQuote)
          );
        });
    }
  }, [idDeleteQuote]);

  const handleDeleteQuote = (id) => {
    setIdDeleteQuote(id);
  };

  const handleEditQuote = (id) => {
    setIdEditQuote(id);
  };

  const arrQuotes = quotes.map((value) => (
    <Quote
      key={value._id}
      id={value._id}
      quote={value.quote}
      clase={value.class}
      onDeleteQuote={handleDeleteQuote}
      onEditQuote={handleEditQuote}
    />
  ));

  return (
    <div className="App">
      <CreateQuote />
      <div className="gallery"> {arrQuotes}</div>
    </div>
  );
}

export default App;
