

import Price from './components/price/page'
import Why from './components/why/page'
import Hero from './components/hero/pge'
import Help from './components/help/page'
import Testi from './components/testimonial/page'

import Arrival from './components/try/page'
import Subscribe from './components/subscribe/page'



export default function Home() {
  return (
    <div>
    
     <Hero/>
     <Price/>
     <Why/>
    <Help/>
   <Testi/>
     <Arrival/>
    
     <Subscribe/>
     </div>
  )
}
