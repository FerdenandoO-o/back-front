import styled from "styled-components";

export const Container = styled.div`
  button {
    width: 40%;
    height: 25px;
    margin: 15px;
    border-radius: 6px;
    border-style: hidden;
    cursor: pointer;
    margin-top: 40px;
  }
  input[type="email"],
  input[type="password"] {
    margin-top: 25px;
    width: 250px;
    height: 25px;
    border-radius: 2px;
    border-style: hidden;
    background: #fff;
  }
  h1 {
    display: flex;
    margin-bottom: 30px;
    color: white;
    font-size: 30pt;
  }

  img {
    height: 200px;
  }
`;
