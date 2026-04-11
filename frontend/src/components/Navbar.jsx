import React from 'react'
import { Link } from 'react-router'
import { PlusIcon, SparklesIcon } from 'lucide-react'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-amber-50 via-white to-amber-50 border-b border-amber-200 shadow-sm backdrop-blur-sm bg-opacity-90">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="group flex items-center gap-2">
            <SparklesIcon className="size-7 text-amber-500 group-hover:rotate-12 transition-transform duration-300" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent font-mono tracking-tight group-hover:scale-105 transition-transform">
              NexNote
            </h1>
          </Link>

          <Link 
            to="/create" 
            className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <PlusIcon className="size-5 group-hover:rotate-90 transition-transform duration-300" />
            <span>New Note</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar