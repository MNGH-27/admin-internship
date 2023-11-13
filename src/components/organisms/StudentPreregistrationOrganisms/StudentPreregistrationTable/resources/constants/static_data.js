import { Button } from '@atom/index'

export const getTableData = (openRejectModal, openRejectDescription, onVerifyUser, verified) => {
   const TABLE_HEADER = [
      {
         title: '#',
         dataIndex: 'index',
         key: 'index',
         render: (_, data, index) => <span>{index + 1}</span>,
      },
      {
         title: 'نام',
         dataIndex: 'name',
         key: 'name',
      },
      {
         title: 'نام خانوادگی',
         dataIndex: 'last_name',
         key: 'last_name',
      },
      {
         title: 'شماره دانشجویی',
         dataIndex: 'student_number',
         key: 'student_number',
      },
      {
         title: 'نام شرکت',
         dataIndex: 'company',
         key: 'company',
      },
      {
         title: 'دانشکده',
         dataIndex: 'faculty',
         key: 'faculty',
      },
      {
         title: 'ترم',
         dataIndex: 'entrance_year',
         key: 'entrance_year',
      },
      {
         title: 'واحد های پاس شده',
         dataIndex: 'passed_units',
         key: 'passed_units',
      },
      {
         title: '',
         dataIndex: 'opetration',
         key: 'opetration',
         render: (_, data) => (
            <div className="flex items-center justify-center gap-2">
               <Button
                  onClick={() => {
                     if (verified === '3') {
                        openRejectDescription(data)
                     } else {
                        openRejectModal(data)
                     }
                  }}
                  type="primary"
                  className={`!bg-red-700 hover:!bg-red-900`}
               >
                  {verified === '3' ? 'رد شده' : 'رد'}
               </Button>
               <Button onClick={() => onVerifyUser(data)} disabled={verified === '2'} type="primary">
                  تایید
               </Button>
            </div>
         ),
      },
   ]

   return TABLE_HEADER
}
