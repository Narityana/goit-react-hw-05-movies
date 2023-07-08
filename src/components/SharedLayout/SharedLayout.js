import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Header,
  Links,
  IconHeader,
  NavContainer,
  Container,
  Main,
  Footer,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <IconHeader />
          <NavContainer>
            <Links to="/">Home</Links>
            <Links to="/movies">Movies</Links>
          </NavContainer>
        </Container>
      </Header>
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer>Ukraine {new Date().getFullYear()}</Footer>
    </>
  );
};
