export const extractTitle = (pathName) => {
   if (pathName.includes('initial-registration')) {
      return 'پیش ثبت نام'
   } else if (pathName.includes('pre-registration')) {
      return 'ثبت نام اولیه'
   } else if (pathName.includes('forms')) {
      return 'فرم ها دانشجویان'
   }
   return ''
}
