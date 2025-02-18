import { NavLink } from "react-router-dom"


const NavBar = () => {
    return (
        <div className="Navbar">
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink to={'/'} className="navbar-brand">Navbar</NavLink>
                    <form className="d-flex" role="search">
                        <NavLink to='/'><button className="btn btn-outline-success me-2" type="button">Home</button></NavLink>
                        <NavLink to='/bookedcars'><button className="btn btn-outline-success me-2" type="button">Booked Cars</button></NavLink>
                        <NavLink to='/booking'><button className="btn btn-outline-success me-2" type="button">Booking</button></NavLink>
                        <NavLink to='/login'><button className="btn btn-outline-success me-2" type="button">Login</button></NavLink>

                    </form>
                </div>
            </nav>
        </div>
    )
}

export default NavBar