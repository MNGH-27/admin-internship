import { Table } from '@atom/index'

import { TABLE_HEADER, DUMMY_DATA } from './resources'

const StudentIntialRegistrationTable = () => {
  return <Table headerList={TABLE_HEADER} data={DUMMY_DATA} />
}

export default StudentIntialRegistrationTable
