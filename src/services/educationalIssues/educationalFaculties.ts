import useFetch from "./../../hooks/useFetch";

import { AxiosResponse } from "axios";

const endPoint = "educational/faculties";

export async function GetAllEducationalFacultiesList({
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

export async function CreatNewFaculty({
  token,
  name,
}: {
  token: string;
  name: string;
}): Promise<AxiosResponse<any>> {
  const apiCall = await useFetch().post(
    `${endPoint}`,
    {
      name,
    },
    {
      headers: {
        Authorization: `Bearer ` + token,
      },
    }
  );

  return apiCall;
}

export async function EditFaculty({
  token,
  name,
  id,
}: {
  token: string;
  name: string;
  id: number;
}): Promise<AxiosResponse<any>> {
  const apiCall = await useFetch().put(
    `${endPoint}/${id}`,
    {
      name,
    },
    {
      headers: {
        Authorization: `Bearer ` + token,
      },
    }
  );

  return apiCall;
}

export async function DeleteFaculty({
  token,
  id,
}: {
  token: string;
  id: number;
}): Promise<AxiosResponse<any>> {
  const apiCall = await useFetch().delete(`${endPoint}/${id}`, {
    headers: {
      Authorization: `Bearer ` + token,
    },
  });

  return apiCall;
}
