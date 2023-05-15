import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Ingresar } from './Ingresar';
import { LogoutButton } from './Logout';
import { Profile } from './Profile';

export const Login = () => {
  //const { isAuthenticated } = useAuth0
  return (
    <>
    <h1>Esta es la Pagina de Iniciar Sesion</h1>
    <Profile /> 
    <Ingresar/>
    <LogoutButton /> 
    {/*   {isAuthenticated ? (
        <>
          <Profile />
          <LogoutButton />
        </>
      ) : (
        <Ingresar />
      )} */}
    </>
  );
};

export default Login;

