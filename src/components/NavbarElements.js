import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #ffbc42;
  height: 85px;
  display: flex;
  justify-content: flex-start;
  padding-inline: 16px;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
  align-items: right;
  left: 0;
  z-index: 1;
`;
