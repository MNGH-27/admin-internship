import { ErrorMessage } from '@hookform/error-message'
const FormContainer = ({ label, name, children, errors, className = '' }) => {
   return (
      <div className={'flex flex-col items-start justify-start gap-y-1 w-full ' + className}>
         <label className="text-sm">{label}</label>
         {children}
         <ErrorMessage
            errors={errors}
            className="text-red-700 text-sm font-medium"
            name={name}
            render={({ message }) => <p className="text-sm font-medium text-red-700">{message}</p>}
         />
      </div>
   )
}

export default FormContainer
