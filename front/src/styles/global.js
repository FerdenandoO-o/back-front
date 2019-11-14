import { createGlobalStyle } from "styled-components";
import Telalog from "../assets/trolley.jpg";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Fjalla+One|Lobster&display=swap');
*{
  padding:0;
  margin:0;
  font-family: 'Fjalla One', sans-serif;
}

body{
  background-image:url(${Telalog});
  background-repeat:no-repeat;
  background-size:cover;
}

div {
  justify-content:center;
  align-content:center;
  align-items:center;
  display:flex;
  height:450px;
  width: 100%;
  margin-top: 40px;
 }

form {
  align-content:center;
  align-items:center;
  justify-content:center;
  display:flex;
  flex-direction:column;
  background:rgb(000,000,000,70%);
  height:500px;
  width:400px;
  border-radius:5px;
 }

.lk1{
  color:white;
  padding-top:20px;
  text-decoration:none;
}

.lk{
  color:white;
  padding-top:20px;
  text-decoration:none;
}

.lk1:hover{
  color:gray;
}

.lk:hover{
  color:gray;

  @media(max-width: 798px){
    background-size: cover;

    div{
      height: 100%;
      width: 100%;
      border-radius:0px
    }

    form{
      width:100%;
      height:100%;
    }
  }
} `;
