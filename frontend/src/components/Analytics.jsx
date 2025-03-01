import React from "react";
import { Progress, Card, Row, Col, Typography } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons"; // Icons for income and expense
import { Bar } from "react-chartjs-2"; // Bar chart for category-wise data
import "chart.js/auto"; // Required for Chart.js

const { Title, Text } = Typography;

const Analytics = ({ transactions }) => {
  // Categories
  const categories = ["food", "clothes", "movie", "project", "medical", "bills"];

  // Total Transactions
  const totalTransaction = transactions.length;
  const totalIncomeTransaction = transactions.filter(
    (transaction) => transaction.type === "income"
  );
  const totalExpenseTransaction = transactions.filter(
    (transaction) => transaction.type === "expenses"
  );

  const totalIncomePercent =
    totalTransaction > 0 ? (totalIncomeTransaction.length / totalTransaction) * 100 : 0;
  const totalExpensePercent =
    totalTransaction > 0 ? (totalExpenseTransaction.length / totalTransaction) * 100 : 0;

  // Total Turnover
  const totalTurnover = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
  const totalIncomeTurnover = totalIncomeTransaction.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );
  const totalExpenseTurnover = totalExpenseTransaction.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );

  const totalIncomeTurnoverPercent =
    totalTurnover > 0 ? (totalIncomeTurnover / totalTurnover) * 100 : 0;
  const totalExpenseTurnoverPercent =
    totalTurnover > 0 ? (totalExpenseTurnover / totalTurnover) * 100 : 0;

  // Category-wise Income Data for Bar Chart
  const incomeCategoryData = {
    labels: categories,
    datasets: [
      {
        label: "Income",
        data: categories.map((category) =>
          transactions
            .filter(
              (transaction) =>
                transaction.type === "income" && transaction.category === category
            )
            .reduce((acc, transaction) => acc + transaction.amount, 0)
        ),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  // Category-wise Expense Data for Bar Chart
  const expenseCategoryData = {
    labels: categories,
    datasets: [
      {
        label: "Expense",
        data: categories.map((category) =>
          transactions
            .filter(
              (transaction) =>
                transaction.type === "expenses" && transaction.category === category
            )
            .reduce((acc, transaction) => acc + transaction.amount, 0)
        ),
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  };

  return (
    <div style={{ padding: "20px"  }}>
      <Row gutter={[16, 16]} >
        {/* Total Transactions */}
        <Col xs={24} md={12} lg={8}>
          <Card className="total" title="Total Transactions" >
          <b> <Text strong>Total: {totalTransaction}</Text>
          <div style={{ marginTop: "10px" ,fontFamily:"sans-serif" }}>
              <Text type="dark">
                <ArrowUpOutlined /> Income: {totalIncomeTransaction.length}
              </Text>
              <br />
              <Text type="danger">
                <ArrowDownOutlined /> Expense: {totalExpenseTransaction.length}
              </Text>
            </div><hr/>
         <center>  <div  className="chart"style={{ marginTop: "20px" }}>
              <Progress
                type="circle"
                strokeColor="green"
                percent={Math.round(totalIncomePercent)} />
              <Progress
                type="circle"
                strokeColor="red"
                percent={Math.round(totalExpensePercent)}
                style={{ marginLeft: "10px" }} />
            </div></center> </b> 
          </Card>
        </Col>

        {/* Total Turnover */}
        <Col xs={24} md={12} lg={8} >
          <Card  className="total1" title="Total Turnover" >
          <b>  <Text strong>Total: {totalTurnover}</Text>
            <div style={{ marginTop: "10px" }}>
              <Text type="dark">
                <ArrowUpOutlined /> Income: {totalIncomeTurnover}
              </Text>
              <br />
              <Text type="danger">
                <ArrowDownOutlined /> Expense: {totalExpenseTurnover}
              </Text>
            </div><hr/>
            <center> <div style={{ marginTop: "20px" }}>
              <Progress
                type="circle"
                strokeColor="green"
                percent={Math.round(totalIncomeTurnoverPercent)}
              />
              <Progress
                type="circle"
                strokeColor="red"
                percent={Math.round(totalExpenseTurnoverPercent)}
                style={{ marginLeft: "10px" }}
              />
            </div></center></b>
          </Card>
        </Col>
      </Row>

      <hr className="line"/>

      {/* Category-wise Income and Expense */}
      <Row gutter={[16, 16]} style={{ marginTop: "20px"  }}>
        <Col xs={24} md={12}>
          <Card title="Category-Wise Income" >
            <Bar data={incomeCategoryData} />
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="Category-Wise Expense" >
            <Bar data={expenseCategoryData} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Analytics;