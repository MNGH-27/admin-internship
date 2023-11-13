'use client'

import { ConfigProvider } from 'antd'
import frFR from 'antd/locale/fr_FR'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from 'react-hot-toast'
import { Empty } from '@atom/index'

// Create a client
const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         cacheTime: 5 * 60 * 1000,
         staleTime: 5 * 60 * 1000,
         refetchOnWindowFocus: false,
      },
   },
})

export function Providers({ children }) {
   return (
      <>
         <QueryClientProvider client={queryClient}>
            <ConfigProvider
               renderEmpty={() => <Empty />}
               direction="rtl"
               locale={frFR}
               theme={{
                  token: {
                     // Seed Token
                     colorPrimary: '#003B7E',
                  },
               }}
            >
               {children}
            </ConfigProvider>
         </QueryClientProvider>
         <Toaster position="bottom-left" containerClassName="text-sm" />
      </>
   )
}
