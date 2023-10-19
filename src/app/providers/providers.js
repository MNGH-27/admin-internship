'use client'

import { ConfigProvider } from 'antd'
import frFR from 'antd/locale/fr_FR'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from 'react-hot-toast'
import { Empty } from '@atom/index'

export function Providers({ children }) {
  // Create a client
  const queryClient = new QueryClient()

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
