import { ConfigProvider } from 'antd'
import frFR from 'antd/locale/fr_FR'

export function Providers({ children }) {
  return (
    <ConfigProvider
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
  )
}
