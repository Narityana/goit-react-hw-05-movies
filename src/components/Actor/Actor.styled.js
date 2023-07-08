import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(30, 37, 56, 0.05);
  border-radius: 8px;
`;
export const Photo = styled.img`
  width: 200px;
  height: 100%;
  border-radius: 8px 8px 0 0;
`;
export const Subtitle = styled.h3`
  margin: 10px 0;
  font-size: 1em;
`;
export const InfoActor = styled.p`
  margin: 0 10px 10px 10px;
  font-size: 0.7em;
  color: rgb(245, 244, 154);
  text-align: center;
`;
