'use client'

import { useQuery } from 'react-query'
import { DashboardHeader, DashboardFooter } from './resources'
import { getUserInfoHttp } from '@core/services'
import { getCookie } from 'cookies-next'

const DashboardLayout = ({ children }) => {
   const { data: userData } = useQuery({
      queryKey: ['user'],
      queryFn: () => getUserInfoHttp(getCookie('token')),
   })

   return (
      <div className="w-full min-h-screen flex flex-col">
         <DashboardHeader />

         <main className="max-w-7xl min-h-full grow p-5 mx-auto w-full">{children}</main>

         <DashboardFooter first_name={userData?.first_name} last_name={userData?.last_name} />
      </div>
   )
}

export default DashboardLayout
