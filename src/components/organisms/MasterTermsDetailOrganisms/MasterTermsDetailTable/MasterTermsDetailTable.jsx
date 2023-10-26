'use client'

import { Table } from '@atom/index'
import { getMasterEducationalTermsListHttp } from '@core/services'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useCallback } from 'react'
import { useQuery } from 'react-query'
import { getTableData } from './resources'

const MasterTermsDetailTable = ({ termId }) => {
    const searchParams = useSearchParams()
    const pathName = usePathname()
    const { push } = useRouter()


    const { data: masterList, isLoading: isLoadingMaster } = useQuery({
        queryKey: ['master__terms_detail', searchParams.toString()],
        queryFn: () => getMasterEducationalTermsListHttp(termId, searchParams.toString()),
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
        <Table
            rowKey={(record) => record.id}
            loading={isLoadingMaster}
            headerList={getTableData()}
            pagination={{
                pageSize: 5, // Set the number of items per page
                total: masterList?.meta?.total_records, // Set the total number of items
                onChange: (page) => {
                    push(pathName + "?" + createQueryString({ page }))
                },
            }}
            data={masterList?.data}
        />
    )
}

export default MasterTermsDetailTable