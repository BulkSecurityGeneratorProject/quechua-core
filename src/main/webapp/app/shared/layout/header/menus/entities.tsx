import React from 'react';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NavLink as Link } from 'react-router-dom';
import { NavDropdown } from '../header-components';

export const EntitiesMenu = props => (
  // tslint:disable-next-line:jsx-self-close
  <NavDropdown icon="th-list" name="Acciones" id="entity-menu">
    <DropdownItem tag={Link} to="/entity/curso">
      <FontAwesomeIcon icon="asterisk" />&nbsp;Curso
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/horario-cursada">
      <FontAwesomeIcon icon="asterisk" />&nbsp;Horario Cursada
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/cursada">
      <FontAwesomeIcon icon="asterisk" />&nbsp;Cursada
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/coloquio">
      <FontAwesomeIcon icon="asterisk" />&nbsp;Coloquio
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/prioridad">
      <FontAwesomeIcon icon="asterisk" />&nbsp;Prioridad
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/periodo-administrativo">
      <FontAwesomeIcon icon="asterisk" />&nbsp;Periodo Administrativo
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/inscripcion-coloquio">
      <FontAwesomeIcon icon="asterisk" />&nbsp;Inscripcion Coloquio
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/administrador-departamento">
      <FontAwesomeIcon icon="asterisk" />&nbsp;Administrador Departamento
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/alumno">
      <FontAwesomeIcon icon="asterisk" />&nbsp;Alumno
    </DropdownItem>
    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);
