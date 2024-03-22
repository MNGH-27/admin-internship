import { forwardRef } from 'react'
//helper-package
import ZamanPicker from 'react-multi-date-picker'
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'

const DatePicker = forwardRef(({ value, onChange, ...rest }, ref) => {
   return (
      <div className="relative flex items-center justify-start w-full">
         <ZamanPicker
            inputClass="w-full border-2 border-[#E6EAEE] rounded-lg p-3 w-full"
            containerClassName="w-full"
            value={value}
            onChange={(date) => onChange(date.toDate())}
            calendar={persian}
            editable={false}
            onOpenPickNewDate={false}
            locale={persian_fa}
            {...rest}
         />
         {value && (
            <button
               onClick={() => onChange(null)}
               className="absolute left-2 w-4 h-4 shrink-0 !text-primary-450 hover:!text-secondary-400 duration-300"
            >
               <Close />
            </button>
         )}
      </div>
   )
})

DatePicker.displayName = 'DatePicker'

export default DatePicker
