import axios from "./axios";

export const apiRequest = async ({
  type,
  path,
  body,
  params,
  config,
  formData,
}) => {
  try {
    const res = await axios[type](
      path,
      formData
        ? body
        : {
            ...(body && body),
            ...(["get", "delete"].includes(type) && config && config),
            ...(["get", "delete"].includes(type) && params && { params }),
          },
      {
        ...(["post", "put"].includes(type) && config && config),
        ...(["post", "put"].includes(type) && params && { params }),
      }
    );
    return res;
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const removeKeys = (data, keysToDelete, emptyString = false) => {
  for (const key in data) {
    keysToDelete.includes(key) && delete data[key];
    emptyString && data[key] === "" && delete data[key];
  }
  return data;
};
