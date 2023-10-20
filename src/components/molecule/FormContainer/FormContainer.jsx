import { ErrorMessage } from 'formik'

const FormContainer = ({ label, name, children, className = '' }) => {
  return (
    <div
      className={
        'flex flex-col items-start justify-start gap-y-1 w-full ' + className
      }
    >
      <label className="text-sm">{label}</label>
      {children}
      <ErrorMessage
        className="text-red-700 text-sm font-medium"
        name={name}
        component="div"
      />
    </div>
  )
}

export default FormContainer
