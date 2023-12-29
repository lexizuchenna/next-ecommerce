import jwt from "jsonwebtoken"

export const generateNum = (length = 6) => {
  var result = "";
  var characters = "0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const generateToken = (id, expiresIn = "1d") => {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn });
};
