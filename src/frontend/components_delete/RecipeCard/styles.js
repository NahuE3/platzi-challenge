import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  max-width: 320px;
  border-radius: 12px;
  &.light {
    border: 1px solid #f6f6f6;
    box-shadow: 0 0.125rem 0.25rem #e9e9e9;
  }
  &.dark {
    border: 1px solid #060606;
    box-shadow: 0 0.125rem 0.25rem #090909;
  }
`

export const Image = styled.figure`
  width: 100%;
  height: 100%;
  max-height: 230px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
    object-position: center;
  }
`

export const Contain = styled.div`
  padding: 20px;
  display: grid;
  gap: 5px;
  & strong {
    font-size: x-large;
  }
  & > span:nth-child(2) {
    font-size: small;
  }
  & p:nth-child(3), p:nth-child(5) {
    padding: 10px 0;
    display: flex;
    align-items: center;
  }
  & p:nth-child(5) span {
    padding-left: 10px;
  }
`

export const ButtonLike = styled.button`
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
  backgound: none;
  color: #b42469;
  &.active {
    color: #fff;
    border: none;
    background-image: linear-gradient(to right top, #4e0f2d, #66143b, #7f1a4a, #991f59, #b42469);
  }
  &:hover {
    transform: scale(1.1);
  }
`

export const ButtonLink = styled.button`
  background: none;
  border: none;
  display: flex;
  justyfy-conten: flex-start;
  align-items: center;
  cursor: pointer;
  color: #b42469;
  & span {
    padding-left: 10px;
  }
  &:hover {
    transform: translateY(-2px);
  }
`

export const ButtonCart = styled.button`
  background-color: #b42469;
  border: none;
  padding: 8px;
  color: #fff;
  cursor: pointer;
  border-radius: 6px;
  font-weight: bold;
  min-width: 130px;
  &:hover {
    transform: translateY(-2px);
    background-color: #971c57;
  }
`
