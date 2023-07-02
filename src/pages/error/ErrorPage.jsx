import React from 'react'
import { useRouteError } from 'react-router-dom';
import Header from "../../components/headerSection/Header";
import './errorPage.scss';

function ErrorPage() {
   const error = useRouteError();

   return (
      <div className="error_page">
         <Header />
         <div className='error_page_body'>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
               <i>{error.statusText || error.message}</i>
            </p>
         </div>
      </div>
   )
}

export default ErrorPage