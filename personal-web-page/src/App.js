import "./App.scss";

function App() {
  return (
    <div className="container flex flex-col justify-content-center border border-dark w-full">
      <h1 className="flex justify-content-center border border-dark">
        Hello World!
      </h1>
      <div className="container flex border border-dark justify-content-center w-full">
        <img
          className="profile-circle-img"
          src={require("./images/brfeltz.jpg")}
          alt="brfeltz"
        />
      </div>
      <a href="/" class="arrow-container">
        <div class="arrow"></div>
        <div class="arrow"></div>
        <div class="arrow"></div>
      </a>
    </div>
  );
}

export default App;
