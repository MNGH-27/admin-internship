'use client'

import { useState } from 'react'
import { NewsFilter, NewsFormModal, NewsTable } from '@organisms/NewsOrganisms'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { Button, Modal } from '@atom/index'

const NewsTemplate = () => {
   const [isShowAddNews, setIsShowAddNews] = useState(false)

   return (
      <>
         <div className="flex flex-col sm:flex-row items-end space-y-3 mb-5">
            <NewsFilter />

            <Button onClick={() => setIsShowAddNews(true)} type="primary" className="h-auto py-2.5">
               <AiOutlineUserAdd size={20} />
               اضافه کردن خبر
            </Button>
         </div>

         <NewsTable />

         <Modal className="!w-full !max-w-4xl mx-5" isShow={isShowAddNews} onClose={() => setIsShowAddNews(false)}>
            <NewsFormModal onClose={() => setIsShowAddNews(false)} />
         </Modal>
      </>
   )
}

export default NewsTemplate
