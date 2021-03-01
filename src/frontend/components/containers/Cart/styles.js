import styled from 'styled-components'

export const Container = styled.section`
  display: grid;
  justify-items: center;
  justify-content: center;
  padding: 50px 20px;
  gap: 25px;
`

export const ContainerLeft = styled.section`
  display: grid;
  justify-items: center;
  justify-content: center;
  gap: 25px;
`
export const ContainerRight = styled.section`
  display: grid;
  height: fit-content;
  gap: 15px;
  grid-template-columns: repeat(2, 1fr);
  & p:nth-child(2n) {
    justify-self: flex-end;
    text-align: right;
    color: #b42469;
    font-weight: bold;
  }
  & button:hover {
    transform: translateY(-2px);
  }
  & button:nth-child(9) {
    background-color: #0f0f0f;
    border: none;
    padding: 10px;
    color: #ffffff;
    border-radius: 6px;
  }
  & button:nth-child(10) {
    background: none;
    border: 1px solid #0f0f0f;
    padding: 10px;
    color: #0f0f0f;
    border-radius: 6px;
  }
  & button:last-child {
    grid-column-end: span 2;
    background-color: #b42469;
    border: none;
    padding: 12px;
    color: #ffffff;
    border-radius: 6px;
  }
`

export const RecipesContainer = styled.div`
  display: grid;
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