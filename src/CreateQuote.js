import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import React from "react";
import axios from "axios";

const CreateQuote = () => {
  const [classOptions, setclassOptions] = useState([]);
  const { register, handleSubmit } = useForm();
  const url = "http://prof-quotes.herokuapp.com/api/quotes/";

  const onSubmit = (data) => {
    axios.post(url, data).then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    axios
      .get("http://prof-quotes.herokuapp.com/api/quotes/options")
      .then((res) => {
        //console.log(res.data);
        setclassOptions(res.data.classOptions);
      });
  }, []);

  const arrOptions = classOptions.map((value) => (
    <option key={value} value={value}>
      {value}
    </option>
  ));

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Quote:
          <input
            type="text"
            name="quote"
            ref={register}
            placeholder="Type quote here..."
          />
        </label>

        <label>
          Class:
          <select name="class" ref={register}>
            {arrOptions}
          </select>
        </label>

        <button>Create Quote</button>
      </form>
    </>
  );
};

export default CreateQuote;
