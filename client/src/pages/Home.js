import "../css/Home.css";

export const Home = () => {
  return (
    <div>
      <nav class="clearfix">
        <h2 class="heading">Welcome</h2>
        <div id="btncontainer">
          <a href="/login" id="login" class="btn">
            login
          </a>
          <a href="/register" id="register" class="btn">
            Register
          </a>
        </div>
      </nav>
    </div>
  );
};
