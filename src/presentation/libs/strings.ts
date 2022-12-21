export const cutBase64Result = (fileBase64: string) => {
  return fileBase64.replace(/^data:image\/\w+;base64,/, "");
}