import useFetch from "./../hooks/useFetch";

import { AxiosResponse } from "axios";

const endPoint = "faculties";

export async function GetFacultiesList({
  token,
}: {
  token: string;
}): Promise<AxiosResponse<any>> {
  const apiCall = await useFetch().get(`${endPoint}`, {
    headers: {
      Authorization: `Bearer ` + token,
    },
  });

  return apiCall;
}
