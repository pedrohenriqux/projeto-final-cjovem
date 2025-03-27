import React from 'react';
import { Link } from 'react-router-dom';
import './style1.css';

const FormLogin = () => {
  return (
    <form className="bg-primary flex flex-col items-center w-80 rounded-[7px] ml-24">
        <h2 className="text-white">LOGIN</h2>

        <label className="text-white mr-48" for="nome">Nome:</label>
        <input className="field" id="nome" type="text" placeholder="Nome do Profissional" required/>

        <label className="text-white mr-48" for="email">E-mail:</label>
        <input className="field" id="email" type="email" placeholder="seuemail@gmail.com" required/>

        <label className="text-white mr-48" for="data">Data de admissão:</label>
        <input className="field" id="email" type="email" placeholder="01 de janeiro de 2001" required/>

        <label className="text-white mr-48" for="senha">Senha:</label>
        <input className="field" id="senha" type="password" placeholder="XXXXXXXX" required minLength   ="8"/>

        <span className="flex">
            <input id="checkBox" type="checkbox"/> 
            <label for="checkBox" className="text-white ">Salvar informações de login</label>
        </span>

        <input type="submit" className="btnSubmit text-primary bg-white mt-8" value="FAZER LOGIN"/>

        <p className="text-white">
            Ainda não tem uma conta? <Link className="text-black" to="/cadastro">Cadastre-se</Link>
        </p>
    </form>
  )
}
