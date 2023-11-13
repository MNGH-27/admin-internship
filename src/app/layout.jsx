import '@style/global.css'

export const metadata = {
   title: 'کارآموزی | پنل ادمین',
}

import { Providers } from './providers/providers'
import HydrationZustand from './providers/HydrationZustand'
export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body dir="rtl" className="min-h-screen">
            <Providers>
               <HydrationZustand>{children}</HydrationZustand>
            </Providers>
         </body>
      </html>
   )
}
