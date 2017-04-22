import React from 'react';
import { browserHistory } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const AppCommonNavigation = () => (
    <Nav>
      <LinkContainer to="/home">
        <NavItem eventKey={ 2 } href="/home">首頁</NavItem>
      </LinkContainer>
      <LinkContainer to="/activity">
        <NavItem eventKey={ 3 } href="/activity">活動</NavItem>
      </LinkContainer>
      <LinkContainer to="/book">
        <NavItem eventKey={ 4 } href="/book">好書</NavItem>
      </LinkContainer>
      <LinkContainer to="/notes">
        <NavItem eventKey={ 5 } href="/notes">文摘</NavItem>
      </LinkContainer>
      <LinkContainer to="/question">
        <NavItem eventKey={ 6 } href="/question">提問</NavItem>
      </LinkContainer>
      <LinkContainer to="/about">
        <NavItem eventKey={ 7 } href="/about">關於</NavItem>
      </LinkContainer>
    </Nav>
);

export default AppCommonNavigation;
