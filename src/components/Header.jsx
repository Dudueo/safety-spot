import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  const linkBase="rounded-md px-3 py-2 text-sm font-medium transition";
// 공통
  const linkActive="bg-slate-900 text-white";
//클릭시
  const linkIdle="text-slate-700 hover:bg-slate-200";
//기본선택

  return (
    <header className='sticky top-0 z-50 border-b bg-white/80 backdrop-blur'>
    
      <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-3'> 
        <h1 className='flex items-center gap-3'>
          <div className='flex h-9 w-15 items-center rounded-xl bg-slate-900 text-white justify-center'>Safety</div>
          <div className='leading-tight'>
          <div className='text-base font-semibold'>Safety Spot</div>
          <div className='text-xs text-slate-500'>Public Safety Map</div>
          </div>
        </h1>
          
        <nav className='flex items-center gap-2'>
          <NavLink to="/map"
          className={({isActive}) => 
            `${linkBase} ${isActive ? linkActive : linkIdle}`
          }
          >map</NavLink>

          <NavLink to="/favorites"
          className={({isActive}) => 
            `${linkBase} ${isActive ? linkActive : linkIdle}`
          }
          >favorites</NavLink>

        </nav>
      </div>
    </header>
  
  )
}

export default Header