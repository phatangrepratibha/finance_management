
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import Lottie from "lottie-react"
import anim1 from "../animation/a2.json"


export const About = () => {

const{user}=useAuth();

  return (
    <>
    <div className="about-us">
  <div className="about-us-container">
    <div className="about-text">
      <h2>About Us</h2><hr/>
     <b> <p>Welcome,{user?`${user.username}!! 
              `:`to our webiste`
                }</p></b>
      <p>
      We are passionate about helping individuals achieve financial freedom and make informed decisions about their money. Whether you're just starting your financial journey or looking to optimize your wealth, we provide valuable insights, tools, and resources tailored to your needs.</p>
      <p>
      We aim to empower you with practical financial knowledge, guiding you toward smart budgeting, saving, investing, and wealth-building strategies. Our goal is to help you gain control over your finances and create a secure future.
      </p>
    </div>
    <div className="about-image">
      <Lottie animationData={anim1} loop={true} style={{width:"500px"}}/>
    </div>
  </div>
</div>

      <section style={{ marginTop: "80px", padding: "40px", backgroundColor: "black", color: "white", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {[
            { number: "500+", label: "Happy Clients" },
            { number: "300+", label: "Projects Delivered" },
            { number: "100+", label: "Team Members" },
            { number: "24/7", label: "Support" },
          ].map((item, index) => (
            <div key={index} style={{ borderRight: index !== 3 ? "2px solid #fff" : "none", padding: "0 20px" }}>
              <h2 style={{ fontSize: "2.5rem", margin: "0" }}>{item.number}</h2>
              <p style={{ fontSize: "1.2rem" }}>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

    
    </>
  );
};



// import React, { useState, useEffect } from "react";
// import Spinner from "./Spinner.jsx";
// import { useAuth } from "../store/auth.jsx";
// import { Select, Table } from "antd";

// const Add = () => {
//   const [formData, setFormData] = useState({
//     amount: "",
//     type: "transaction",
//     category: "food",
//     date: "",
//     reference: "",
//     description: "",
    
//   });

//   const [transactions, setTransactions] = useState([]); // Fix naming to lowercase
//   const { token, user } = useAuth();
//   const [loading, setLoading] = useState(false);
//   const[frequency,setfrequency]=useState("7")

//   const columns=[

//     {
//       title:"Date",
//       dataIndex:"date",
//     },

//     {
//       title:"Amount",
//       dataIndex:"amount"
//     },

//     {
//       title:"Type",
//       dataIndex:"type"
//     },

//     {
//       title:"Category",
//       dataIndex:"category"
//     },

//     {
//       title:"Reference",
//       dataIndex:"reference"
//     },

//     {
//       title:"Description",
//       dataIndex:"description",
//     },
    

//     {
//       title:"Action",
     
//     },


//   ]

//   // Handle Input Changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle Form Submission
//   const handleSubmit = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch("http://localhost:3000/addtran", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(formData),
//       });
//       setLoading(false);

//       if (response.ok) {
//         alert("Transaction added successfully!");
//         await getAllTransactions();
//         setFormData({
//           amount: "",
//           type: "transaction",
//           category: "food",
//           date: "",
//           reference: "",
//           description: "",
          
//         });

//         document.getElementById("addModalClose").click();
//       } else {
//         alert("Error saving transaction");
//       }
//     } catch (error) {
//       setLoading(false);
//       console.error("Error:", error);}
      
   
//   };

//   // Fetch all transactions
//   const getAllTransactions = async () => {
//     try {
//       setLoading(true);
//       if (!user) return;

//       const response = await fetch("http://localhost:3000/gettran", {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ frequency }),
//       });

//       setLoading(false);
//       if (response.ok) {
//         const data = await response.json();
//         setTransactions(data.transactions);
//         console.log("Transaction data:", data.transactions);

//       } else 
//       {
//         console.log("Failed to fetch transactions");
//       }
//     } catch (error) {
//       setLoading(false);
//       console.log("Error fetching transactions:", error);
//     } 
//   };

//   useEffect(() => {
//     if (user) {
//       getAllTransactions();
//     }
//   }, [user,frequency]);

//   return (
//     <>
//       <div className="filter">
//         {loading && <Spinner />}
//         <div>
//           <h6>Select Filters</h6>
//           <Select value={frequency} onChange={(value)=>setfrequency(value)}>
//             <Select.Option value="7">Last 1 Week</Select.Option>
//             <Select.Option value="30">Last 1 Month</Select.Option>
//             <Select.Option value="365">Last 1 Year</Select.Option>
//             <Select.Option value="custom">Custom</Select.Option>
//           </Select>
//         </div>
//         <div>
//           <button className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#addModal">
//             Add New
//           </button>
//         </div>
//         </div>
//         <div className="content">

//         <Table columns={columns} dataSource={transactions}  />;
//         </div>
     

    
  

      {/* Bootstrap Modal */}
//       <div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="addModalLabel">
//                 Add Transaction
//               </h5>
//               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="addModalClose"></button>
//             </div>

//             <div className="modal-body">
//               <div className="mb-2">
//                 <p className="mb-1">Amount</p>
//                 <input type="number" className="form-control" name="amount" placeholder="Enter Amount" value={formData.amount} onChange={handleChange} />
//               </div>

//               {/* Type Selection */}
//               <div className="mb-2">
//                 <p className="mb-1">Type</p>
//                 <select className="form-control" name="type" value={formData.type} onChange={handleChange}>
//                   <option value="transaction">Transaction</option>
//                   <option value="expenses">Expenses</option>
//                 </select>
//               </div>

//               {/* Category Selection */}
//               <div className="mb-2">
//                 <p className="mb-1">Category</p>
//                 <select className="form-control" name="category" value={formData.category} onChange={handleChange}>
//                   <option value="food">Food</option>
//                   <option value="clothes">Clothes</option>
//                   <option value="movie">Movie</option>
//                   <option value="project">Project</option>
//                   <option value="medical">Medical</option>
//                   <option value="bills">Bills</option>
//                 </select>
//               </div>

//               <div className="mb-2">
//                 <p className="mb-1">Reference</p>
//                 <input type="text" className="form-control" name="reference" placeholder="Enter Reference" value={formData.reference} onChange={handleChange} />
//               </div>

//               <div className="mb-2">
//                 <p className="mb-1">Description</p>
//                 <input type="text" className="form-control" name="description" placeholder="Enter Description" value={formData.description} onChange={handleChange} />
//               </div>

//               <div className="mb-2">
//                 <p className="mb-1">Date</p>
//                 <input type="date" className="form-control" name="date" value={formData.date} onChange={handleChange} />
//               </div>
//             </div>

//             <div className="modal-footer">
//               <button type="button" className="btn btn-dark" data-bs-dismiss="modal">
//                 Close
//               </button>
//               <button type="button" className="btn btn-dark" onClick={handleSubmit}>
//                 Save changes
//               </button>
//             </div>
//           </div>
// //         </div>
// //       </div>
//     </>
//   );
// };




//using map table
// import React, { useState, useEffect } from "react";
// import Spinner from "./Spinner.jsx";
// import { useAuth } from "../store/auth.jsx";
// import { UnorderedListOutlined, AreaChartOutlined } from "@ant-design/icons";
// import Analytics from "./Analytics.jsx";

// const Add = () => {
//   const [formData, setFormData] = useState({
//     amount: "",
//     type: "income",
//     category: "food",
//     date: "",
//     reference: "",
//     description: "",
//   });

//   const [transactions, setTransactions] = useState([]);
//   const { token, user } = useAuth();
//   const [loading, setLoading] = useState(false);
//   const [viewData, setViewData] = useState("table");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch("http://localhost:3000/addtran", {
//         method: "POST",
//         headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
//         body: JSON.stringify(formData),
//       });
//       setLoading(false);

//       if (response.ok) {
//         alert("Transaction added successfully!");
//         await getAllTransactions();
//         setFormData({ amount: "", type: "income", category: "food", date: "", reference: "", description: "" });
//       } else {
//         alert("Error saving transaction");
//       }
//     } catch (error) {
//       setLoading(false);
//       console.error("Error:", error);
//     }
//   };

//   const getAllTransactions = async () => {
//     try {
//       setLoading(true);
//       if (!user) return;

//       const response = await fetch("http://localhost:3000/gettran", {
//         method: "POST",
//         headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
//       });

//       setLoading(false);
//       if (response.ok) {
//         const data = await response.json();
//         setTransactions(data.transactions);
//       } else {
//         console.log("Failed to fetch transactions");
//       }
//     } catch (error) {
//       setLoading(false);
//       console.log("Error fetching transactions:", error);
//     }
//   };

//   useEffect(() => {
//     if (user) {
//       getAllTransactions();
//     }
//   }, [user]);

//   return (
//     <>
//       <div className="filter">
//         {loading && <Spinner />}
//         <div className="switch-icons mx-2">
//           <UnorderedListOutlined className={`mx-2 ${viewData === "table" ? "active-icon" : "inactive-icon"}`} onClick={() => setViewData("table")} />
//           <AreaChartOutlined className={`mx-2 ${viewData === "analytics" ? "active-icon" : "inactive-icon"}`} onClick={() => setViewData("analytics")} />
//         </div>
//         <button className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#addModal">
//           Add New
//         </button>
//       </div>

//       <div className="content">
//         {viewData === "table" ? (
//           <table className="table table-bordered mt-3">
//             <thead>
//               <tr>
//                 <th>Date</th>
//                 <th>Amount</th>
//                 <th>Type</th>
//                 <th>Category</th>
//                 <th>Reference</th>
//                 <th>Description</th>
//               </tr>
//             </thead>
//             <tbody>
//               {transactions.length > 0 ? (
//                 transactions.map((transaction) => (
//                   <tr key={transaction._id}>
//                     <td>{transaction.date}</td>
//                     <td>{transaction.amount}</td>
//                     <td>{transaction.type}</td>
//                     <td>{transaction.category}</td>
//                     <td>{transaction.reference}</td>
//                     <td>{transaction.description}</td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="6" className="text-center">No transactions found</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         ) : (
//           <Analytics transactions={transactions} />
//         )}
//       </div>
//     </>
//   );
// };

// export default Add;



 {/* <div>
          <h6>Select Filters</h6>
          <Select value={frequency} onChange={(value) => setFrequency(value)} style={{ width: 150 }}>
            <Select.Option value="7">Last 1 Week</Select.Option>
            <Select.Option value="30">Last 1 Month</Select.Option>
            <Select.Option value="365">Last 1 Year</Select.Option>
            <Select.Option value="custom">Custom</Select.Option>
          </Select>

          {frequency === "custom" && (
            <RangePicker onChange={(dates) => setSelectedDates(dates)} format="YYYY-MM-DD" />
          )}

          <Select value={typeFilter} onChange={(value) => setTypeFilter(value)} style={{ width: 150, marginLeft: 10 }}>
            <Select.Option value="">All Types</Select.Option>
            <Select.Option value="income">Income</Select.Option>
            <Select.Option value="expenses">Expense</Select.Option>
          </Select>

          <Select value={categoryFilter} onChange={(value) => setCategoryFilter(value)} style={{ width: 150, marginLeft: 10 }}>
            <Select.Option value="">All Categories</Select.Option>
            <Select.Option value="food">Food</Select.Option>
            <Select.Option value="clothes">Clothes</Select.Option>
            <Select.Option value="movie">Movie</Select.Option>
            <Select.Option value="project">Project</Select.Option>
            <Select.Option value="medical">Medical</Select.Option>
            <Select.Option value="bills">Bills</Select.Option>
          </Select>
        </div> */}


        