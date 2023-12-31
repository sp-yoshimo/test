import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>スカモン - ランキング</title>
      </Head>
      <div>
        <Header label='ランキング'   showLogo  />
      </div>
    </>

  )
}
