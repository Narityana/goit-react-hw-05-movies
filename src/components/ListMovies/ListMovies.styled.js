import styled from 'styled-components';
// import { NavLink} from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
`;

export const List = styled.ul`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Item = styled.li`
  font-size: 16px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: rgb(245 244 154);
    font-size: 18px;
  }
`;
