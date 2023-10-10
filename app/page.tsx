import Image from 'next/image'
import About from './about'
import ContactUs from './ContactUs'

export default function Home() {
  return (
    <div >
      <div>
        <About />
      </div>
      <div>
        <ContactUs/>
      </div>
    </div>
  )
}
