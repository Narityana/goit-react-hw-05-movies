import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { MdOutlineRememberMe } from 'react-icons/md';
import { BiLeftArrowCircle } from 'react-icons/bi';
import { MdOutlineReviews } from 'react-icons/md';

export const Container = styled.div`
  margin: 0 auto;
`;

export const Subtitle = styled.h2`
  color: rgb(245 244 154);
  margin: 0 30px 0 350px;
`;
export const BtnContainer = styled.div`
  background-color: rgb(0, 139, 139, 0.3);
  padding: 20px;
  margin-left: 150px;
  display: flex;
  align-items: center;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 2px 5px black;
`;
export const LinkButton = styled(NavLink)`
  margin-right: 30px;
`;

export const IconReview = styled(MdOutlineReviews)`
  width: 25px;
  height: 25px;
`;
export const IconBack = styled(BiLeftArrowCircle)`
  width: 25px;
  height: 25px;
`;
export const IconCast = styled(MdOutlineRememberMe)`
  width: 25px;
  height: 25px;
`;
