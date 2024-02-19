import "./index.css";

const Header = () => {
  console.log("header section");
  return (
    <nav className="navContainer">
      <h1>Manikanta</h1>
      <div className="navElements">
        <p>Home</p>
        <p>about</p>
        <p>skills</p>
        <p>projects</p>
      </div>
      <p>Contact Me</p>
    </nav>
  );
};

export default Header;
