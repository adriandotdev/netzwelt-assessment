import { NavLink } from "react-router-dom";

function Error() {
    return (
        <main className="error-page container-fluid d-flex justify-content-center align-items-center flex-column">
            <h1 className="text-center">404: The requested page could not be found.</h1>
            <NavLink to="/" className="btn btn-primary mt-3">Go Back</NavLink>
        </main>
    )
}

export default Error