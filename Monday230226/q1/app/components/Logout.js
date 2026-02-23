'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'

const Logout = () => {
  const router = useRouter()
  const { data: session } = useSession()

  const handleSignOut = async () => {
    await signOut({ redirect: false })
    router.push('/api/login')
  }

  return (
    <>
      <h3>Email is {session?.user?.email || 'Loading...'}</h3>
      <button onClick={handleSignOut} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">Sign out</button>
    </>
  )
}

export default Logout