//Encinas Nahuel - Olimpia Challenge
//Import de librerias.
import React from 'react';
import styled from 'styled-components';
//Import de iconos.
import { HiOutlineUserCircle, HiReply } from 'react-icons/hi';
//Import de media querys.
import { media } from '../../../const/mediaQuerys';

const Comment = ({ user, comment }) => {

  return (
    <StyledWrapper>
      <StyledHead onClick={() => setOpen(!open)}>
        <div>
          <HiOutlineUserCircle size="3rem" color="var(--first-color)" />
          <span>{user}</span>
        </div>
      </StyledHead>
      <StyledSeparator></StyledSeparator>
      <StyledComment>
        <StyledIcon size="2rem" color="var(--mid-gray)" />
        <p>{comment}</p>
      </StyledComment>
    </StyledWrapper>
  );
};

// =================== ESTILOS CSS ===================
const StyledWrapper = styled.div`
  width: 100%;
  height: max-content;
  padding: 12px;
  margin-top: 16px;
  border-radius: var(--normal-radius);
  box-shadow: var(--card-shadow);
  transition: 0.3s ease all;
`;
const StyledHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 30px;

  span {
    margin-left: 6px;
    font-size: var(--large-font-size);
    font-weight: 600;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const StyledSeparator = styled.div`
  width: 100%;
  height: 2px;
  background-color: var(--light-gray);
  margin: 8px 0 10px;
`;
const StyledComment = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-gap: 20px;
  padding: 0 20px 4px 13px;
`;
const StyledIcon = styled(HiReply)`
  transform: rotate(180deg);
`;

export default Comment;
