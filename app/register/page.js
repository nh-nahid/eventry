import RegistrationForm from '@/components/auth/RegistrationForm';
import React from 'react';

const RegisterPage = () => {
    return (
         <section className="h-screen grid place-items-center">
        <div
          className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md"
        >
          <h4 className="font-bold text-2xl">Register</h4>
          
          <RegistrationForm />

          <span className="text-center text-xs text-gray-500">
            Already have an account?
            <a className="underline hover:text-indigo-600" href="./login.html"
              >Login</a>
            
          </span>
        </div>
      </section>
    );
};

export default RegisterPage;