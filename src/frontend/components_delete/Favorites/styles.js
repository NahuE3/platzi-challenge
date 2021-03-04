import styled from 'styled-components'

export const Container = styled.section`
  display: grid;
  // justify-items: center;
  // justify-content: center;
  padding: 50px 400px;
  gap: 25px;
`

export const RecipesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  justify-items: center;
  justify-content: center;
  gap: 25px;
`

export const BtnBack = styled.button`
  display: flex;
  cursor: pointer;
  justify-self: flex-start;
  align-items: center;
  background: none;
  border: none;
  color: red;
  & span {
    padding-left: 5px;
  }
`