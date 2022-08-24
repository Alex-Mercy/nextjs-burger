import Link from 'next/link'
import React from 'react'

import { FaHamburger } from 'react-icons/fa'

const Header = () => {
  return (
    <header>
      <div>
        <FaHamburger />
      </div>
      <nav>
        <Link href='/'>
          <a>Домой</a>
        </Link>
        <Link href='/about'>
          <a>О нас</a>
        </Link>
        <Link href='/reviews'>
          <a>Отзывы</a>
        </Link>
        <Link href='/burgers'>
          <a>Бургеры</a>
        </Link>
      </nav>
    </header>
  )
}

export default Header
