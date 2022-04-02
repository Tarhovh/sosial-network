// export const usePosts = () => {

//     // eslint-disable-next-line no-unused-vars
//   const dispatch = useDispatch()
  
//     useEffect(() => {
//       myFireStore
//         .collection("posts")
//         .get()
//         .then((snapshot) => {
//           let res = [];
//           snapshot.docs.forEach((doc) => {
//             res.push({ id: doc.id, ...doc.data() });
//           });
//           dispatch(addItem(res));
//         });
//     }, []);
//   }
