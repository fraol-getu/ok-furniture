import Help from "../components/help/page";
import Subscribe from "../components/subscribe/page";
import Testi from "../components/testimonial/page";
import Abouthero from "../pages/about/abouthero/page";
import Aboutus from "../pages/about/aboutus/page";






export default function About  () {
    return(
    <div>
    <Abouthero/>
    <Aboutus/>
    <Help/>
    <Testi/>
    <Subscribe/>
    </div>
    )
    
    
    }