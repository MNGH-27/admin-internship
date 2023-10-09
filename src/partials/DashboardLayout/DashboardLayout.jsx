import { DashboardHeader, DashboardFooter } from './resources'

const DashboardLayout = ({ children }) => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <DashboardHeader />

      <main className="max-w-7xl min-h-full grow p-5">{children}</main>

      <DashboardFooter />
    </div>
  )
}

export default DashboardLayout
