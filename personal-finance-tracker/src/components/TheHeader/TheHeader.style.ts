"use client";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.small};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 15px;
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1em;

  &:hover {
    text-decoration: underline;
  }
`;
