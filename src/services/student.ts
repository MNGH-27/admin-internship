import useFetch from "./../hooks/useFetch";
//interface

//axios interface
import { AxiosResponse } from "axios";

//custom interface

///////

const baseURL = "students";

export async function GetStudentBasicData({
  token,
}: {
  token: string;
}): Promise<AxiosResponse<any>> {
  const apiCall = await useFetch().get(`${baseURL}/home`, {
    headers: {
      Authorization: `Bearer ` + token,
    },
  });

  return apiCall;
}
