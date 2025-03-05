interface messageProp {
    fname?: String,
    description: string
    CreateDate: String
}
const Message: React.FC<messageProp> = ({ fname, description, CreateDate }) => {
    return <>
    <div className="bg-gray-200 shadow-2xl mt-10 h- w-56">
        <div className="flex justify-between">
        <h1 className="text-blue-500 font-bold ms-1 capitalize">{fname}</h1>
        <p className="text-sm">{CreateDate.slice(0, 10)}</p>
        </div>
        <hr />
        <div className="flex m-1 space-x-1 justify-between">
        <p className="ms-1">{description}</p>
        <p className="text-sm ">{CreateDate.slice(11,16)}</p>
        </div>
    </div>

    </>
}

export default Message