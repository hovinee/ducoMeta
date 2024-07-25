import LoginForm from '@/components/form/login-form/LoginForm'
import AutoSizeImage from '@/components/ui/auto-size-image/AutoSizeImage'

const Login = async () => {
  return (
    <div className="grid h-screen w-full lg:grid-cols-2">
      <div className="hidden lg:block">
        <AutoSizeImage
          src={'/images/unity/loading_bg_2.jpg'}
          full
          objectCover
        />
      </div>
      <LoginForm />
    </div>
  )
}

export default Login
