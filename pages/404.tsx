import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const NotFoundPage = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }, [])

  return (
    <div className='not-found'>
      <h1>Ой...</h1>
      <h2>Такой страницы не существует</h2>
      <p>
        Перехожу на{' '}
        <Link href='/'>
          <a> главную страницу</a>
        </Link>{' '}
        через 3 секунды...
      </p>
    </div>
  )
}

export default NotFoundPage
