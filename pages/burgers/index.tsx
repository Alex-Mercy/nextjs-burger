import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

import styles from '../../styles/Burgers.module.css'

export type BurgerType = {
  name: string
  image: string
  desc: string
  price: number
  id: string
}

type BurgersPropsType = {
  burgers: BurgerType[]
}

export const getStaticProps = async () => {
  const res = await fetch('https://my-json-server.typicode.com/Alex-Mercy/burger-server/items')
  const data = await res.json()
  return {
    props: {
      burgers: data,
    },
  }
}

const Burgers: FC<BurgersPropsType> = ({ burgers }) => {
  return (
    <div>
      <h1>Наши бургеры</h1>
      {burgers.map((burger) => {
        return (
          <Link href={`/burgers/${burger.id}`} key={burger.id}>
            <a className={styles.burgerCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={burger.image}
                  alt={burger.name}
                  width='100%'
                  height='100%'
                  layout='responsive'
                  objectFit='cover'
                />
              </div>
              <div>
                <h3>{burger.name}</h3>
                <p>{burger.desc}</p>
              </div>
            </a>
          </Link>
        )
      })}
    </div>
  )
}

export default Burgers
