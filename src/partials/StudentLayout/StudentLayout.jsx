import { StudentFilter, StudentTitle } from './resources'

const StudentLayout = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 w-full mb-10">
      <StudentTitle />
      <StudentFilter />
      {children}
    </div>
  )
}

export default StudentLayout
