import useFetch from "./../hooks/useFetch";

//interfaces
import { AxiosResponse } from "axios";
import { facultiesListItemType } from "../types";

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

export async function CreateNewMaster({
  token,
  first_name,
  last_name,
  email,
  national_code,
  personal_code,
  faculty,
  phone_number,
}: {
  token: string;
  first_name: string;
  last_name: string;
  email: string;
  national_code: string;
  phone_number: string;
  faculty: facultiesListItemType;
  personal_code: string;
}): Promise<AxiosResponse<any>> {
  const apiCall = await useFetch().post(
    `${endPoint}`,
    {
      first_name,
      last_name,
      email,
      personal_code,
      national_code,
      phone_number,
      faculty_id: faculty.id,
    },
    {
      headers: {
        Authorization: `Bearer ` + token,
      },
    }
  );

  return apiCall;
}

export async function DeleteMaster({
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

export async function GetSingleMasterEdit({
  token,
  id,
}: {
  token: string;
  id: number;
}): Promise<AxiosResponse<any>> {
  const apiCall = await useFetch().get(`${endPoint}/${id}/edit`, {
    headers: {
      Authorization: `Bearer ` + token,
    },
  });

  return apiCall;
}

export async function EditMaster({
  token,
  first_name,
  last_name,
  email,
  national_code,
  personal_code,
  faculty,
  phone_number,
  id,
}: {
  token: string;
  first_name: string;
  last_name: string;
  email: string;
  national_code: string;
  phone_number: string;
  faculty: facultiesListItemType;
  personal_code: string;
  id: number;
}): Promise<AxiosResponse<any>> {
  const apiCall = await useFetch().put(
    `${endPoint}/${id}`,
    {
      first_name,
      last_name,
      email,
      personal_code,
      national_code,
      phone_number,
      faculty_id: faculty.id,
    },
    {
      headers: {
        Authorization: `Bearer ` + token,
      },
    }
  );

  return apiCall;
}
