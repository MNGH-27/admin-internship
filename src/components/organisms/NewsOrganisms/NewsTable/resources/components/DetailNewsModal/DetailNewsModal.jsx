import { Image, Modal } from '@atom/index'

const DetailNewsModal = ({ data, onClose, isShow }) => {
   return (
      <Modal className="!w-full max-w-3xl mx-5" isShow={isShow} onClose={onClose}>
         <div className="flex flex-col items-center justify-center gap-5 overflow-auto">
            <Image className="rounded-lg" width={300} height={150} src={data?.image ?? ''} alt={'news title'} />
            <span className="font-semibold text-lg">{data?.title}</span>
            <p>{data?.body}</p>
         </div>
      </Modal>
   )
}

export default DetailNewsModal
