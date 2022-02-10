import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
    const [activeNav, setPage] = useState<string>('');
    const handleNav = (updateNav: string) => setPage(updateNav);
    return <div className='container'>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item" >
                                        <Link className={activeNav === '' ? 'nav-link active' : 'nav-link'} aria-current="page" to="/" onClick={() =>handleNav('')}>Charecters</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={activeNav === 'locations' ? 'nav-link active' : 'nav-link'} to="/locations" onClick={() =>handleNav('locations')}>Locations</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={activeNav === 'episodes' ? 'nav-link active' : 'nav-link'} to="/episodes" onClick={() =>handleNav('episodes')}>Episodes</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        </nav>
                </div>;
}

export default Navbar