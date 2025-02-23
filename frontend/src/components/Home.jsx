import Lottie from "lottie-react"
import anim from "../animation/home.json"
// import anim1 from "../animation/a1.json"
export const Home = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-content">
          <div className="left-section">
            <button className="revbtn">
              <img id="img2" src="images/l2.jpg" alt="" />Finance
            </button>
            <div className="hero-text">
              <h2 className="dish-title">Smart & Secure</h2>
              <h2 className="dish-title">Finance Management</h2>
              <p className="description">
                Take control of your finances with our powerful tools. Track expenses, manage budgets, and achieve your financial goals.
              </p>

              <a href="/about">
                <button className="reviews-btn">Get Started</button>
              </a>
              <a href="/add">
                <button className="reviews-btn" id="btn1">View Transactions</button>
              </a>
            </div>
          </div>

          {/* Right side: Image */}
          <div className="hero-img">
            <img src="home.jpg" alt="Finance Dashboard" height="540px" width="700px" />
          </div>
        </div>
      </div><hr/>

      {/* Cards Section */}
      <div className="container text-center mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="custom-card">
              <img src="s.jpg" alt="Card 1" className="card-img-top" />
              <div className="card-body">
                <p>Track and monitor your expenses </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="custom-card">
              <img src="f1.jpg" alt="Card 2" className="card-img-top" />
              <div className="card-body">
                <p>Manage your budget efficiently </p>
              </div>
            </div>
          </div>
          

          <div className="col-md-4">
            <div className="custom-card">
              <img src="f2.jpg" alt="Card 3" className="card-img-top" />
              <div className="card-body">
                <p>Secure transactions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="containerdemo">
        <div className="row justify-content-center" style={{ marginTop: "50px" }}>
          <div className="col-md-6 col-lg-5">
            <p style={{ fontSize: "20px", lineHeight: "1.6", textAlign: "justify",  marginTop: "70px" }}>
            Personal finance refers to managing an individual's financial activities, including budgeting, saving, investing, and planning for future financial goals. It involves making informed decisions about income, expenses, debts, and assets to ensure financial stability and security. Key aspects of personal finance include creating a budget to track spending, building an emergency fund, investing in assets like stocks or real estate, and planning for retirement. Effective personal finance management helps individuals achieve financial independence, avoid unnecessary debt, and secure their future through smart money management strategies.
            </p>
          </div>

          <div className="col-md-4 col-lg-5">
            
          <Lottie animationData={anim} loop={true} style={{marginTop: "0px",marginLeft:"20px"}}/>
            </div>
        
        </div>
      </div>

      <div className="containerdemo">
        <div className="row justify-content-center" style={{ marginTop: "50px" }}>
          <div className="col-md-6 col-lg-5">
           
         <img src="ss1.jpg" alt=""style={{height:"400px",width:"400px",marginTop: "30px"}} />
            
          </div>

          <div className="col-md-4 col-lg-5">
            <p style={{ fontSize: "20px", lineHeight: "1.6", textAlign: "justify", marginTop: "50px" }}>
            Personal finance is an essential aspect of managing one’s financial well-being, encompassing budgeting, saving, investing, and debt management. It involves making informed decisions about income and expenses to ensure financial stability and long-term security. By setting financial goals, tracking spending, and creating an emergency fund, individuals can build a strong financial foundation. Smart investment strategies, such as stocks, mutual funds, or retirement plans, help grow wealth over time. Just like a well-balanced meal.
            </p>
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
