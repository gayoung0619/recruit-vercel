export const transportfile = (file: File) => {
  return new Promise((resove, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const base64 = reader.result || '';
      const base64Sub = base64.toString() || "";
      resove(base64Sub)
    };

    reader.onerror = reject;
  })
}