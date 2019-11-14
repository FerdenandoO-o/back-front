import React, {useState} from 'react';
import { Container } from "./styles";
import api from "../../services/api";

export default function Cadastro({history}) {
  const[nome, setNome] = useState("");
  const[email, setEmail] = useState("");
  const[senha, setSenha] = useState("");

  async function handleSubmit(event){
    event.preventDefault();
    try{
    await api.post("/users", {
      nome,
      email,
      senha
    })
  
    history.push("/Login");
  }catch(erro){
    alert("Email ou senha inválidos")
  }
  }
  
  return (
    <Container>
      <div>
        <form onSubmit = {handleSubmit}>
          <h1>Cadastro</h1>
          <input type="text" placeholder="Nome:" onChange={event => setNome(event.target.value)} value={nome}/>
          <input type="email" required placeholder="E-mail:" onChange={event => setEmail(event.target.value)} value={email}/>
          <input type="password" required placeholder="Senha:"  minLength="8" onChange={event => setSenha(event.target.value)} value={senha}/>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </Container>
  );
}