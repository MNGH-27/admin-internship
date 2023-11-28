'use client'
import { useRouter, useSearchParams } from 'next/navigation'

import { Table } from '@atom/index'
import { useQuery } from 'react-query'

import { getTableData } from './resources'
import { GetFormsListHttp } from '@core/services'

const StudentFormTable = () => {
   const searchParams = useSearchParams()
   const { push } = useRouter()

   const { data, isLoading, isFetching } = useQuery({
      queryKey: ['forms_list', searchParams.toString()],
      queryFn: () => GetFormsListHttp(searchParams.toString()),
      staleTime: 0,
      cacheTime: 0,
   })

   return (
      <>
         <Table
            loading={isLoading || isFetching}
            rowKey={(record) => record.id}
            headerList={getTableData(push)}
            data={data?.data?.students}
            pagination={{}}
         />
      </>
   )
}

export default StudentFormTable
