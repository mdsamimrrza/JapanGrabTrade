import Image from 'next/image'
import About from './about'
import ContactUs from './ContactUs'
import LandingPage from './LandingPage'

export default function Home() {
  return (
    <div >
      <div>
        <LandingPage />
      </div>
      <div>
        <About />
      </div>
      <div>
        <ContactUs/>
      </div>
    </div>
  )
}

