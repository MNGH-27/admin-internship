'use client'

import { Modal, Table } from '@atom/index'
import { useQuery } from 'react-query'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useState } from 'react'
import { DetailNewsModal, EditNewsModal, RemoveNewsModal, getTableData } from './resources'
import { getNewsList } from '@core/services/apis/news/get_news_list.api'

const NewsTable = () => {
   const searchParams = useSearchParams()
   const pathName = usePathname()
   const { push } = useRouter()

   const [removeModal, setRemoveModal] = useState({
      isShow: false,
      data: {},
   })
   const [detailModal, setDetailModal] = useState({
      isShow: false,
      data: {},
   })
   const [editModal, setEditModal] = useState({
      isShow: false,
      data: {},
   })

   const { data: newsList, isLoading: isLoadingNewsList } = useQuery({
      queryKey: ['news_list', searchParams.toString()],
      queryFn: () => getNewsList(searchParams.toString()),
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

   const onOpenRemoveModal = (data) => {
      setRemoveModal({
         isShow: true,
         data,
      })
   }

   const onOpenDetailModal = (data) => {
      setDetailModal({
         isShow: true,
         data,
      })
   }

   const onOpenEditModal = (data) => {
      setEditModal({
         isShow: true,
         data,
      })
   }

   return (
      <>
         <Table
            rowKey={(record) => record.id}
            loading={isLoadingNewsList}
            headerList={getTableData(onOpenRemoveModal, onOpenDetailModal, onOpenEditModal)}
            pagination={{
               pageSize: 10, // Set the number of items per page
               total: newsList?.meta?.total_records, // Set the total number of items
               onChange: (page) => {
                  push(pathName + '?' + createQueryString({ page }))
               },
            }}
            data={newsList?.data}
         />

         <RemoveNewsModal
            isShow={removeModal.isShow}
            onClose={() =>
               setRemoveModal({
                  isShow: false,
                  data: {},
               })
            }
            data={removeModal.data}
         />

         <DetailNewsModal
            isShow={detailModal.isShow}
            onClose={() =>
               setDetailModal({
                  isShow: false,
                  data: {},
               })
            }
            data={detailModal.data}
         />

         <Modal
            className="!w-full !max-w-4xl mx-5"
            isShow={editModal.isShow}
            onClose={() =>
               setEditModal({
                  isShow: false,
                  data: {},
               })
            }
         >
            <EditNewsModal
               onClose={() =>
                  setEditModal({
                     isShow: false,
                     data: {},
                  })
               }
               data={editModal.data}
            />
         </Modal>
      </>
   )
}

export default NewsTable
