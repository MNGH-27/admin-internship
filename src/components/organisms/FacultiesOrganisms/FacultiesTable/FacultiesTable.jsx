'use client'

import { useCallback, useState } from 'react'

import { Table } from '@atom/index'

import {
  DUMMY_DATA,
  getTableData,
  EditFacultiesModal,
  RemoveFacultiesModal,
} from './resources'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useQuery } from 'react-query'
import { getEducationalFacultiesListHttp } from '@core/services'

const FacultiesTable = () => {
  const searchParams = useSearchParams()
  const pathName = usePathname()
  const { push } = useRouter()


  const [editModal, setEditModal] = useState({
    isShow: false,
    data: {}
  })

  const [isShowRemoveFacultiesModal, setIsShowRemoveFacultiesModal] =
    useState(false)

  const onOpenDetailModal = (data) => {
    setEditModal({
      isShow: true,
      data
    })
  }

  const onOpenRemoveModal = () => {
    setIsShowRemoveFacultiesModal(true)
  }

  const { data: facultiesList, isLoading: isLoadingFaculties } = useQuery({
    queryKey: ['faculties_list', searchParams.toString()],
    queryFn: () => getEducationalFacultiesListHttp(searchParams.toString()),
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

  return (
    <>
      <Table
        rowKey={(record) => record.id}
        loading={isLoadingFaculties}
        headerList={getTableData(onOpenDetailModal, onOpenRemoveModal)}
        pagination={{
          pageSize: 5, // Set the number of items per page
          total: facultiesList?.meta?.total_records, // Set the total number of items
          onChange: (page) => {
            push(pathName + "?" + createQueryString({ page }))
          },
        }}
        data={facultiesList?.data}
      />

      <EditFacultiesModal
        isShow={editModal.isShow}
        onClose={() => setEditModal({
          isShow: false,
          data: []
        })}
        data={editModal.data}
      />

      <RemoveFacultiesModal
        isShow={isShowRemoveFacultiesModal}
        onClose={() => setIsShowRemoveFacultiesModal(false)}
      />
    </>
  )
}

export default FacultiesTable
