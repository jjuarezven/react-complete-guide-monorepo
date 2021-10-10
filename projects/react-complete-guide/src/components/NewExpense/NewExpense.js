/* eslint-disable react/prop-types */
import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  const [showForm, setShowForm] = useState(false);

  const addExpenseHandler = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <div className="new-expense">
        {!showForm && (
          <button onClick={addExpenseHandler}>Add new expense</button>
        )}
        {showForm && (
          <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={addExpenseHandler}
          />
        )}
      </div>
    </div>
  );
};

export default NewExpense;
