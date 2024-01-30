'use client'

import { useQuery } from 'react-query'
import { DashboardHeader, DashboardFooter } from './resources'
import { getUserInfoHttp } from '@core/services'
import { getCookie } from 'cookies-next'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const DashboardLayout = ({ children }) => {
   const { push } = useRouter()

   const { data: userData } = useQuery({
      queryKey: ['user'],
      queryFn: () => getUserInfoHttp(getCookie('token')),
   })

   useEffect(() => {
      //check if there is token
      if (!getCookie('token')) {
         //there is no token redirect to auth page
         push('/')
      }
   }, [push])

   return (
      <div className="w-full min-h-screen flex flex-col">
         <DashboardHeader />

         <main className="max-w-7xl min-h-full grow p-5 mx-auto w-full">{children}</main>

         <DashboardFooter first_name={userData?.first_name} last_name={userData?.last_name} />
      </div>
   )
}

export default DashboardLayout
