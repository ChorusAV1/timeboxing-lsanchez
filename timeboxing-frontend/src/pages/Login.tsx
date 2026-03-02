import React, { type JSX } from 'react'

const Login: React.FC = (): JSX.Element =>
{
    return (
        <div className='bg-[#202020] flex flex-col items-center justify-center grow'>
            <div className='bg-[#303030] h-100 w-80 rounded-2xl text-white flex flex-col items-center justify-center'>

                <h1 className='text-2xl'>Timeboxing</h1>

                <div className='h-15'/>

                <h2 className='text-xl'>Inicia sesión</h2>

                <div className='h-10'/>

                <div>
                    <label className='flex flex-col'>Email</label>
                    <input
                        name='Email'
                        className='bg-[#181818] rounded p-2'
                    />
                </div>

                <div className='h-5'/>
                    
                <div>
                    <label className='flex flex-col'>Contraseña</label>
                    <input
                        name='Contrañesa'
                        className='bg-[#181818] rounded p-2'
                    />
                </div>
                
            </div>
        </div>
    )
}

export default Login