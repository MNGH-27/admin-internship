export const extractStatus = (verifiedStatus) => {
   switch (verifiedStatus) {
      case '1':
         return ''
      case '2':
         return '(تایید شده)'
      case '3':
         return '(رد شده)'
      default:
         return ''
   }
}
