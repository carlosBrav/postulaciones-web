import {cutBase64Result} from '@presentation/libs/strings'

const toBase64 = (file: File) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});

export const TransformFile = async (file: File) => {
  try {
    const result = await toBase64(file);
    return cutBase64Result(result as string)
 } catch(error) {
    console.error(error);
    return;
 }
}