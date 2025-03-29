import React from 'react';
import Logo from '../../assets/Logo/logo.png';
import Image from '../../assets/images/image-login.png';

const LoginProfissional = () =>{
    return(
        <>
        <title>+Mental | Página de Login Profissional</title>;
        <div className="bg-fourth h-screen relative ">
        <br/><br/><br/>
        <FormLoginProf />
        <img className="absolute top-10 right-32 " src={Logo}/>
                <img className="w-[350px] h-[350px] absolute top-[30.5%] right-48 z-10" src={Image}/>
        
                <div className="bg-primary h-64 w-64 rounded-[100%] absolute top-36 right-16"></div>
                <div className="bg-primary h-24 w-24 rounded-[100%] absolute bottom-36 right-8"></div>
                <div className="bg-primary h-24 w-24 rounded-[100%] absolute bottom-16 right-40"></div>
                <div className="bg-primary h-8 w-8 rounded-[100%] absolute bottom-16 right-20"></div>
              </div>
            
        </>
    )
    
}
export default LoginProfissional;