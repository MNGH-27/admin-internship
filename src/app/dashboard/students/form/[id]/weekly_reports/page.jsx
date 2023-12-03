import { WeeklyReportTemplate } from '@template/index'

const weeklyReportPage = ({ params: { id } }) => {
   return <WeeklyReportTemplate id={id} />
}

export default weeklyReportPage
