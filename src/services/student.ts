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

export async function GetInitialRegestrationStundets({
  token,
  filter,
}: {
  token: string;
  filter: string;
}): Promise<AxiosResponse<any>> {
  const apiCall = await useFetch().get(`${baseURL}/initReg?${filter}`, {
    headers: {
      Authorization: `Bearer ` + token,
    },
  });

  return apiCall;
}
export async function GetPereregestrationStudents({
  token,
  filter,
}: {
  token: string;
  filter: string;
}): Promise<AxiosResponse<any>> {
  const apiCall = await useFetch().get(`${baseURL}/preReg?${filter}`, {
    headers: {
      Authorization: `Bearer` + token,
    },
  });

  return apiCall;
}
export async function PutVarifyStudentInitialRegestration({
  token,
  student_id,
}: {
  token: string;
  student_id: number;
}): Promise<AxiosResponse<any>> {
  const apiCall = await useFetch().put(
    `${baseURL}/${student_id}/initReg/verify`,
    {},
    {
      headers: {
        Authorization: `Bearer ` + token,
      },
    }
  );

  return apiCall;
}

export async function PutUnVarifyStudentInitialRegestration({
  token,
  student_id,
  detail,
}: {
  token: string;
  student_id: number;
  detail: string;
}): Promise<AxiosResponse<any>> {
  const apiCall = await useFetch().put(
    `${baseURL}/${student_id}/initReg/unverify`,
    { rejection_reason: detail },
    {
      headers: {
        Authorization: `Bearer ` + token,
      },
    }
  );

  return apiCall;
}

export async function GetStudentsFormList({
  token,
}: {
  token: string;
}): Promise<AxiosResponse<any>> {
  const apiCall = await useFetch().get(`${baseURL}/forms`, {
    headers: {
      Authorization: `Bearer ` + token,
    },
  });

  return apiCall;
}
