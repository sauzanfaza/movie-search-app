import '../styles/navbar.scss';

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="title">
            <h2>Search Your Movie</h2>
            </div>
            <div className="search">
            <input type="movies title" placeholder='movies title'/>
            <button>Search</button>
            </div>
        </div>
    )
}