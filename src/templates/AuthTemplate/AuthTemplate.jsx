import { BigLogo } from '@public/image'
import { AuthForm } from '@organisms/AuthOrganisms'
import { Image } from '@atom/index'

const AuthTemplate = () => {
   return (
      <div className="w-screen min-h-screen flex items-center justify-center">
         <div className="flex flex-col gap-y-5 w-1/2">
            <Image src={BigLogo} alt="site logo" width={200} height={200} className="w-36 h-32 mx-auto" />
            <span className="font-medium">سامانه مدیریت کارآموزی دانشگاه شهید رجایی</span>
            <AuthForm />
         </div>
      </div>
   )
}

export default AuthTemplate
