// uploadData.js
import { db } from "./fireBaseConfig"; // Đảm bảo import đúng db từ firebaseConfig
import { collection, doc, setDoc } from "firebase/firestore";
import { data } from "./data";

// Hàm loại bỏ các trường undefined trong dữ liệu
function removeUndefinedFields(data) {
  return JSON.parse(JSON.stringify(data));
}

export async function saveData() {
  const cleanedData = removeUndefinedFields(data);

  try {
    for (const item of cleanedData) {
      // Dùng `collection` với `db` đã import
      const collectionRef = collection(db, item.type); 
      await setDoc(doc(collectionRef, item.id), item); 
    }
    console.log("Data uploaded successfully");
  } catch (error) {
    console.error("Error uploading data:", error);
  }
}
