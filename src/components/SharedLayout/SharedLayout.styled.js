import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { GiFilmProjector } from 'react-icons/gi';

export const Header = styled.header`
  padding: 10px 30px;
  height: 60px;
  display: flex;
  margin-bottom: 30px;
  width: 100%;
  border-bottom: 1px solid #fff;
`;
export const Container = styled.div`
  display: flex;
  width: 1200px;
  align-items: flex-end;
  margin: 0 auto;
`;
export const Links = styled(NavLink)`
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
  font-weight: 500;
  font-size: 1.5rem;

  &:hover {
    color: rgb(245 244 154);
  }

  &.active {
    background-color: #008b8b;
    color: rgb(245 244 154);
  }
`;

export const Footer = styled.footer`
  padding: 10px 30px;
  height: 70px;
  display: flex;
  width: 100%;
  border-top: 1px solid #fff;
  color: #fff;
  justify-content: center;
  align-items: center;
}
`;

export const IconHeader = styled(GiFilmProjector)`
  color: rgb(245 244 154);
  width: 60px;
  height: 60px;
  margin-right: 15px;
`;

export const NavContainer = styled.nav`
  padding-left: 15px;
  display: flex;
`;

export const Main = styled.main`
  width: 1200px;
  margin: 30px auto;
  color: #fff;
  min-height: 500px;
`;
