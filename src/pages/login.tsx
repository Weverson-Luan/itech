import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/userSlice';
import Navigation from "../shared/presentation/components/Navigation";

const Login: NextPage = () => {

  const [password, setPassword] = useState("");
  const [password_new, setPassword_New] = useState("");
  const [password_confirmed, setPassword_Confirmed] = useState("");
  const dispatch = useDispatch();

  return (
   <>
   <Navigation />
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
        
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white-900">Sign in to your account</h2>
          <p className="mt-2 text-center text-sm text-white-600">
            Or
            <a href="#" className="font-medium text-green-700 hover:text-green-300"> start your 14-day free trial </a>
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <input type="hidden" name="remember" value="true"/>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label>Senha Antiga</label>
              <input  
                name="email" 
                type="text" 
                required 
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Digite senha antiga"
                onChange={(event: any)=> setPassword(event.target.value)}
                />
            </div>
            <div>
              <label>Nova Senha</label>
              <input 
                id="password"
                name="password_new"
                type="text" 
                required 
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Digite sua nova senha"
                onChange={(event: any)=> setPassword_New(event.target.value)}
                />
            </div>

            <div>
              <label>Confirme Nova Senha</label>
              <input 
                id="password" 
                name="password_confirmed"
                type="text"
                required 
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Confirme sua senha"
                onChange={(event: any)=> setPassword_Confirmed(event.target.value)}
                />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
              <label className="ml-2 block text-sm text-white-900"> Remember me </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
            </div>
          </div>

          <div>
            <button 
              type="button" 
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={()=> alert()}
              >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            
                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
   </>
  )
}

export default Login;
