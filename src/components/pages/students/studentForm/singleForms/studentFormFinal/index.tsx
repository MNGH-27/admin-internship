import React from "react";

const StudentFormFinal: React.FC = () => {
  return (
    <>
      <div className="w-full text-[#101114] font-semibold flex flex-col items-start gap-3 mb-16">
        <p>
          <span>شماره:</span>
        </p>
        <p>
          <span>تاریخ:</span>
        </p>
        <p>
          <span>پیوست:</span>
        </p>
      </div>
      <div className="text-xl font-semibold text-[#101114]">
        <p className="mb-3">دانشگاه تربیت دبیر شهید رجایی</p>
        <p>موضوع: گواهی انجام کارآموزی آقای نام دانشجو</p>
      </div>
      <p className="mt-7 mb-16 text-lg text-[#5F5F61]">
        با سلام <br />
        بازگشت به نامه شماره 01/1871 مورخ 1401/04/07 بدینوسیله گواهی می شود جناب
        آقای نام دانشجو به شماره دانشجویی 3981231008 از تاریخ 1401/04/25 لغایت
        1401/05/15 به مدت 240 ساعت دوره کارآموزی خود را در شرکت نام شرکت با
        موفقیت گذرانده است. <br />
        این گواهی بنا به درخواست نامبرده جهت ارائه به آن دانشگاه صادر گردیده و
        فاقد هرگونه اعتبار دیگری است.
      </p>
      <p className="flex flex-col items-end justify-center text-center my-36 text-xl text-[#101114]">
        <span className="font-semibold mb-4">نام سرپرست کارآموزی</span>
        <span>سرپرست کارآموزی در صنعت</span>
      </p>
      <div className="flex items-center justify-end gap-5 w-full mb-10">
        <button className="px-6 py-3 font-medium rounded-lg border-2 border-transparent text-[#E73F3F] bg-[#FCEAEA] hover:text-[#FCEAEA] hover:bg-[#E73F3F] duration-200">
          رد نامه اتمام کارآموزی{" "}
        </button>
        <button className="px-6 py-3 font-medium rounded-lg text-white border-2 border-[#1650CF] bg-[#1650CF] hover:text-[#1650CF] hover:bg-white duration-200">
          تایید نامه اتمام کارآموزی
        </button>
      </div>
    </>
  );
};

export default StudentFormFinal;
