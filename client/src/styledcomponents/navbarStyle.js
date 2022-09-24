import styled from "styled-components";

export const Container = styled.div`
  height: 60px;

`;
export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between


`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

`;
export const Language = styled.span`
  font-size: 14px;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;

`;
export const Right = styled.div`
  flex: 1;
  text-align: center;

`;
export const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
 
  
`;
export const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
export const Input = styled.input`
  border: 0;


  &:focus {
    outline: none;
  }


`;
export const Logo = styled.h1`
  font-weight: bold;
  display: flex;

`;
export const MenuItem = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 25px;
  color: teal;
  font-weight: bold;

`;
export const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  cursor: pointer;

`;
export const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  font-weight: 500;
  margin-bottom: 10px;
`;