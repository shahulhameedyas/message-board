import { useEffect, useState } from "react"
import Header from "./pages/Header"
import Message from "./pages/Message"
import Send from "./pages/Send"

type dataType = {
  _id: string;
  fname: string;
  description: string
  CreateDate: String
}

const App = () => {
  const [data, setData] = useState<dataType[]>([])
  useEffect(() => {
    fetch('http://localhost:8000/msg')
      .then(res => res.json())
      .then(res => setData(res))

  }, [data])

  return <>

    <Header />
    <div className=" container mx-auto mt-4 mb-28 ">
      {data && data.map((item) => <Message key={item._id} fname={item.fname} description={item.description}  CreateDate={item.CreateDate} />)}
    </div>
    <Send />

  </>
}

export default App