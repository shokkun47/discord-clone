import {
    onSnapshot,
    collection,
    query,
    DocumentData,
    CollectionReference,
    Query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../components/firebase";

interface Channals {
    id: string;
    channel: DocumentData;
}

const useCollection = (data: string) => {
    const [documents, setDocument] = useState<Channals[]>([]);
    const collectionRef: Query<DocumentData> = query(collection(db, data));    

    useEffect(() => {
        onSnapshot(collectionRef, (querySnapshot) => {
            const channelsResult: Channals[] = [];
            querySnapshot.docs.forEach((doc) => channelsResult.push({
                id: doc.id,
                channel: doc.data(),
                })
            );
            setDocument(channelsResult)
        });
    }, []);

    return { documents };
}

export default useCollection
