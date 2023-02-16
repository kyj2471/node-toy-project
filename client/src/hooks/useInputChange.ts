// handle input change logic
export const useInputChange = (listArr: any, text: string, id: any) => {
  const updatedInput: any = listArr.find((input: any) => input.id === id);
  updatedInput.value = text;
  const result = listArr.map((input: any) =>
    input.id === id ? updatedInput : input
  );
  return result;
};
