export const extractTitle = (pathName) => {
  if (pathName.includes('initial-registration')) {
    return 'پیش ثبت نام'
  } else if (pathName.includes('pre-registration')) {
    return 'ثبت نام اولیه'
  }
  return ''
}
