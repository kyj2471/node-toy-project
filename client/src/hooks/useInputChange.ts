// handle input change logic
export const useInputChange = (list: any, text: any, id: any) => {
  const updatedInput: any = list.find((input: any) => input.id === id);
  updatedInput.value = text;
  const result = list.map((input: any) =>
    input.id === id ? updatedInput : input
  );
  return result;
};
