import React from "react";
import { Progress } from "antd";

const Analytics = ({ transactions }) => {
  
  // Categories
  const categories = ["food", "clothes", "movie", "project", "medical", "bills"];

  // Total Transactions
  const totalTransaction = transactions.length;
  const totalIncomeTransaction = transactions.filter((transaction) => transaction.type === "income");
  const totalExpenseTransaction = transactions.filter((transaction) => transaction.type === "expenses");

  const totalIncomePercent = totalTransaction > 0 ? (totalIncomeTransaction.length / totalTransaction) * 100 : 0;
  const totalExpensePercent = totalTransaction > 0 ? (totalExpenseTransaction.length / totalTransaction) * 100 : 0;

  // Total Turnover
  const totalTurnover = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
  const totalIncomeTurnover = totalIncomeTransaction.reduce((acc, transaction) => acc + transaction.amount, 0);
  const totalExpenseTurnover = totalExpenseTransaction.reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalIncomeTurnoverPercent = totalTurnover > 0 ? (totalIncomeTurnover / totalTurnover) * 100 : 0;
  const totalExpenseTurnoverPercent = totalTurnover > 0 ? (totalExpenseTurnover / totalTurnover) * 100 : 0;

  return (
    <>
      <div className="row mt-5">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <p>Total Transactions: {totalTransaction}</p>
            </div>
            <div className="card-body">
              <h5 className="text-success">Income: {totalIncomeTransaction.length} </h5>
              <h5 className="text-danger">Expense: {totalExpenseTransaction.length} </h5>
              <div>
                <Progress type="circle" strokeColor={"green"} className="mx-2" percent={Math.round(totalIncomePercent)} />
                <Progress type="circle" strokeColor={"red"} className="mx-2" percent={Math.round(totalExpensePercent)} />
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <p>Total TurnOver: {totalTurnover}</p>
            </div>
            <div className="card-body">
              <h5 className="text-success">Income: {totalIncomeTurnover} </h5>
              <h5 className="text-danger">Expense: {totalExpenseTurnover} </h5>
              <div>
                <Progress type="circle" strokeColor={"green"} className="mx-2" percent={Math.round(totalIncomeTurnoverPercent)} />
                <Progress type="circle" strokeColor={"red"} className="mx-2" percent={Math.round(totalExpenseTurnoverPercent)} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category-wise Income */}
      <div className="row mt-3">
        <div className="col-md-4">
          <h4>Category-Wise Income</h4>
          {categories.map((category) => {
            const amount = transactions
              .filter((transaction) => transaction.type === "income" && transaction.category === category)
              .reduce((acc, transaction) => acc + transaction.amount, 0);

            const percent = totalIncomeTurnover > 0 ? Math.round((amount / totalIncomeTurnover) * 100) : 0;

            return (
              amount > 0 && (
                <div className="card" key={category}>
                  <div className="card-body">
                    <h5>{category}</h5>
                    <Progress percent={percent} />
                  </div>
                </div>
              )
            );
          })}
        </div>

        {/* Category-wise Expense */}
        <div className="col-md-4">
  <h4>Category-Wise Expense</h4>
  {categories.map((category) => {
    // Filter & Sum the Expense Amounts for this Category
    const amount = transactions
      .filter((transaction) => transaction.type === "expenses" && transaction.category === category)
      .reduce((acc, transaction) => acc + Number(transaction.amount), 0);  // Ensure amount is a number

    // Calculate the Percentage (Avoid Division by Zero)
    const percent = totalExpenseTurnover > 0 ? Math.round((amount / totalExpenseTurnover) * 100) : 0;
            return (
              amount > 0 && (
                <div className="card" key={category}>
                  <div className="card-body">
                    <h5>{category}</h5>
                    <Progress percent={percent} />
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Analytics;
