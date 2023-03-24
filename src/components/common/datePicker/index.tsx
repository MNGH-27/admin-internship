import React, { useState, useRef, useEffect } from "react";
import moment from "moment-jalaali";

//svg
import { ReactComponent as ArrowLeftSvg } from "./../../../assets/icons/svg/arrow-circle-right.svg";
import { ReactComponent as CalendarSvg } from "./../../../assets/icons/svg/calendar.svg";

const weekdays = [
  "شنبه",
  "یک‌شنبه",
  "دوشنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنج‌شنبه",
  "آدینه",
];

//interface
interface AdminCalendarProps {
  selectedDay: Date | null;
  selectDayHandler: (target: string, value: Date) => void;
  target: string;
  calendarCotainerClass?: string;
  calendarInputClass?: string;
}

const AdminCalendar: React.FC<AdminCalendarProps> = ({
  selectedDay,
  target,
  calendarInputClass,
  calendarCotainerClass,
  selectDayHandler,
}) => {
  moment.loadPersian({ usePersianDigits: true });

  const calendarRef = useRef<HTMLDivElement>(document.createElement("div"));

  const [date, setDate] = useState(moment());
  const [isShowCalendar, setIsShowCalendar] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      //check if use clicked outside of component
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        //check if we show calendar then close it
        if (isShowCalendar === true) {
          //we are showing calendar , close it !!
          setIsShowCalendar(false);
        }
      }
    }

    //add this event to main document
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      //remove it in umount component
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isShowCalendar]);

  const renderCells = () => {
    let currentDay = date.clone().startOf("jMonth");
    const endDate = date.clone().endOf("jMonth");

    const days = [];

    //loop until reach to end day of that month
    while (currentDay.jDate() !== endDate.jDate()) {
      //loop on weeks , to find current days name
      for (let i = 0; i < 7; i++) {
        //check if we be in weekdays[i]
        if (weekdays[i] === currentDay.format("ddd")) {
          //we are in weekdays[i] add to days list with handler
          const day = (
            <div
              data-value={currentDay.clone()}
              className={`flex items-center justify-center h-7 w-7 rounded-md col-span-1 duration-200 ${
                moment(selectedDay).format("YYYY/MM/DD") ===
                moment(currentDay).format("YYYY/MM/DD")
                  ? "bg-[#4B429F] text-white"
                  : "hover:bg-[#4B429F]/10"
              }`}
            >
              {currentDay.jDate()}
            </div>
          );
          days.push(day);
          //check if we have reached to endDate
          if (currentDay.jDate() === endDate.jDate()) {
            break;
          }
          //go to next day
          currentDay = currentDay.add(1, "day");
        } else {
          //we dont have day in this month in this selected day of week ,
          //create empty div , add to days list
          const day = <div className="col-span-1"></div>;
          days.push(day);
        }
      }
    }

    return days.map((item, index) => (
      <button
        className="w-fit mx-auto"
        key={index}
        onClick={(e) => {
          selectDayHandler(target, item.props["data-value"]);
          setIsShowCalendar(false);
        }}
      >
        {item}
      </button>
    ));
  };

  return (
    <div ref={calendarRef} className={`${calendarCotainerClass} relative`}>
      <button
        onClick={(e) => {
          if (!isShowCalendar) {
            setIsShowCalendar(true);
          }
        }}
        className={`${calendarInputClass} flex items-center justify-start gap-1  sm:gap-2 w-full text-sm sm:text-base p-1 sm:p-2 rounded-lg border-2 border-[#E6EAEE]`}
      >
        <CalendarSvg className="text-[#4B429F] w-10" />

        {selectedDay ? (
          moment(selectedDay).format("dddd, jDD jMMMM ماه, jYYYY")
        ) : (
          <span className="text-sm text-gray-400 truncate">
            تاریخ مورد نظر خود را انتخاب کنید
          </span>
        )}
      </button>
      <div
        className={`bg-white z-20 absolute w-[250px] rounded-xl shadow-2xl overflow-hidden duration-500 top-12 ${
          isShowCalendar ? "h-fit" : "h-0"
        }`}
      >
        <div className="flex items-center justify-between w-full p-3">
          <button
            className="text-[#4B429F]"
            onClick={() => {
              setDate((prevState) => moment(prevState.subtract(1, "jMonth")));
            }}
          >
            <ArrowLeftSvg />
          </button>
          <button>{date.format("jMMMM ماه jYYYY")}</button>
          <button
            className="text-[#4B429F]"
            onClick={() => {
              setDate((prevState) => moment(prevState.add(1, "jMonth")));
            }}
          >
            <ArrowLeftSvg className="rotate-180" />
          </button>
        </div>
        <hr />
        <div className="flex flex-col p-3 gap-1">
          <div className="grid grid-cols-7 gap-2 text-[#B9B9B9] text-[9px]">
            {weekdays.map((day) => (
              <div className="text-center" key={day}>
                {day}
              </div>
            ))}
          </div>
          <div className="w-full grid grid-cols-7 gap-y-2 text-xs">
            {renderCells()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCalendar;
