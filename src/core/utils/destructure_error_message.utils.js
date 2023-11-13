export const DestructureErrorMessage = ({ setFieldError, error }) => {
   // Handle error response
   if (typeof error === 'object') {
      // Loop through the errors object and setFieldError for each field
      Object.keys(error).forEach((field) => {
         if (Array.isArray(error[field])) {
            // Set the first error message from the array
            setFieldError(field, error[field][0])
         }
      })
   }
}
