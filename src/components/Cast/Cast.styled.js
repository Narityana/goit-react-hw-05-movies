import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgb(0, 139, 139, 0.3);
  padding: 30px;
  margin: 0 0 3px 150px;
  display: flex;
  justify-content: center;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 2px 5px black;
`;

export const CastList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  overflow-x: scroll;
  gap: 30px;
`;

export const CastItem = styled.li`
  width: 200px;
  margin-bottom: 30px;
  display: inline-block;
  box-shadow: 0 2px 5px black;
  border-radius: 8px;
  padding: 3px;
`;
