import { AES, enc } from "crypto-js";

export const decryptor = () => {
  const encryptedToken =
    typeof window !== "undefined"
      ? localStorage.getItem("dormbookingUserCreds")
      : null;
  const decryptedData = AES.decrypt(
    encryptedToken,
    "DORM-BOOKING-FAST-LOGISCTICS-JWT-KEY-2024"
  );
  const decryptedUserdetails = decryptedData.toString(enc.Utf8);
  const data = JSON.parse(decryptedUserdetails);

  //     const decryptedData = AES.decrypt(userdetails, 'DIGIFIT-FAST-LOGISCTICS-JWT-KEY-2023');
  //   const decryptedUserdetails = decryptedData.toString(enc.Utf8);
  //   const data = JSON.parse(decryptedUserdetails);

  return JSON.stringify(data);
};
