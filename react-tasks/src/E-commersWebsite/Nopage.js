import { Link } from "react-router-dom"

const Nopage = () => {
    return (
        <div>
            <h1>Page Not found</h1>
            <Link to={'/'}>Goto home</Link>
        </div>
    )
}

export default Nopage