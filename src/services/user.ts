import useFetch from "./../hooks/useFetch";

import axios from "axios";

//interface

//axios interface
import { AxiosResponse } from "axios";

//custom interface

///////

export async function GetUserData({
  token,
}: {
  token: string;
}): Promise<AxiosResponse<any>> {
  const apiCall = await axios.get("https://karamoozi.kbapis.ir/api/user", {
    headers: {
      Authorization: `Bearer ` + token,
    },
  });
  return apiCall;
}
