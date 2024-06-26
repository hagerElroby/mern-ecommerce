import Slider from '../components/Slider'
import Announcement from '../components/Announcement'
import Navbar from "../components/Navbar"
import CategoryItem from '../components/CategoryItem'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <Categories />
            <Products />
            <Newsletter />
            <Footer />
        </div>
    )
}
export default Home