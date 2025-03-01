import React, { useState, useEffect } from "react";
import Spinner from "./Spinner.jsx";
import { useAuth } from "../store/auth.jsx";
import { Table, Button, Select, DatePicker, Space } from "antd";
import { UnorderedListOutlined, AreaChartOutlined } from "@ant-design/icons";
import Analytics from "./Analytics.jsx";
import { toast } from "react-toastify";
import dayjs from "dayjs"; // For date manipulation

const { Option } = Select;
const { RangePicker } = DatePicker;

const Add = () => {
  const [formData, setFormData] = useState({
    amount: "",
    type: "income",
    category: "food",
    date: "",
    reference: "",
    description: "",
  });

  const [transactions, setTransactions] = useState([]);
  const { token, user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [viewData, setViewData] = useState("table");
  const [editTransaction, setEditTransaction] = useState(null);
  const [filters, setFilters] = useState({
    day: null,
    month: null,
    year: null,
    category: null,
    dateRange: null,
  });

  // Fetch all transactions
  const getAllTransactions = async () => {
    try {
      setLoading(true);
      if (!user) return;

      const response = await fetch("http://localhost:3000/gettran", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      });

      setLoading(false);
      if (response.ok) {
        const data = await response.json();
        setTransactions(data.transactions);
      } else {
        toast.error("Failed to fetch Transaction.");
      }
    } catch (error) {
      setLoading(false);
      console.log("Error fetching transactions:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    if (user) {
      getAllTransactions();
    }
  }, [user]);

  // Handle Input Changes for the form
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Add or Update Submission
  const handleSubmit = async () => {
    try {
      setLoading(true);
      const url = editTransaction
        ? `http://localhost:3000/updatetran/${editTransaction}`
        : "http://localhost:3000/addtran";

      const method = editTransaction ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(formData),
      });

      setLoading(false);

      if (response.ok) {
        toast.success(editTransaction ? "Transaction updated successfully!" : "Transaction added successfully!");
        await getAllTransactions();
        setFormData({ amount: "", type: "income", category: "food", date: "", reference: "", description: "" });
        setEditTransaction(null);
        document.getElementById("addModalClose").click(); // Close modal
      } else {
        alert("Error saving transaction");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  // Handle Delete Transaction
  const handleDelete = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:3000/deletetran/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      });
      setLoading(false);
      if (response.ok) {
        toast.success("Transaction Deleted Successfully");
        getAllTransactions(); // Refresh transaction list
      } else {
        toast.error("Error Deleting Transaction.");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error deleting transaction:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  // Handle Filter Changes
  const handleFilterChange = (name, value) => {
    setFilters({ ...filters, [name]: value });
  };

  // Clear All Filters
  const clearFilters = () => {
    setFilters({
      day: null,
      month: null,
      year: null,
      category: null,
      dateRange: null,
    });
  };

  // Apply Filters to Transactions
  const applyFilters = () => {
    let filteredTransactions = [...transactions];

    if (filters.day) {
      filteredTransactions = filteredTransactions.filter(
        (t) => dayjs(t.date).date() === filters.day
      );
    }

    if (filters.month) {
      filteredTransactions = filteredTransactions.filter(
        (t) => dayjs(t.date).month() + 1 === filters.month
      );
    }

    if (filters.year) {
      filteredTransactions = filteredTransactions.filter(
        (t) => dayjs(t.date).year() === filters.year
      );
    }

    if (filters.category) {
      filteredTransactions = filteredTransactions.filter(
        (t) => t.category === filters.category
      );
    }

    if (filters.dateRange) {
      const [startDate, endDate] = filters.dateRange;
      filteredTransactions = filteredTransactions.filter(
        (t) =>
          dayjs(t.date).isAfter(startDate, "day") &&
          dayjs(t.date).isBefore(endDate, "day")
      );
    }

    return filteredTransactions;
  };

  const filteredTransactions = applyFilters();

  // Open Modal for Add or Edit
  const openModal = (transaction = null) => {
    if (transaction) {
      setFormData(transaction); // Set data for editing
      setEditTransaction(transaction._id); // Save transaction ID
    } else {
      setFormData({
        amount: "",
        type: "income",
        category: "food",
        date: "",
        reference: "",
        description: "",
      });
      setEditTransaction(null); // Reset edit state
    }
    const modal = new window.bootstrap.Modal(document.getElementById("addModal"));
    modal.show();
  };

  // Table Columns
  const columns = [
    { title: "Date", dataIndex: "date", key: "date" },
    { title: "Amount", dataIndex: "amount", key: "amount" },
    { title: "Type", dataIndex: "type", key: "type" },
    { title: "Category", dataIndex: "category", key: "category" },
    { title: "Reference", dataIndex: "reference", key: "reference" },
    { title: "Description", dataIndex: "description", key: "description" },
    {
      title: "Actions",
      key: "actions",
      render: (record) => (
        <>
          <Button className="me-2" onClick={() => openModal(record)}>Edit</Button>
          <Button className="me-2" onClick={() => handleDelete(record._id)} danger>Delete</Button>
        </>
      ),
    },
  ];

  return (
    <>
      <div className="filter">
        {loading && <Spinner />}
        <div className="filter-controls">
          <Space>
            <Select
              placeholder="Select Day"
              value={filters.day}
              onChange={(value) => handleFilterChange("day", value)}
              style={{ width: 120 }}
            >
              {Array.from({ length: 31 }, (_, i) => (
                <Option key={i + 1} value={i + 1}>{i + 1}</Option>
              ))}
            </Select>

            <Select
              placeholder="Select Month"
              value={filters.month}
              onChange={(value) => handleFilterChange("month", value)}
              style={{ width: 120 }}
            >
              {Array.from({ length: 12 }, (_, i) => (
                <Option key={i + 1} value={i + 1}>{i + 1}</Option>
              ))}
            </Select>

            <Select
              placeholder="Select Year"
              value={filters.year}
              onChange={(value) => handleFilterChange("year", value)}
              style={{ width: 120 }}
            >
              {Array.from({ length: 10 }, (_, i) => (
                <Option key={i} value={new Date().getFullYear() - i}>{new Date().getFullYear() - i}</Option>
              ))}
            </Select>

            <Select
              placeholder="Select Category"
              value={filters.category}
              onChange={(value) => handleFilterChange("category", value)}
              style={{ width: 120 }}
            >
              <Option value="food">Food</Option>
              <Option value="clothes">Clothes</Option>
              <Option value="movie">Movie</Option>
              <Option value="project">Project</Option>
              <Option value="medical">Medical</Option>
              <Option value="bills">Bills</Option>
            </Select>

            <RangePicker
              value={filters.dateRange}
              onChange={(dates) => handleFilterChange("dateRange", dates)}
            />

            <Button onClick={clearFilters}>Clear Filters</Button>

            <div className="switch-icons mx-2">
              <UnorderedListOutlined
                className={`mx-2 ${viewData === "table" ? "active-icon" : "inactive-icon"}`}
                onClick={() => setViewData("table")}   />
              <AreaChartOutlined
                className={`mx-2 ${viewData === "analytics" ? "active-icon" : "inactive-icon"}`}
                onClick={() => setViewData("analytics")}  />
            </div>

            <button type="button" className="btn btn-dark" onClick={() => openModal()} style={{marginLeft:"150px"}}>Add New</button><hr/>
          </Space>
        </div>
      </div>

      <div className="content">
        {viewData === "table" ? (
          <Table columns={columns} dataSource={filteredTransactions} rowKey="_id" />
        ) : (
          <Analytics transactions={filteredTransactions} />
        )}
      </div>

      {/* Bootstrap Modal */}
      <div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addModalLabel">
                {editTransaction ? "Edit Transaction" : "Add Transaction"}
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="addModalClose"></button>
            </div>

            <div className="modal-body">
              <div className="mb-2">
                <p className="mb-1">Amount</p>
                <input type="number" className="form-control" name="amount" placeholder="Enter Amount" value={formData.amount} onChange={handleChange} />
              </div>

              <div className="mb-2">
                <p className="mb-1">Type</p>
                <select className="form-control" name="type" value={formData.type} onChange={handleChange}>
                  <option value="income">Income</option>
                  <option value="expenses">Expenses</option>
                </select>
              </div>

              <div className="mb-2">
                <p className="mb-1">Category</p>
                <select className="form-control" name="category" value={formData.category} onChange={handleChange}>
                  <option value="food">Food</option>
                  <option value="clothes">Clothes</option>
                  <option value="movie">Movie</option>
                  <option value="project">Project</option>
                  <option value="medical">Medical</option>
                  <option value="bills">Bills</option>
                </select>
              </div>

              <div className="mb-2">
                <p className="mb-1">Reference</p>
                <input type="text" className="form-control" name="reference" placeholder="Enter Reference" value={formData.reference} onChange={handleChange} />
              </div>

              <div className="mb-2">
                <p className="mb-1">Description</p>
                <input type="text" className="form-control" name="description" placeholder="Enter Description" value={formData.description} onChange={handleChange} />
              </div>

              <div className="mb-2">
                <p className="mb-1">Date</p>
                <input type="date" className="form-control" name="date" value={formData.date} onChange={handleChange} />
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-dark" onClick={handleSubmit}>{editTransaction ? "Update" : "Save"}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add;