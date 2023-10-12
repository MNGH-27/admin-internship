import { EditCompanyTemplate } from '@template/index'

const EditCompanyModal = ({ params: { id } }) => {
  return <EditCompanyTemplate companyId={id} />
}

export default EditCompanyModal
