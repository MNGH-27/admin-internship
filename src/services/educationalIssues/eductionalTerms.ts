import useFetch from "./../../hooks/useFetch";

import { AxiosResponse } from "axios";

//helper
import { fixDateFormat } from "../../helper";

const endPoint = "educational/terms";

export async function GetAllEducationalTerms({
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

export async function CreatNewTerm({
  token,
  name,
  start_date,
  end_date,
}: {
  token: string;
  name: string;
  start_date: Date | null;
  end_date: Date | null;
}): Promise<AxiosResponse<any>> {
  const apiCall = await useFetch().post(
    `${endPoint}`,
    {
      name,
      start_date: fixDateFormat(start_date),
      end_date: fixDateFormat(end_date),
    },
    {
      headers: {
        Authorization: `Bearer ` + token,
      },
    }
  );

  return apiCall;
}

export async function EditTerm({
  token,
  name,
  start_date,
  end_date,
  id,
}: {
  token: string;
  name: string;
  start_date: Date;
  end_date: Date;
  id: number;
}): Promise<AxiosResponse<any>> {
  const apiCall = await useFetch().put(
    `${endPoint}/${id}`,
    {
      name,
      start_date: fixDateFormat(start_date),
      end_date: fixDateFormat(end_date),
    },
    {
      headers: {
        Authorization: `Bearer ` + token,
      },
    }
  );

  return apiCall;
}

export async function DeleteTerm({
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

export async function GetSingleTermStudentsList({
  token,
  filter,
  termId,
}: {
  token: string;
  filter: string;
  termId: string;
}): Promise<AxiosResponse<any>> {
  const apiCall = await useFetch().get(
    `${endPoint}/${termId}/students?${filter}`,
    {
      headers: {
        Authorization: `Bearer ` + token,
      },
    }
  );

  return apiCall;
}

export async function GetSingleTermMasterList({
  token,
  filter,
  termId,
}: {
  token: string;
  filter: string;
  termId: string;
}): Promise<AxiosResponse<any>> {
  const apiCall = await useFetch().get(
    `${endPoint}/${termId}/masters?${filter}`,
    {
      headers: {
        Authorization: `Bearer ` + token,
      },
    }
  );

  return apiCall;
}

export async function GetSingleTerm({
  token,
  termId,
}: {
  token: string;
  termId: string;
}): Promise<AxiosResponse<any>> {
  const apiCall = await useFetch().get(`${endPoint}/${termId}`, {
    headers: {
      Authorization: `Bearer ` + token,
    },
  });

  return apiCall;
}
