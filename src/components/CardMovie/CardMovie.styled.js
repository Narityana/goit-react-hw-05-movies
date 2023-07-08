import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgb(0, 139, 139, 0.3);
  padding: 30px;
  margin: 20px 0 3px 150px;
  display: flex;
  border-radius: 10px;
  box-shadow: 0 2px 5px black;
`;
export const Poster = styled.img`
  width: 300px;
  height: 100%;
  box-shadow: 0 2px 5px black;
`;
export const Information = styled.div`
  margin-left: 30px;
`;

export const Title = styled.h1`
  margin-bottom: 30px;
`;
export const Score = styled.h3`
  margin-bottom: 15px;
  width: 150px;
  padding: 10px 30px;
  color: rgb(245 244 154);
  border: 2px solid;
  border-color: #008b8b;
  border-radius: 5px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Subtitle = styled.h2`
  margin-bottom: 15px;
`;
