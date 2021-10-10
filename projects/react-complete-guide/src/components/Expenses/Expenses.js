/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList.js";
import ExpensesChart from "./ExpensesChart.js";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(2021);
  const setFilterYear = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.expenses.filter(
    (x) => filteredYear === x.date.getFullYear()
  );

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter onFilterYear={setFilterYear} selected={filteredYear} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
        {/* using &&
        {filteredExpenses.length === 0 && <p>No expenses found</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => {
            return (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            );
          })} */}

        {/* using ternary operator
        
        {filteredExpenses.length === 0 ? (
          <p>No expenses found</p>
        ) : (
          filteredExpenses.map((expense) => {
            return (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            );
          })
        )} 
        */}
      </Card>
    </>
  );
};

export default Expenses;
