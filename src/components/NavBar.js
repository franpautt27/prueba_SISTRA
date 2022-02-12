import React from "react";
import { Navbar, Container } from 'react-bootstrap';

export const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src="https://ii.ct-stc.com/1/logos/empresas/2017/05/08/8694a289ba234d649860174827thumbnail.jpeg"
              width="50"
              height="50"
              className="d-inline-block align-center"
              style={{'borderRadius':'50%'}}
            />{" "}
            &nbsp;&nbsp; Aplicaci&oacute;n para mostrar informaci&oacute;n de equipos
            
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};
