import { useState } from 'react';
   import { db } from '../config/firebase-config';

   export const useDeleteData = () => {
     const [loading, setLoading] = useState(false);
     const [error, setError] = useState(null);

     const deleteData = async (transactions, docId) => {
       setLoading(true);
       setError(null);

       try {
         await db.collection(transactions).doc(docId).delete();
         setLoading(false);
       } catch (err) {
         setError(err.message);
         setLoading(false);
       }
     };

     return { deleteData, loading, error };
   };
   
