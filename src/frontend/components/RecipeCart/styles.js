import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  align-items: center;
  border-radius: 12px;
  padding: 20px;
  max-width: 320px;
  &.light {
    border: 1px solid #f6f6f6;
    box-shadow: 0 0.125rem 0.25rem #e9e9e9;
  }
  &.dark {
    border: 1px solid #060606;
    box-shadow: 0 0.125rem 0.25rem #090909;
  }
`

export const Image = styled.div`
  display: flex;
  width: 100px;
  height: 100px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`

export const Body = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  // padding: 20px;
  row-gap: 10px;
  column-gap: 10px;
  & p:nth-child(1), p:nth-child(2) {
    grid-column-end: span 3;
  }
`

export const Info = styled.div`
  display: grid;
  hjight: 100%;
  justify-items: center;
  align-content: space-around;
  align-self: stretch;
  // padding: 20px 0;
  row-gap: 10px;
  & p {
    grid-column-end: span 2;
  }
`

export const BtnOutline = styled.button`
  background: none;
  border: 1px solid #c9c9c9;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 6px;
  font-weight: bold;
  &:hover {
    transform: translateY(-2px);
  }
  &.light {
    color: #b42469;
  }
  &.dark {
    color: #ffffff;
  }
`

export const BtnLink = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 6px;
  font-weight: bold;
  &:hover {
    transform: translateY(-2px);
  }
  &.light {
    color: #010101;
  }
  &.dark {
    color: #ffffff;
  }
`
