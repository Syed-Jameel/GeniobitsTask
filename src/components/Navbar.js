import GridViewIcon from '@mui/icons-material/GridView';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessIcon from '@mui/icons-material/Business';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import Badge from '@mui/material/Badge';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import { Link } from 'react-router-dom';


export function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "whitesmoke", boxShadow: "0 3px 8px 1px #DEE1E3" }}>
        <div className="container-fluid">
          <a className="navbar-brand">
            <button className="btn btn-light" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
              <div>{<MenuIcon />}</div>
            </button>
            <img src="logo.png" width="50%" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="badge rounded-circle m-2 p-2 text-dark" style={{ backgroundColor: "#DEE1E3" }}>
                  <Badge badgeContent={4} color="primary">
                    <CircleNotificationsIcon color="action" />
                  </Badge>
                </a>
              </li>
              <li className="nav-item">
                <a className="badge rounded-circle m-2 p-2 text-dark" style={{ backgroundColor: "#DEE1E3" }}>
                  <span className="">{<AccountCircleIcon />}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className='Menu-buttons'>
            <ul>
              <li className='pb-4'> 
                <Link style={{ textDecoration: "none" }} to="myapp">
                <button className="btn btn-light w-100 d-flex justify-content-between">
                  <span className='text-secondary' ><span className='pe-4 text-danger'>{<GridViewIcon />}</span>My Apps</span>
                </button>
                </Link>
              </li>
              <li className='pb-4'>
                <button className="btn btn-light w-100 d-flex justify-content-between ">
                <span className='text-secondary'><span className='pe-4 text-danger'>{<SupervisorAccountIcon />}</span>Resources</span>
                </button>
              </li>
              <li className='pb-4'>
                <button className="btn btn-light w-100 d-flex justify-content-between  ">
                <span className='text-secondary'><span className='pe-4 text-danger'>{<BusinessIcon />}</span>My Organisation</span>
                </button>
              </li>
              <li className='pb-4'>
                <button className="btn btn-light w-100 d-flex justify-content-between ">
                <span className='text-secondary'><span className='pe-4 text-danger'>{<SettingsIcon />}</span>Setting</span>
                </button>
              </li>
              <li className='pb-4'>
              <Link style={{ textDecoration: "none" }} to="/GeniobitsTask">
                <button className="btn btn-light w-100 d-flex justify-content-between" >
                <span className='text-secondary'><span className='pe-4 text-danger'>{<LogoutIcon />}</span>Signup</span>
                </button>
              </Link>  
              </li>
              <li className='pb-4'>
              <Link style={{ textDecoration: "none" }} to="login">
                <button className="btn btn-light w-100 d-flex justify-content-between" >
                <span className='text-secondary'><span className='pe-4 text-danger'>{<LogoutIcon />}</span>Login</span>
                </button>
              </Link>  
              </li>
              <li className='pb-4'>
              <Link style={{ textDecoration: "none" }} to="/GeniobitsTask">
                <button className="btn btn-light w-100 d-flex justify-content-between">
                <span className='text-secondary'><span className='pe-4 text-danger'>{<LogoutIcon />}</span>Logout</span>
                </button>
              </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>

  );
}
