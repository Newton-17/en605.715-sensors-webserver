import Head from 'next/head';
import Title from '../components/Title/Title'
import Navbar from '../components/Navbar/Navbar'

export default function Home() {
  return (
    <div>
      <Title />
      <Navbar />
    </div>
  )
}