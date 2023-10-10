import Link from 'next/link'

const SingleStudentFormTemplate = ({ id }) => {
  return (
    <div className="flex items-start justify-center flex-col gap-10 ">
      <div>
        <p className="text-2xl font-semibold flex items-center justify-start gap-2">
          <span className="text-[#101114]">دانشجویان</span>
          <span className="text-[#5F5F61]">نام دانشجو</span>
        </p>
        <span className="text-xs text-[#5F5F61]">
          asdd به شماره دانشجویی 123 ورودی 1233/12/23 فرم های ذیل را برای تایید
          شدن پر کرده است.
        </span>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 w-full">
        <Link
          // key={index}
          href={`/students/form/singleform`}
          className={` flex flex-col items-center md:items-start justify-center gap-3 border-2 hover:border-[#4C526D] border-[#EEEEF2] rounded-md px-6 py-5 shadow-[0px_1px_2px_0px_rgba(24,24,28,0.04)] hover:shadow-[0px_1px_6px_0px_rgba(24,24,28,0.04)] duration-200 transition-all`}
        >
          <span className="text-[#101114] font-bold">asd</span>
          <div className="flex items-center gap-2 text-xs">
            <span className="text-[#4C526D]">asd</span>
            <span className={` rounded-md px-2 py-1`}>afasdq</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="text-[#4C526D]">توضیحات:</span>
            <span className="text-[#5F5F61]">وجود ندارد.</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default SingleStudentFormTemplate
