import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container-fluid">
            <Link to="/"><span class="navbar-brand text-white">Logo</span></Link>
            <div>
            <button class="navbar-toggler float-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            </div>
            <div class="collapse navbar-collapse text-center" id="navbarNav">
            <ul class="navbar-nav ms-3">
                <li class="nav-item">
                <Link class="navbar-brand" to="/"><small className="text-light" style={{fontSize: '14px'}}>Home</small></Link>
                </li>
                <li class="nav-item">
                <Link class="navbar-brand" to="/tma-app"><small className="text-light" style={{fontSize: '14px'}}>TeamMember_allocation_App</small></Link>
                </li>
                <li class="nav-item">
                <Link class="navbar-brand" to="/group-team-members  "><small className="text-light" style={{fontSize: '14px'}}>Group_Team_Member</small></Link>
                </li>
                <li class="nav-item">
                <Link class="navbar-brand" to="/env-test  "><small className="text-light" style={{fontSize: '14px'}}>Env Testing</small></Link>
                </li>
                <li class="nav-item">
                <Link class="navbar-brand" to="/snack-shop  "><small className="text-light" style={{fontSize: '14px'}}>Snack</small></Link>
                </li>
            </ul>
            </div>
            
        </div>
        </nav>
    )
}

export default Navbar;