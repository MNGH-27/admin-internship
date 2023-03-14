const AddMaster = () => {
  return (
    <div>
      <div className="flex flex-col items-start w-full gap-3 my-16 ">
        <span className="text-2xl font-semibold">اضافه کردن استاد جدید</span>
        <span className="text-lg font-medium">
          اطلاعات مورد نیاز هر استاد را پر کنید
        </span>
      </div>
      <div className="grid grid-cols-4 gap-6">
        <div className="flex flex-col items-start gap-1">
          <label className="text-lg font-medium">نام</label>
          <input
            className="placeholder:text-sm p-2 border-2 focus:border-blue-200 duration-200 rounded-md outline-none w-full"
            placeholder="نام خود را وارد کنید . . ."
            type="text"
          />
        </div>
        <div className="flex flex-col items-start gap-1">
          <label className="text-lg font-medium">نام خانوادگی</label>
          <input
            className="placeholder:text-sm p-2 border-2 focus:border-blue-200 duration-200 rounded-md outline-none w-full"
            placeholder="نام خانوادگی خود را وارد کنید . . ."
            type="text"
          />
        </div>
        <div className="flex flex-col items-start gap-1">
          <label className="text-lg font-medium">ایمیل</label>
          <input
            className="placeholder:text-sm p-2 border-2 focus:border-blue-200 duration-200 rounded-md outline-none w-full"
            placeholder="ایمیل خود را وارد کنید . . ."
            type="text"
          />
        </div>
        <div className="flex flex-col items-start gap-1">
          <label className="text-lg font-medium">کدملی</label>
          <input
            className="placeholder:text-sm p-2 border-2 focus:border-blue-200 duration-200 rounded-md outline-none w-full"
            placeholder="کدملی خود را وارد کنید . . ."
            type="text"
          />
        </div>
        <div className="flex flex-col items-start gap-1">
          <label className="text-lg font-medium">شماره تلفن</label>
          <input
            className="placeholder:text-sm p-2 border-2 focus:border-blue-200 duration-200 rounded-md outline-none w-full"
            placeholder="شماره تلفن خود را وارد کنید . . ."
            type="text"
          />
        </div>
        <div className="flex flex-col items-start gap-1">
          <label className="text-lg font-medium">کد پرسنلی</label>
          <input
            className="placeholder:text-sm p-2 border-2 focus:border-blue-200 duration-200 rounded-md outline-none w-full"
            placeholder="کدپرسنلی خود را وارد کنید . . ."
            type="text"
          />
        </div>
        <div className="flex flex-col items-start gap-1">
          <label className="text-lg font-medium">دانشکده</label>
          <input
            className="placeholder:text-sm p-2 border-2 rounded-md outline-none w-full"
            placeholder=""
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default AddMaster;
