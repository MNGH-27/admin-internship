import Link from 'next/link'

const StudentTemplate = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-[#101114] text-2xl font-semibold mb-5 text-center md:text-right">
        دانشجویان
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <Link
          href={'/dashboard/students/initial-registration?verified=1'}
          className="px-6 py-5 flex flex-col items-center md:items-start justify-center gap-3 border-2 hover:border-[#4C526D] border-[#EEEEF2] rounded-md shadow-[0px_1px_2px_0px_rgba(24,24,28,0.04)] hover:shadow-[0px_1px_6px_0px_rgba(24,24,28,0.04)] duration-200 transition-all"
        >
          <span className="text-[#101114] font-semibold text-lg mb-2">
            ثبت نام اولیه ها
          </span>
          <div className="font-semibold text-sm space-y-2">
            <p className="flex items-center justify-start gap-2">
              <span className="text-[#52A86E]">12</span>

              <span className="text-[#4C526D]">دانشجو تایید شده</span>
            </p>
            <p className="flex items-center justify-start gap-2">
              <span className="text-[#E73F3F]">22</span>
              <span className="text-[#4C526D]">دانشجو های رد شده</span>
            </p>
          </div>
        </Link>
        <Link
          href={'/dashboard/students/pre-registration?verified=1'}
          className="flex flex-col items-center md:items-start justify-center gap-3 border-2 hover:border-[#4C526D] border-[#EEEEF2] rounded-md px-6 py-5 shadow-[0px_1px_2px_0px_rgba(24,24,28,0.04)] hover:shadow-[0px_1px_6px_0px_rgba(24,24,28,0.04)] duration-200 transition-all"
        >
          <span className="text-[#101114] font-semibold text-lg mb-2">
            پیش ثبت نام ها
          </span>
          <div className="font-semibold text-sm space-y-2">
            <p className="flex items-center justify-start gap-2">
              <span className="text-[#52A86E]">22</span>
              <span className="text-[#4C526D]">دانشجو تایید شده</span>
            </p>
            <p className="flex items-center justify-start gap-2">
              <span className="text-[#E73F3F]">12</span>
              <span className="text-[#4C526D]">دانشجو های رد شده</span>
            </p>
          </div>
        </Link>
        <Link
          href={'/students/form'}
          className="flex flex-col items-center md:items-start justify-center gap-3 border-2 hover:border-[#4C526D] border-[#EEEEF2] rounded-md px-6 py-5 shadow-[0px_1px_2px_0px_rgba(24,24,28,0.04)] hover:shadow-[0px_1px_6px_0px_rgba(24,24,28,0.04)] duration-200 transition-all"
        >
          <span className="text-[#101114] font-semibold text-lg mb-2">
            فرم ها
          </span>
          <div className="font-semibold text-sm flex flex-col items-start justify-center gap-y-3">
            <span className="text-[#4C526D]">فرم شماره دو ، سه ، چهار</span>
            <span className="text-[#4C526D]">تایید گزارش هفتگی</span>
            <span className="text-[#4C526D]">نامه تمام کارآموزی</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default StudentTemplate
