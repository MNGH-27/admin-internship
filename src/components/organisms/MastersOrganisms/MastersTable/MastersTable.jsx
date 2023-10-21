'use client'

import { useCallback, useState } from 'react'

import { Table } from '@atom/index'

import { useQuery } from 'react-query'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { getTableData, EditMasterModal, RemoveMasterModal } from './resources'
import { getMasterListHttp } from '@core/services'

const MastersTable = () => {
  const searchParams = useSearchParams()
  const pathName = usePathname()
  const { push } = useRouter()

  const [removeMaster, setRemoveMaster] = useState({
    isShow: false,
    data: {},
  })

  const [editMaster, setEditMaster] = useState({
    isShow: false,
    data: {},
  })

  const { data: masterList, isLoading: isLoadingMasterList } = useQuery({
    queryKey: ['master_list', searchParams.toString()],
    queryFn: () => getMasterListHttp(searchParams.toString()),
  })

  const onOpenRemoveMasterModal = (data) => {
    setRemoveMaster({
      isShow: true,
      data,
    })
  }

  const onOpenEditMasterModal = (data) => {
    setEditMaster({
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
        loading={isLoadingMasterList}
        headerList={getTableData(
          onOpenRemoveMasterModal,
          onOpenEditMasterModal,
        )}
        pagination={{
          pageSize: 5, // Set the number of items per page
          total: masterList?.meta?.total_records, // Set the total number of items
          onChange: (page) => {
            push(pathName + "?" + createQueryString({ page }))
          },
        }}
        data={masterList?.data?.master}
      />

      <EditMasterModal
        isShow={editMaster.isShow}
        onClose={() => setEditMaster({ isShow: false })}
        data={editMaster.data}
      />

      <RemoveMasterModal
        isShow={removeMaster.isShow}
        onClose={() => setRemoveMaster({ isShow: false })}
        data={removeMaster.data}
      />
    </>
  )
}

export default MastersTable
