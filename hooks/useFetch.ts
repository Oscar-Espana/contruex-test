import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export const useFetch = <T>({
  url,
  defaultValue,
}: {
  url: string;
  defaultValue: T;
}) => {
  const { data, error, mutate } = useSWR<T>(url, fetcher);

  return {
    reload: mutate,
    data: data || defaultValue,
    isLoading: !error && !data,
    isError: error,
  };
};
