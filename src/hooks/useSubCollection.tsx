import {
    onSnapshot,
    collection,
    query,
    orderBy,
    Timestamp,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../components/firebase";
import { useAppSelector } from "../app/hooks";

interface Messages {
    timestamp: Timestamp;
    message: string;
    user: {
      uid: string;
      photo: string;
      email: string;
      displayName: string;
    };
  }
  
const useSubcollection = (
    collectionName: string,
    subCollectionName: string
) => {
    const channelId = useAppSelector((state) => state.channel.channelId);
    const [subdocuments, setSubDocument] = useState<Messages[]>([]);

    useEffect(() => {
        let collectionRef = collection(
          db,
          collectionName,
          String(channelId),
          subCollectionName
        );
    
        const collectionRefOrderBy = query(
          collectionRef,
          orderBy("timestamp","desc")
        );
    
        onSnapshot(collectionRefOrderBy, (snapshot) => {
          let results: Messages[] = [];
          snapshot.docs.forEach((doc) => {
            results.push({
              timestamp: doc.data().timestamp,
              message: doc.data().message,
              user: doc.data().user,
            });
          });
          setSubDocument(results);
        });
      }, [channelId]);
    
    return { subdocuments };
}

export default useSubcollection;
