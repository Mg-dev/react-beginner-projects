import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container-fluid d-block">
            <Link to="/"><span class="navbar-brand text-white">Logo</span></Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse float-end" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <Link class="navbar-brand" to="/"><small className="text-light fs-8" style={{fontSize: '14px'}}>Home</small></Link>
                </li>
                <li class="nav-item">
                <Link class="navbar-brand" to="/tma-app"><small className="text-light" style={{fontSize: '14px'}}>Team Member Allocation App</small></Link>
                </li>
                
            </ul>
            </div>
        </div>
        </nav>
    )
}

export default Navbar;