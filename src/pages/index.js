import Head from 'next/head'
// import TestComponent from node modules util-component
import { Test } from 'util-component';
// components
import HeaderApp from '@/components/HeaderApp'
import MainChart from '@/components/MainChart'

export default function Home() {
  return (
    <div className='h-full'>
      <Head>
        <title>Expenses Chart</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <main className='p-5 py-10 flex flex-col items-center h-full justify-center'>
        <HeaderApp />
        <MainChart />
        <Test />
      </main>
    </div>
  )
}
