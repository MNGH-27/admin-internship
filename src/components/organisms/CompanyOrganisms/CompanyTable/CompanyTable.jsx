'use client'

import { useCallback, useState } from 'react'

import { Table } from '@atom/index'

import { useQuery } from 'react-query'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { getTableData, DetailCompanyModal, RemoveCompanyModal } from './resources'
import { getCompaniesList } from '@core/services'

const CompanyTable = () => {
   const searchParams = useSearchParams()
   const pathName = usePathname()
   const { push } = useRouter()

   const [detailModal, setDetailModal] = useState({
      isShow: false,
      data: {},
   })
   const [removeModal, setRemoveModal] = useState({
      isShow: false,
      data: {},
   })

   const { data: companyList, isLoading: isLoadingCompanyList } = useQuery({
      queryKey: ['companies_list', searchParams.toString()],
      queryFn: () => getCompaniesList(searchParams.toString()),
   })

   // Get a new searchParams string by merging the current
   // searchParams with a provided key/value pair
   const createQueryString = useCallback(
      ({ page }) => {
         const params = new URLSearchParams(searchParams)

         //add new search params
         params.set('page', page)

         return params.toString()
      },
      [searchParams],
   )

   const onOpenDetailModal = (data) => {
      setDetailModal({
         isShow: true,
         data,
      })
   }

   const onOpenRemoveModal = (data) => {
      setRemoveModal({
         isShow: true,
         data,
      })
   }

   return (
      <>
         <Table
            rowKey={(record) => record.id}
            loading={isLoadingCompanyList}
            headerList={getTableData(onOpenDetailModal, onOpenRemoveModal)}
            pagination={{
               pageSize: 10, // Set the number of items per page
               total: companyList?.meta?.total_records, // Set the total number of items
               onChange: (page) => {
                  push(pathName + '?' + createQueryString({ page }))
               },
            }}
            data={companyList?.data}
         />

         <DetailCompanyModal
            isShow={detailModal.isShow}
            onClose={() =>
               setDetailModal({
                  isShow: false,
                  data: {},
               })
            }
            data={detailModal.data}
         />

         <RemoveCompanyModal
            isShow={removeModal.isShow}
            onClose={() =>
               setRemoveModal({
                  isShow: false,
                  data: {},
               })
            }
            data={removeModal.data}
         />
      </>
   )
}

export default CompanyTable
