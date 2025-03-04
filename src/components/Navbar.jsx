import '../styles/navbar.scss';

export default function Navbar({search, setSearch}) {
    return (
        <div className="navbar">
            <div className="title">
            <h2>Search Your Movie</h2>
            </div>
            <div className="search">
            <input 
                type="movies title" 
                placeholder='movies title'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button>Search</button>
            </div>
        </div>
    )
}