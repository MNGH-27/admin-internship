import useFetch from "./../hooks/useFetch";

import { AxiosResponse } from "axios";

const endPoint = "master";

export async function GetMastersList({
  token,
  filter,
}: {
  token: string;
  filter: string;
}): Promise<AxiosResponse<any>> {
  const apiCall = await useFetch().get(`${endPoint}?${filter}`, {
    headers: {
      Authorization: `Bearer ` + token,
    },
  });

  return apiCall;
}
