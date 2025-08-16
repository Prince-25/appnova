"use client";

import Image from "next/image";
import React from "react";
import darkLogo from "../../assets/images/logo-dark.png";

import { Container, Nav, Navbar } from "react-bootstrap";

function Header() {
  const navItems = [
    { link:"about",name: "About Us", hasDropdown: false },
    { link:"protfolio",name: "Our Work", hasDropdown: false },
    { link:"services", name: "Services", hasDropdown: false },
    { link:'careers', name: "Careers", hasDropdown: false },
    { link:'faq', name: "FAQ", hasDropdown: false },
    { link:"contactUs",name: "Contact Us", hasDropdown: false },
  ];
  return (
    //    <div className="app-top-position app-fixed">
    //             <div className="app-top-panel app-animated app-top-panel-transparent">

    //                 <div className="container">
    //                     <a href="home-1.html" className="app-logo" style="width: 140px"></a>
    //                     <div className="app-navigation">
    //                         <nav>
    //                             <ul>
    //                                 <li className="app-has-children">
    //                                     <a href="#.">Enterprise</a>
    //                                     <ul>
    //                                         <li><a href="home-2.html">Home V2</a></li>
    //                                         <li><a href="about.html">About us</a></li>
    //                                         <li><a href="team.html">Team</a></li>
    //                                         <li><a href="team-single.html">Team Member</a></li>
    //                                         <li><a href="careers.html">Careers</a></li>
    //                                         <li><a href="prices.html">Prices</a></li>
    //                                         <li><a href="faq.html">FAQ</a></li>
    //                                         <li><a href="event.html">Event</a></li>
    //                                     </ul>
    //                                 </li>
    //                                 <li><a href="portfolio.html">Case Studies</a></li>
    //                                 <li className="app-has-children">
    //                                     <a href="#.">Services</a>
    //                                     <ul>
    //                                         <li><a href="service-1.html">Service 1</a></li>
    //                                         <li><a href="service-2.html">Service 2</a></li>
    //                                         <li><a href="service-3.html">Service 3</a></li>
    //                                         <li><a href="service-4.html">Service 4</a></li>
    //                                     </ul>
    //                                 </li>
    //                                 <li className="app-has-children">
    //                                     <a href="#.">Solutions</a>
    //                                     <ul>
    //                                         <li><a href="solution-1.html">Solution 1</a></li>
    //                                         <li><a href="solution-2.html">Solution 2</a></li>
    //                                         <li><a href="solution-3.html">Solution 3</a></li>
    //                                     </ul>
    //                                 </li>
    //                                 <li><a href="blog.html">Blog</a></li>
    //                                 <li><a href="contact.html">Contact Us</a></li>
    //                                 <li className="app-has-children">
    //                                     <a href="#.">Other</a>
    //                                     <ul>
    //                                         <li><a href="coming-soon.html">Coming Soon</a></li>
    //                                         <li><a href="404.html">404</a></li>
    //                                     </ul>
    //                                 </li>
    //                             </ul>
    //                             <div className="app-search-icon">
    //                                 <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                                     <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5848 19.7029C20.3908 19.8999 20.1358 19.997 19.8808 19.997C19.6268 19.997 19.3718 19.8999 19.1778 19.7029L15.5118 16.2199C13.9778 17.2549 12.3798 17.997 9.92584 17.997C4.98484 17.997 0.964844 13.959 0.964844 8.99695C0.964844 4.34995 4.98484 0.199951 9.92584 0.199951C14.8668 0.199951 18.8858 4.34995 18.8858 8.99695C18.8858 11.118 18.1468 13.68 16.9188 14.608L20.5848 18.29C20.9738 18.681 20.9738 19.3129 20.5848 19.7029ZM9.92584 1.99695C6.82984 1.99695 2.95684 5.13695 2.95684 8.99695C2.95684 12.857 6.82984 15.998 9.92584 15.998C11.8398 15.998 13.5758 15.217 14.8368 13.957C14.8408 13.952 14.8418 13.945 14.8468 13.941C14.8518 13.936 14.8578 13.935 14.8628 13.93C16.1168 12.663 16.8948 10.92 16.8948 8.99695C16.8948 5.13695 13.7678 1.99695 9.92584 1.99695Z"></path>
    //                                 </svg>
    //                             </div>
    //                         </nav>

    //                     </div>
    //                     {/* <!-- mobile menu button --> */}
    //                     <div className="app-menu-btn">
    //                         <span></span>
    //                     </div>
    //                     {/* <!-- mobile menu button end --> */}
    //                 </div>
    //             </div>
    //         </div>
    <header className="header">
      <Navbar expand="lg" className="navbar_header">
        <Container>
          <Navbar.Brand href="#home">
            <Image src={darkLogo} alt="" height={20} width={140} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {navItems.map((item,index) => (
                <Nav.Link key={index} href={item.link} className="navbar_header_links">{item.name}</Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
    </header>
  );
}

export default Header;
