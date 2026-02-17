const Header = () => {
  return (
    <>
    <nav className="flex justify-between px-10 py-5 bg-gray-800 text-gray-100 font-bold shadow-sm shadow-gray-900">
        <div className="text-2xl">Header</div>
        <div>
            <ul className="flex min-w-xs justify-between" >
                <li>Products</li>
                <li>About</li>
                <li>Contacts</li>
            </ul>
        </div>
        
    </nav>
    </>
  )
}

export default Header