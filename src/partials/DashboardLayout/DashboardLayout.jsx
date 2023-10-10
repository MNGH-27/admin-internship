import { DashboardHeader, DashboardFooter } from './resources'

const DashboardLayout = ({ children }) => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <DashboardHeader />

      <main className="max-w-7xl min-h-full grow p-5 mx-auto w-full">
        {children}
      </main>

      <DashboardFooter />
    </div>
  )
}

export default DashboardLayout
