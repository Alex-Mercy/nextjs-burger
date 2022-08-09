import Head from 'next/head'
import React, { FC, useEffect, useState } from 'react'

type ReviewsPropsType = {
  reviews: ReviewsType[]
}

type ReviewsType = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

const Reviews: FC<ReviewsPropsType> = ({ reviews }) => {
  return (
    <>
      <Head>
        <title>Жирные бургеры | Отзывы</title>
        <meta name='title' content='Жирные бургеры | Отзывы' />
      </Head>
      <div>
        <h1>Отзывы клиентов</h1>
        <div>
          {!!reviews.length &&
            reviews.slice(0, 20).map((res) => {
              return (
                <div key={res.id} className='reviews'>
                  {res.id} {`${res.body.slice(0, 90)}...`}
                </div>
              )
            })}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments')
  const data = await response.json()
  return {
    props: {
      reviews: data.slice(0, 20),
    },
  }
}

export default Reviews
