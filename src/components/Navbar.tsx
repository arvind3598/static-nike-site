const Navbar = () => {
  return (
    <nav>
      <div className="logo-container">
        <img src="/images/brand_logo.png" alt="Logo image" />
      </div>
      <div className="actions-btn-container">
        <a href="/">Menu</a>
        <a href="/">Location</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
      </div>
      <div className="login-btn-container">Login</div>
    </nav>
  );
};

export default Navbar;
