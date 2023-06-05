import useFetch from "./../hooks/useFetch";

import { AxiosResponse } from "axios";

const endPoint = "companies";

export async function GetCompanyList({
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

export async function CreateNewCompany({
  token,
  company_address,
  company_category,
  company_name,
  company_number,
  company_phone,
  company_postal_code,
  company_registry_code,
  company_type,
  first_name,
  last_name,
  email,
  national_code,
  phone_number,
  username,
  faculty_id,
}: {
  token: string;
  company_address: string;
  company_category: string;
  company_name: string;
  company_number: string;
  company_phone: string;
  company_postal_code: string;
  company_registry_code: string;
  company_type: string;
  first_name: string;
  last_name: string;
  email: string;
  national_code: string;
  phone_number: string;
  username: string;
  faculty_id: number;
}): Promise<AxiosResponse<any>> {
  const apiCall = await useFetch().post(
    `${endPoint}`,
    {
      company_address,
      company_category,
      company_name,
      company_number,
      company_phone,
      company_postal_code,
      company_registry_code,
      company_type,
      first_name,
      last_name,
      email,
      national_code,
      phone_number,
      username,
      faculty_id,
    },
    {
      headers: {
        Authorization: `Bearer ` + token,
      },
    }
  );

  return apiCall;
}
