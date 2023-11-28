export const TABLE_HEADER = [
   {
      title: 'روز/ساعت',
      dataIndex: 'title',
      key: 'title',
   },
   {
      title: 'صبح',
      dataIndex: 'ms',
      key: 'ms',
      render: (_, data) => (
         <div className="flex items-center justify-center gap-x-1">
            <span>{data.ms}</span>تا<span>{data.me}</span>
         </div>
      ),
   },
   {
      title: 'بعد از ظهر',
      dataIndex: 'es',
      key: 'es',
      render: (_, data) => (
         <div className="flex items-center justify-center gap-x-1">
            <span>{data.es}</span>تا<span>{data.ee}</span>
         </div>
      ),
   },
]

export const DUMMY_DATA = [
   {
      day: 'day',
      morning: 'morning',
      afternoon: 'afternoon',
   },
   {
      day: 'day',
      morning: 'morning',
      afternoon: 'afternoon',
   },
   {
      day: 'day',
      morning: 'morning',
      afternoon: 'afternoon',
   },
]
