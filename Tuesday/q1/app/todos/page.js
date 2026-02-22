const page = async() => {

    const data = await fetch("https://jsonplaceholder.typicode.com/todos")
    const todos = await data.json();

    console.log(todos)

  return (
    <>
    {
        todos.map((todo)=>{
            return <div key={todo.id} className="border-1 border-white p-2 m-2">
                <h1>{todo.title}</h1>
                <h3>{todo.userId}</h3>
                <h4>{todo.completed ? "Completed" : "Not Completed"}</h4>
            </div>
        })
    }
    </>
  )
}

export default page