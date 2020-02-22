import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ()=>(
  <header>
    {/* <h1>Ladder</h1> */}
    <NavLink to="/" activeClassName="is-active" exact={true} >Dashboard</NavLink>
    <NavLink to="/ladders" activeClassName="is-active" exact={true} >Ladders</NavLink>
    <NavLink to="/ladders/create" activeClassName="is-active" exact={true} >Create</NavLink>
    <NavLink to="/help" activeClassName="is-active" exact={true} >Help</NavLink>
  </header>
);

export default Header;