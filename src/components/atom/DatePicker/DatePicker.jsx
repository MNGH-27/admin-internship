import ZamanPicker from 'react-multi-date-picker'
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'
import { forwardRef } from 'react'
const DatePicker = forwardRef(({ ...rest }, ref) => {
   return (
      <ZamanPicker
         inputClass="p-2 w-full rounded-md"
         containerClassName="w-full border rounded-md"
         calendar={persian}
         locale={persian_fa}
         {...rest}
         ref={ref}
      />
   )
})

DatePicker.displayName = 'DatePicker'

export default DatePicker
