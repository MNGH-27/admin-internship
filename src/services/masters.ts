import useFetch from "./../hooks/useFetch";

import { AxiosResponse } from "axios";

const endPoint = "master";

export async function GetMAstersList({
  token,
}: {
  token: string;
}): Promise<AxiosResponse<any>> {
  const apiCall = await useFetch().get(`${endPoint}/home`, {
    headers: {
      Authorization: `Bearer ` + token,
    },
  });

  return apiCall;
}
