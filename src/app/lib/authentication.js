import { cookies } from "next/headers"; // Import the cookies function
import CryptoJS from "crypto-js";

const encryptionKey = process.env.NEXT_PUBLIC_ENCRYPTION_KEY;

export async function getSession() {
  const cookieStore = cookies(); // Access the cookies on the server
  const encryptedUserData = cookieStore.get("user")?.value; // Retrieve encrypted user data

  if (encryptedUserData) {
    try {
      // Decrypt the encrypted data
      const bytes = CryptoJS.AES.decrypt(encryptedUserData, encryptionKey);
      const decryptedData = bytes.toString(CryptoJS.enc.Utf8);

      if (decryptedData) {
        const userData = JSON.parse(decryptedData);
        return userData;
      }
    } catch (error) {
      console.error("Error decrypting user data:", error);
    }
  }

  return null; // Return null if decryption fails or no data is found
}
