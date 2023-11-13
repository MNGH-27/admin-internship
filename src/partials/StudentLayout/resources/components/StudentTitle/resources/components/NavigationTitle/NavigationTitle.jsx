import { useCallback } from 'react'

import { useSearchParams, usePathname, useRouter } from 'next/navigation'

import { Button } from '@atom/index'

import { GoStop } from 'react-icons/go'
import { IoReturnDownBack } from 'react-icons/io5'
import { PiNoteLight } from 'react-icons/pi'

const NavigationTitle = () => {
   const { push } = useRouter()
   const pathName = usePathname()
   const searchParams = useSearchParams()

   // Get a new searchParams string by merging the current
   // searchParams with a provided key/value pair
   const createQueryString = useCallback(
      (name, value) => {
         const params = new URLSearchParams(searchParams)
         params.set(name, value)

         return params.toString()
      },
      [searchParams],
   )

   //check if we are in form page
   if (pathName.includes('forms')) {
      //we are in form page there is no need for this navigation
      return null
   }

   return (
      <div className="flex items-center justify-center flex-col sm:flex-row gap-5 w-full sm:w-fit">
         {searchParams.get('verified') != 1 ? (
            <Button
               className="h-auto py-3"
               onClick={() => push(pathName + '?' + createQueryString('verified', '1'))}
               icon={<IoReturnDownBack size={20} />}
               type="primary"
            >
               بازگشت
            </Button>
         ) : (
            <>
               <Button
                  className="h-auto py-3"
                  type="primary"
                  icon={<PiNoteLight size={20} />}
                  onClick={() => push(pathName + '?' + createQueryString('verified', '2'))}
               >
                  دانشجو های تایید شده
               </Button>
               <Button
                  className="h-auto py-3"
                  icon={<GoStop size={20} />}
                  onClick={() => push(pathName + '?' + createQueryString('verified', '3'))}
               >
                  دانشجو های رد شده
               </Button>
            </>
         )}
      </div>
   )
}

export default NavigationTitle
