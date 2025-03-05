import axios from "axios"
import { ChangeEvent, FormEvent, useState } from "react"


const Send = () => {
  const [data, setData] = useState({
    fname: "",
    description: ""
  })
  const handlename=(event: ChangeEvent<HTMLInputElement>)=>{
    setData((prev)=>( {...prev, fname:event.target.value }))
  }
  const handelChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData((prev)=>( {...prev, description:event.target.value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let response = await axios.post("https://message-board-k9u5.onrender.com", data)
    if (response) {
      setData({
        fname: "",
        description: ""
      })
    }

  }

  return <>
    <form onSubmit={handleSubmit}>
      <div className="flex items-center bg-[whitesmoke] fixed bottom-0 right-0 left-0">
        <input className="outline-2 rounded text-2xl w-full h-10 m-4" placeholder="enter your name" value={data.fname} onChange={handlename} type="text" />
        <input className="outline-2 rounded text-2xl w-full h-10 m-4"  placeholder ="enter your message" value={data.description} onChange={handelChange} type="text" />
        <button type="submit" className="text-amber-50 bg-blue-700 p-2 rounded-xl ">Send</button>
      </div>
    </form>
  </>
}

export default Send
