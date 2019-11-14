import React, { useState } from "react";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import api from "../../services/api";

export default function Login({ history }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await api.post("/sessions", {
        email,
        senha
      });
      const { token } = response.data;
      console.log(token);

      if (token) {
        localStorage.setItem("@CESTA/token", token);
      }

      history.push("/Privado");
    } catch (erro) {
      alert("Email ou senha inválidos");
    }
  }

  return (
    <Container>
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <input
            type="email"
            required
            placeholder="E-mail:"
            onChange={event => setEmail(event.target.value)}
            value={email}
          />
          <input
            type="password"
            required
            placeholder="Senha:"
            onChange={event => setSenha(event.target.value)}
            value={senha}
          />
          <button nameClass="b1" type="submit">
            Entrar
          </button>

          <Link className="lk" to="/">
            <p>Cadastrar Usuario</p>
          </Link>
        </form>
      </div>
    </Container>
  );
}
