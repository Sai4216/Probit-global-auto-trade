// import "../css/Home.css";
// import img from "C:/Users/saiku/Desktop/bg.png";
import img from "../images/bg.png";

export const Home = () => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="text-light">
      <div
      // className=" w-100 h-100 "
      >
        <div className="container-fluid ">
          <div className="row pt-5">
            <div className="col-lg-4 px-5">
              <h2>Wecome</h2>
            </div>
            <div className="col-lg-8  d-flex flex-row-reverse ">
              <a
                type="button"
                className="nav-link active mx-5"
                aria-current="page"
                href="/login"
                id="login">
                Login
              </a>
              <a
                className="nav-link active"
                aria-current="page"
                href="/register"
                id="register">
                Register
              </a>
            </div>
          </div>
        </div>
        <div
          className="px-5 fw-bold"
          style={{ height: "80vh", paddingTop: "150px", fontSize: "20px" }}>
          <p
            style={{
              fontSize: "70px",
            }}>
            Be <span style={{ color: "#03fcfc" }}>Unstoppable</span>
          </p>
          <p>The new era of trading has begun.</p>
        </div>
      </div>
    </div>
  );
};
