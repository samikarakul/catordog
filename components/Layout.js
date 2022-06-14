import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import Navbar from './Navbar'
function Layout({children}) {

  const router = useRouter();
  const [path, setPath] = useState("")

  useEffect(() => {
      const location = window.location.href.split("/")
      setPath(location[location.length - 1])
  }, [router.asPath])
  return (
    <>
      {path ? <Navbar/> : "" }
      <div className="container flex-column">
        {children}
      </div>
    </>
  )
}

export default Layout