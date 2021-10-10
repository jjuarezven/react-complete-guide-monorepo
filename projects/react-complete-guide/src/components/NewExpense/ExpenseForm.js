/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const state = {
    title: "",
    amount: 0.01,
    date: ""
  };
  const [userInput, setUserInput] = useState(state);
  /* 
  we can use multiple states or use a single object to track state
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState(""); 
  */

  // we are using a single method to set the value for every input, by setting the name of the input equals to the object
  // key it represents.
  const inputChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    userInput.amount = Number(parseFloat(userInput.amount).toFixed(2));
    userInput.date = new Date(userInput.date + "T00:00:00");
    props.onSaveExpenseData(userInput);
    // We are using two way binding as well, by setting the input value equals to the value of the object key it represents
    setUserInput(state);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            onChange={inputChangeHandler}
            value={userInput.title}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            value={userInput.amount}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            value={userInput.date}
            min="2019-01-01"
            max="2022-12-31"
            onChange={inputChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.OnCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
