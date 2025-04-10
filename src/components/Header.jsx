import globe from "../assets/globe.png";

export default function Header() {
  return (
    <header>
      <div className="logo-container">
        <img src={globe} atl="Globe" className="logo-image" />
        <h1>My Travel JournaL</h1>
      </div>
      <nav className="nav-links">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Entries</a></li>
            <li><a href="#">About</a></li>
        </ul>
      </nav>
    </header>
  );
}
