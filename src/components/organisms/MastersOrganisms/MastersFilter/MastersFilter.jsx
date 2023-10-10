import { Button, Input, Select } from '@atom/index'
import { CiSearch } from 'react-icons/ci'
import { GiSettingsKnobs } from 'react-icons/gi'

const MastersFilter = () => {
  return (
    <div className="w-full">
      <p className="mb-5 text-xl font-semibold">لیست اساتید کارآموزی</p>
      <div className="flex items-center justify-start text-[#5F5F61] w-full">
        <GiSettingsKnobs size={24} />
        <p>مرتب سازی براساس:</p>
      </div>
      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-start gap-5 mt-5">
        <div className="flex flex-col items-start gap-2 w-32">
          <label className="text-[#8B91A7] text-xs">سال ورود</label>
          <Select
            className="w-full"
            selectList={[
              {
                value: 'asd',
                label: 'asdf',
              },
            ]}
            // value={JSON.stringify(yearIntranceContainer)}
            // onChange={(e) =>
            //   setyearIntranceContainer(JSON.parse(e.target.value))
            // }
          />
        </div>
        <div className="flex flex-col items-start gap-2 w-32">
          <label className="text-[#8B91A7] text-xs">دانشکده</label>
          <Select
          // value={JSON.stringify(facultiesIntranceContainer)}
          // onChange={(e) =>
          //   setfacultiesIntranceContainer(JSON.parse(e.target.value))
          // }
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[#8B91A7] text-xs">جستجو </label>
          <Input
            //   ref={searchFieldContainer}
            placeholder="جستجو دانشجو . . ."
          />
        </div>
        <Button
          // onClick={onSetSearchParamsHandler}
          type="primary"
          icon={<CiSearch size={24} />}
          className="h-auto py-2 px-4"
        >
          جستجو
        </Button>
      </div>
    </div>
  )
}

export default MastersFilter
