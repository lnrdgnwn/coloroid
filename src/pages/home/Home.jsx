import Nav from "../../components/Nav"
import Hero from "../../components/Home/Hero"
import Features from  "../../components/home/Features"
import Footer from "../../components/Footer"

export default function Home(){
    return (
        <section id="home" className="">
            <Nav />
            <Hero />
            <Features/>
            <Footer />
        </section>
    )
}