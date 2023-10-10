import { StudentFilter, StudentTitle } from './resources'

const StudentLayout = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 w-full">
      <StudentTitle />
      <StudentFilter />
    </div>
  )
}

export default StudentLayout
