import styled from 'styled-components'

export const FilterContainer = styled.div`
  display: flex;
  padding: 25px;
`

export const FilterButton = styled.button`
  display: flex;
  border-radius: 50%;
  cursor: pointer;
  padding: 25px;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  text-align: center;
  font-weight: bold;
  margin: 0 10px;
  transition: all 0.2s ease;
  border: none;
  box-sahdow: 0 0.125rem 0.25rem #e5e5e5e5;
  &.light {
    background-color: #f3f3f3;
    color: #b4242c;
  }
  &.dark {
    background-color: #050505;
    color: #fff;
  }
  &:hover {
    background-image: linear-gradient(to right top, #4e0f2d, #681032, #831234, #9c1832, #b4242c);
    color: #fff;
    transform: scale(1.05);
  }
  &.active {
    background-image: linear-gradient(to right top, #4e0f2d, #681032, #831234, #9c1832, #b4242c);
    color: #fff;
    transform: scale(1.05);
  }
`

export const Form = styled.form`
  display: grid;
  & label {
    display: grid;
    row-gap: 10px;
  }
  & input {
    border: none;
    padding: 12px;
    grid-row-start: 2;
    border-radius: 25px;
    grid-column-start: 1;
    background-color: #f3f3f3;
    box-shadow: 0 0.125rem 0.25rem #d3d3d3;
  }
  & button  {
    display: flex;
    grid-row-start: 2;
    grid-column-start: 1;
    justify-self: flex-end;
    align-items: center;
    background: none;
    border: none;
    padding: 10px;
  }
`


export const TitleContainer = styled.div`
  display: grid;
  // width: 150px;
  // height: 10px;
  align-items: center;
  padding: 25px 0;
  &:before {
    content: '';
    width: 100%;
    height: 5px;
    background-color: #b42469;
    grid-row-start: 1;
    grid-column-start: 1;
  }
  & h1 {
    grid-row-start: 1;
    grid-column-start: 1;
    font-size: xx-large;
    margin-left: 10%;
    padding: 0 10px;
    width: fit-content;
    transition: all 0.5s ease;
    &.light {
      background-color: #fff;
    }
    &.dark {
      background-color: #202020;
    }
  }
`

export const RecipesContainer = styled.div`
  display: grid;
  justify-items: center;
  justify-content: center;
  padding: 50px 200px;
  gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`

export const Loader = styled.div`
  display: flex;
  justify-content: centen;
  align.items: center;
  -webkit-animation:spin 1s linear infinite;
  -moz-animation:spin 1s linear infinite;
  animation:spin 1s linear infinite;
  color: #b42469;
`
