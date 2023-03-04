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

export async function GetInitialRegestrationRegectInfo({
  token,
  student_id,
}: {
  token: string;
  student_id: number;
}): Promise<AxiosResponse<any>> {
  const apiCall = await useFetch().get(
    `${baseURL}/${student_id}/initReg/desc`,
    {
      headers: {
        Authorization: `Bearer ` + token,
      },
    }
  );

  return apiCall;
}
//form
export async function GetStudentsFormList({
  token,
  filter,
}: {
  token: string;
  filter: string;
}): Promise<AxiosResponse<any>> {
  const apiCall = await useFetch().get(`${baseURL}/forms?${filter}`, {
    headers: {
      Authorization: `Bearer ` + token,
    },
  });

  return apiCall;
}

export async function GetSingleStudentsForm({
  token,
  id,
}: {
  token: string;
  id: number;
}): Promise<AxiosResponse<any>> {
  const apiCall = await useFetch().get(`${baseURL}/forms/${id}`, {
    headers: {
      Authorization: `Bearer ` + token,
    },
  });

  return apiCall;
}

export async function GetStudentForm({
  token,
  formStage,
  id,
}: {
  token: string;
  formStage: string;
  id: number;
}): Promise<AxiosResponse<any>> {
  const apiCall = await useFetch().get(`${baseURL}/forms/${id}/${formStage}`, {
    headers: {
      Authorization: `Bearer ` + token,
    },
  });

  return apiCall;
}

export async function RejectForm2({
  token,
  id,
}: {
  token: string;
  id: number;
}): Promise<AxiosResponse<any>> {
  const apiCall = await useFetch().put(
    `${baseURL}/forms/${id}/form2/unverify`,
    {},
    {
      headers: {
        Authorization: `Bearer ` + token,
      },
    }
  );

  return apiCall;
}

export async function VerifyForm2({
  token,
  id,
}: {
  token: string;
  id: number;
}): Promise<AxiosResponse<any>> {
  const apiCall = await useFetch().put(
    `${baseURL}/forms/${id}/form2/verify`,
    {},
    {
      headers: {
        Authorization: `Bearer ` + token,
      },
    }
  );

  return apiCall;
}
