import useFetch from "./../hooks/useFetch";
//interface

//axios interface
import { AxiosResponse } from "axios";

//custom interface

///////

const endPoint = "students";

export async function GetStudentBasicData({
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

export async function GetInitialRegestrationStundets({
  token,
  filter,
}: {
  token: string;
  filter: string;
}): Promise<AxiosResponse<any>> {
  const apiCall = await useFetch().get(`${endPoint}/initReg?${filter}`, {
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
    `${endPoint}/${student_id}/initReg/verify`,
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
    `${endPoint}/${student_id}/initReg/unverify`,
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
    `${endPoint}/${student_id}/initReg/desc`,
    {
      headers: {
        Authorization: `Bearer ` + token,
      },
    }
  );

  return apiCall;
}
//preRegestration

export async function GetPereregestrationStudents({
  token,
  filter,
}: {
  token: string;
  filter: string;
}): Promise<AxiosResponse<any>> {
  const apiCall = await useFetch().get(`${endPoint}/preReg?${filter}`, {
    headers: {
      Authorization: `Bearer` + token,
    },
  });

  return apiCall;
}

export async function PutUnVarifyStudentPreRegestration({
  token,
  student_id,
  detail,
}: {
  token: string;
  student_id: number;
  detail: string;
}): Promise<AxiosResponse<any>> {
  const apiCall = await useFetch().put(
    `${endPoint}/${student_id}/preReg/unverify`,
    { rejection_reason: detail },
    {
      headers: {
        Authorization: `Bearer ` + token,
      },
    }
  );

  return apiCall;
}

export async function PutVarifyStudentPreRegestration({
  token,
  student_id,
}: {
  token: string;
  student_id: number;
}): Promise<AxiosResponse<any>> {
  const apiCall = await useFetch().put(
    `${endPoint}/${student_id}/preReg/verify`,
    {},
    {
      headers: {
        Authorization: `Bearer ` + token,
      },
    }
  );

  return apiCall;
}

export async function GetStudentPreRegestrationDescription({
  token,
  student_id,
}: {
  token: string;
  student_id: number;
}): Promise<AxiosResponse<any>> {
  const apiCall = await useFetch().get(
    `${endPoint}/${student_id}/preReg/desc`,
    {
      headers: {
        Authorization: `Bearer ` + token,
      },
    }
  );

  return apiCall;
}

export async function GetPreregestrationRejectInfo({
  token,
  student_id,
}: {
  token: string;
  student_id: number;
}): Promise<AxiosResponse<any>> {
  const apiCall = await useFetch().get(
    `${endPoint}/${student_id}/preReg/desc`,
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
  const apiCall = await useFetch().get(`${endPoint}/forms?${filter}`, {
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
  const apiCall = await useFetch().get(`${endPoint}/forms/${id}`, {
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
  const apiCall = await useFetch().get(`${endPoint}/forms/${id}/${formStage}`, {
    headers: {
      Authorization: `Bearer ` + token,
    },
  });

  return apiCall;
}

export async function RejectSingleForm({
  token,
  formStage,
  id,
}: {
  token: string;
  formStage: string;
  id: number;
}): Promise<AxiosResponse<any>> {
  const apiCall = await useFetch().put(
    `${endPoint}/forms/${id}/${formStage}/unverify`,
    {},
    {
      headers: {
        Authorization: `Bearer ` + token,
      },
    }
  );

  return apiCall;
}

export async function VerifySingleForm({
  token,
  formStage,
  id,
}: {
  token: string;
  formStage: string;
  id: number;
}): Promise<AxiosResponse<any>> {
  const apiCall = await useFetch().put(
    `${endPoint}/forms/${id}/${formStage}/verify`,
    {},
    {
      headers: {
        Authorization: `Bearer ` + token,
      },
    }
  );

  return apiCall;
}

export async function GetSingleWeekOfForm({
  token,
  formId,
  id,
}: {
  token: string;
  formId: number;
  id: number;
}): Promise<AxiosResponse<any>> {
  const apiCall = await useFetch().get(
    `${endPoint}/forms/${id}/weekly_reports/${formId}`,
    {
      headers: {
        Authorization: `Bearer ` + token,
      },
    }
  );

  return apiCall;
}
