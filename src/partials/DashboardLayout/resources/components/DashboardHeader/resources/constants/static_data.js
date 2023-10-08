import { BiHomeAlt2, BiUser } from 'react-icons/bi'
import { PiStudentFill } from 'react-icons/pi'
import { FaSitemap } from 'react-icons/fa6'
import { FaChalkboardTeacher } from 'react-icons/fa'
export const LINKS_LIST = [
  {
    name: 'home',
    value: 'خانه',
    icon: <BiHomeAlt2 size={16} />,
    path: '/',
  },
  {
    name: 'students',
    value: 'دانشجو',
    icon: <PiStudentFill size={16} />,
    path: '/students',
  },
  {
    name: 'teachers',
    value: 'اساتید',
    icon: <BiUser size={16} />,
    path: '/teachers',
  },
  {
    name: 'company',
    value: 'شرکت ها',
    icon: <FaSitemap size={16} />,
    path: '/company',
  },
  {
    name: 'Educational issues',
    value: 'مسائل آموزشی',
    icon: <FaChalkboardTeacher size={16} />,
    path: '/educational-issues',
  },
]
