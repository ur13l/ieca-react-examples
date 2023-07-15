
import { addDoc, collection, setDoc, deleteDoc, doc, query, onSnapshot } from "firebase/firestore";

const NewForm = () => {
  return (
    <div>
      <h1>NewForm</h1>
      <form>
        <div>
          <label htmlFor="name">title</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="email">Price</label>
          <input type="email" id="email" />
        </div>

      </form>
    </div>
  )
}

useEffect(() => {
  const getData = async () => {
    const data = await query(collection(firestore, "test_data"));

    onSnapshot(data, (querySnapshot) => {
      const databaseInfo = [];
      const dataIds = []

      querySnapshot.forEach((doc) => {
        databaseInfo.push(doc.data().testData);
        dataIds.push(doc.id)
      });

      setIds(dataIds)
      setInfo(databaseInfo)
    });
  }

  getData()
}, [])