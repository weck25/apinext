import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <Link href={'/'}>
        <h1 className="text-3xl">Blog Sederhana</h1>
        </Link>
        <Link href={'/tambah'}>
        <button className='btn primary'>tambah</button>
        </Link>
    </header>
  )
}
