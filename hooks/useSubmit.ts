import { useState } from "react";

function useSubmit<Params, Response>({
  promise,
  onError,
  onSuccess,
}: {
  promise: (params: Params) => Promise<Response>;
  onSuccess?: (data: Awaited<ReturnType<typeof promise>>) => void;
  onError?: (error: string) => void;
}) {
  const [isLoading, setIsLoading] = useState(false);

  const submit = async (params: Params) => {
    setIsLoading(true);
    try {
      const result = await promise(params);
      onSuccess && onSuccess(result);
    } catch (e) {
      const errorMessage =
        e instanceof Error ? e.message : "Ha ocurrido un error inesperado";
      onError && onError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    submit,
  };
}

export default useSubmit;
