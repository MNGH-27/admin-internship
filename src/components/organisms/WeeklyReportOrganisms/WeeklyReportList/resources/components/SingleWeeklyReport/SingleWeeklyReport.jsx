import { Spinner } from '@atom/index'
import { getSingleWeekReportHttp } from '@core/services'
import { useQuery } from 'react-query'

const SingleWeeklyReport = ({ weeklyReportId, userId }) => {
   const {
      data: singleWeekReport,
      isLoading,
      isError,
      isSuccess,
   } = useQuery({
      queryKey: ['single-week-report', { weeklyReportId, userId }],
      queryFn: () => getSingleWeekReportHttp(userId, weeklyReportId),
   })

   console.log('singleWeekReport : ', singleWeekReport)

   if (isLoading) {
      return (
         <div className="flex items-center justify-center w-full">
            <Spinner />
         </div>
      )
   }

   if (isError) {
      return <>دریافت اطلاعات با مشکل مواجه شد</>
   }

   if (isSuccess) return <div>SingleWeeklyReport</div>
}

export default SingleWeeklyReport
