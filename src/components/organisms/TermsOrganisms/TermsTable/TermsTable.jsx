'use client'

import { useCallback, useState } from 'react'

import { Modal, Table } from '@atom/index'

import { getTableData, EditTermsModal, RemoveTermsModal } from './resources'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { getEducationalTermsListHttp } from '@core/services/apis/educational-terms/get_educational_terms_list.api'
import { useQuery } from 'react-query'

const TermsTable = () => {
   const searchParams = useSearchParams()
   const pathName = usePathname()
   const { push } = useRouter()

   const [removeTermModal, setRemoveTermModal] = useState({
      isShow: false,
      data: {},
   })

   const [editTermModal, setEditTermModal] = useState({
      isShow: false,
      data: {},
   })

   const { data: termsData, isLoading: isLoadingTermData } = useQuery({
      queryKey: ['educatioanl_terms_list', searchParams.toString()],
      queryFn: () => getEducationalTermsListHttp(searchParams.toString()),
   })

   const onOpenRemoveTermModal = (data) => {
      setRemoveTermModal({
         isShow: true,
         data,
      })
   }

   const onOpenEditTermModal = (data) => {
      setEditTermModal({
         isShow: true,
         data,
      })
   }

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

   return (
      <>
         <Table
            rowKey={(record) => record.id}
            loading={isLoadingTermData}
            headerList={getTableData(onOpenEditTermModal, onOpenRemoveTermModal)}
            pagination={{
               pageSize: 10, // Set the number of items per page
               total: termsData?.meta?.total_records, // Set the total number of items
               onChange: (page) => {
                  push(pathName + '?' + createQueryString({ page }))
               },
            }}
            data={termsData?.data}
         />

         <Modal
            isShow={editTermModal.isShow}
            onClose={() =>
               setEditTermModal({
                  isShow: false,
                  data: {},
               })
            }
            maskClosable={false}
         >
            <EditTermsModal
               onClose={() =>
                  setEditTermModal({
                     isShow: false,
                     data: {},
                  })
               }
               data={editTermModal.data}
            />
         </Modal>
         <RemoveTermsModal
            isShow={removeTermModal.isShow}
            onClose={() =>
               setRemoveTermModal({
                  isShow: false,
                  data: {},
               })
            }
            data={removeTermModal.data}
         />
      </>
   )
}

export default TermsTable
