'use client'
import React from 'react'
import Header from './Header'
import Home from './Home'
import { useRouter } from 'next/navigation'

export default function Index() {
  const router=useRouter();
  
  return (
    <div>
  <Home/>
    </div>

  
  )
}
