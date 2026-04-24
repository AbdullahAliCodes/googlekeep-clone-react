import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-top-container">
      <div className="navbar-top-content">
        <section className="navbar-L">
          <span>i</span>
          <span>L</span>
          <span>Keep</span>
        </section>
        <section className="navbar-M">
          <div className="search-container">
            <span>i</span>
            <div className="search-input">Search</div>
          </div>
          <span>i</span>
          <span>i</span>
          <span>i</span>
        </section>
        <section className="navbar-R">
          <span>i</span>
          <span>i</span>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
