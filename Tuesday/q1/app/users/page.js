async function getUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return await res.json(); 
}

const page = async() => {
    const data = await getUsers();
    
  return (
    <>
    {
        data.map((user)=>{
            return <div key={user.id} className="border-1 border-white p-2 m-2">
                <h1>{user.name}</h1>
                <h3>{user.username}</h3>
                <h4>{user.email}</h4>
            </div>
        })
    }
    </>
  )
}

export default page