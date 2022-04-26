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
            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
            <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
        </ul>
    )
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