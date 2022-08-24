import { GetStaticProps } from 'next'
import Image from 'next/image'
import React, { FC } from 'react'

import { BurgerType } from './index'

import styles from '../../styles/Burgers.module.css'

export const getStaticPaths = async () => {
  const res = await fetch('https://my-json-server.typicode.com/Alex-Mercy/burger-server/items')
  const data = await res.json()

  const paths = data.map((burger: BurgerType) => {
    return {
      params: { id: burger.id },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params && context.params.id
  const res = await fetch(`https://my-json-server.typicode.com/Alex-Mercy/burger-server/items/${id}`)
  const data = await res.json()

  return {
    props: { burger: data },
  }
}

type DetailsProps = {
  burger: BurgerType
}

const Details: FC<DetailsProps> = ({ burger }) => {
  return (
    <div className={styles.singleBurger}>
      <h1>{burger.name}</h1>
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
        <p>{burger.desc}</p>
      </div>
    </div>
  )
}

export default Details
