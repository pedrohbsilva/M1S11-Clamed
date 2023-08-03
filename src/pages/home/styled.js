import styled from "styled-components"
import { Link } from "react-router-dom"

export const HomeUlStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0px;
`

export const HomeLiStyled = styled.li`
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 8px;
  align-items: center;
  justify-content: space-around;
`

export const HomeImgStyled = styled.img`
  border-radius: 90px;
  width: ${(props) => props.newImg ? "10px" : "90px"};
`

export const HomeLinkStyled = styled(Link)`
  text-decoration: none;
  color: red;
  cursor: pointer;
  background: blue;
  padding: 16px;
  border-radius: 8px;
  transition: all 0.3s linear;

  &:hover {
    transition: transform 0.5s, opacity 1s;
    opacity: 0.5;
  }
`