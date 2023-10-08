import { DashboardHeader, DashboardFooter } from './resources'

const DashboardLayout = ({ childern }) => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <DashboardHeader />

      <main className="max-w-7xl mx-auto min-h-full grow px-5">{childern}</main>

      <DashboardFooter />
    </div>
  )
}

export default DashboardLayout
