const checkValidFileTypes = ({ base64, validFileTypes }) => {
  const type = base64.split(";")[0].split("/")[1];
  const contentType = base64.split(";")[0].split(":")[1];

  return {
    valid: validFileTypes.includes(type) ? true : false,
    type: contentType,
  };
};

export default checkValidFileTypes;
