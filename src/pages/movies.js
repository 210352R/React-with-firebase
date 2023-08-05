import React, { useEffect } from "react";
import { db, auth, storage } from "../config/firebase";
import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

// Componenet waala mula akura capital wenna one
export default function Movies() {
  const [movieList, setMovieList] = useState([]);

  // file upload state --
  const [fileUpload, setFileUpload] = useState(null);

  //database collection ekata reference ekak hadanawa --
  const moviesCollectionRef = collection(db, "movies"); // Database eke nama danne ['movies' kiyala]

  useEffect(() => {
    const getMovieList = async () => {
      try {
        const data = await getDocs(moviesCollectionRef);
        const filteredData = data.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setMovieList(filteredData);
        console.log(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getMovieList();
  }, []);

  //File uploading eka -------
  const uploadFile = async () => {
    if (!fileUpload) {
      return;
    } else {
      const filesFolderRef = ref(storage, `Project1Files/${fileUpload.name}`);
      try {
        await uploadBytes(filesFolderRef, fileUpload);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div>
      <div>
        {movieList?.map((data) => {
          return (
            <div>
              <h2 style={{ color: data.receivedOscar ? "green" : "red" }}>
                {data.title}
              </h2>
              <p>{data.releaseDate}</p>
            </div>
          );
        })}
      </div>

      <div>
        <input type="file" onChange={(e) => setFileUpload(e.target.files[0])} />
        <button onClick={uploadFile}> Upload File </button>
      </div>
    </div>
  );
}
