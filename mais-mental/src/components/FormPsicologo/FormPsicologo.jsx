import React from 'react';
import { Link } from 'react-router-dom';

    

const FormPsicologo = () => {
  return (
    <form className="bg-primary flex flex-col items-center w-96 rounded-[7px] ml-24">
        <h2 className="text-white">PROFISSIONAL</h2>

        <label className="text-white mr-50" for="nome">Nome Completo:</label>
        <input className="field" id="nome" type="text" placeholder="Nome de Usuário" required/>

        <label className="text-white mr-50" for="email">E-mail:</label>
        <input className="field" id="email" type="email" placeholder="seuemail@gmail.com" required/>

        <label className="text-white mr-50" for="telefone">Telefone:</label>
        <input className="field" id="telefone" type="tel" placeholder="(00)0-0000-0000" required/>

        <label className="text-white mr-50" for="CRP">CRP (Registro Profissional)</label>
        <input className="field" id="CRP" type="text" placeholder="XX/XXXXX" required/>

        <label className="text-white mr-50" for="especializacao">Especialização</label>
            <select className="field" required> <option value="">Selecione...</option>
            <option value="Psicoterapia">Psicoterapia</option>
            <option value="Psicologia Clínica">Psicologia Clínica</option>
            <option value="Neuropsicologia">Neuropsicologia</option>
            <option value="Psicologia Infantil">Psicologia Infantil</option ></select>

        <label className ="text-white mr-50" for="descrição">Descrição Profissional</label>
        <textarea className='text-black w-60 mr-50 p-2  mt-1 h-48' name ="descricao" id="descricao" placeholder='Fale um pouco sobre sua experiência...' rows="5" required></textarea>
        
          

        <input type="submit" className="btnSubmit text-primary bg-white mt-8" value="CANDIDATAR-SE"/>

    </form>
  )
}

export default FormPsicologo;