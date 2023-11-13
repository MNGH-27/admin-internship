export const convertEntranceYear = (entranceYear) => {
   //check if data is Array
   if (Array.isArray(entranceYear)) {
      return entranceYear.map((singleEntrance) => ({
         label: singleEntrance.entrance_year,
         value: singleEntrance.entrance_year,
      }))
   }

   //this is not array => return empty array
   return []
}

export const convertFacultyList = (facultyList) => {
   //check if data is Array
   if (Array.isArray(facultyList)) {
      return facultyList.map((singleFaculty) => ({
         label: singleFaculty.name,
         value: singleFaculty.id,
      }))
   }

   //this is not array => return empty array
   return []
}
