import React from 'react'
import RegisterForm from '@/components/form/register-form/RegisterForm'
import AutoSizeImage from '@/components/ui/auto-size-image/AutoSizeImage'

const Register = async () => {
  return (
    <div className="grid h-screen w-full lg:grid-cols-2">
      <div className="hidden lg:block">
        <AutoSizeImage
          src={'/images/unity/loading_bg_2.jpg'}
          full
          objectCover
        />
      </div>
      <RegisterForm />
    </div>
  )
}

export default Register
