/* JS - Navbar */
import React from 'react';
import './Navbar.css';
import 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js';
import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js';

function NavbarHeader(){
    return(
        <div className="navbar-header">
                <a className="navbar-brand" href="#">Primăria<b>Iași</b></a>
                <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
                    <span className="navbar-toggler-icon"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
            </div>
    )
}
function MainNavBar(){
    return(
       <ul className="nav navbar-nav">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li className="dropdown">
                <a data-toggle="dropdown" class="dropdown-toggle" href="#">Services <b className="caret"></b></a>
                <ul className="dropdown-menu">
                    <li><a href="#">Web Design</a></li>
                    <li><a href="#">Web Development</a></li>
                    <li><a href="#">Graphic Design</a></li>
                    <li><a href="#">Digital Marketing</a></li>
                </ul>
            </li>
            <li><a href="#">Portfolio</a></li>
            <li className="active"><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    )
}

function Profile(){
    return(
        <div className="navbar-nav ml-auto navbar-expand-md">
            <a href="#" className="nav-item nav-link notifications"><i className="fa fa-bell-o"></i><span className="badge">1</span></a>
            <a href="#" className="nav-item nav-link messages"><i className="fa fa-envelope-o"></i><span className="badge">10</span></a>
            <div className="nav-item dropdown">
                <a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle user-action"><img src="../Images/MaleAvatar.svg" className="avatar" alt="Avatar"/> <b className="caret">Name</b></a>
                <div className="dropdown-menu">
                    <a href="#" className="dropdown-item"><i className="fa fa-user-o"></i> Profile</a>
                    <a href="#" className="dropdown-item"><i className="fa fa-calendar-o"></i> Calendar</a>
                    <a href="#" className="dropdown-item"><i className="fa fa-sliders"></i> Settings</a>
                    <div className="dropdown-divider"></div>
                    <a href="#" className="dropdown-item"><i className="material-icons">&#xE8AC;</i> Logout</a>
                </div>
            </div>
        </div>
    )
}
function SecondNavBar(){
    return(
        <ul className="nav navbar-nav navbar-right">
            <li className="navbar-form-wrapper">
                <form className="navbar-form form-inline navbar-right">
                    <div className="input-group search-box">
                        <input type="text" id="search" className="form-control" placeholder="Search Here..." />
                        <span className="input-group-addon"><i className="material-icons">&#xE8B6;</i></span>
                    </div>
                </form>
            </li>          
            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
            <li><a href="#"><i className="fa fa-instagram"></i></a></li>   
            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>   
            <li><Profile/></li>
        </ul>
    );
}
function Navbar() {
    return (
        <nav className="navbar navbar-default navbar-expand-lg navbar-light">
            <NavbarHeader/>
            <div id="navbarCollapse" className="collapse navbar-collapse">
                <MainNavBar/>
                <SecondNavBar/>
            </div>
        </nav>
    )
}

export default Navbar;