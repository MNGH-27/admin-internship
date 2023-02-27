import { useSearchParams } from "react-router-dom";

//interface
type SearchParams = Record<string, any>;

export const useCustomSearchParams = (): [
  SearchParams,
  (params: SearchParams) => void
] => {
  const [search, setSearch] = useSearchParams();
  const searchAsObject = Object.fromEntries(new URLSearchParams(search));
  return [searchAsObject, setSearch];
};
