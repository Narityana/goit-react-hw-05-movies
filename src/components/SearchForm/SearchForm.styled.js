import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  width: 600px;
  margin-right: 5px;
  border-radius: 6px;
  padding: 7px 14px;
`;

export const Button = styled.button`
  padding: 7px 14px;
  border-radius: 6px;
  background-color: #008b8b;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 150px;
  box-shadow: 0 2px 5px #000;

  &:hover {
    background-color: #084949;
    color: rgb(245 244 154);
  }
`;
