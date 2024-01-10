import React,{useEffect,useState} from 'react'
import Cards from '../../components/Cards'
import { FaFilter } from "react-icons/fa";


const Menu = () => {
    const [menu, setMenu] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortOption, setSortOption] = useState("default");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8); // Number of items to display per page

    useEffect(()=>{
        //fetch data from the backend 
        const fetchData = async()=>{
            try{
                const response = await fetch("/menu.json");
                const data = await response.json();
                // console.log(data)
                setMenu(data);
                setFilteredItems(data);
            }catch(error){
                console.log("Error fetching data",error)
            }
        };
        //call the func
        fetchData();
    },[])

    // filter data 
    const filterItems = (category) => {
        const filtered =
            category === "all" ? menu
                : menu.filter((item) => item.category === category);
        setFilteredItems(filtered);
        setSelectedCategory(category);
    }

    //show all data
    const showAll = () => {
        setFilteredItems(menu);
        setSelectedCategory("all")
    }

    //sorting based on A-Z, l - h price
    const handleSortChange=(option)=>{
        setSortOption(option);
        let sortedItems = [...filterItems];
        // logic

        switch(option){
            case "A-Z":
                sortedItems.sort((a,b) => a.name.localeCompare(b.name))
              break;
            case "Z-A":
                sortedItems.sort((a,b) => b.name.localeCompare(a.name))
              break;
            case "low-to-high":
                sortedItems.sort((a,b)=> a.price - b.price)
             break;
            case "high-to-low":
                sortedItems.sort((a,b) => b.price - a.price)
             break;
            default:
             break;
        }

        setFilteredItems(sortedItems);
        setCurrentPage(1)
    };
    
    console.log(filterItems)
    // Pagination logic

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            {/* menu banner */}
            <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%'>
                <div className='py-48 flex flex-col items-center justify-center'>
                    {/* content */}
                    <div className='text-center px-4 space-y-7'>
                        <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
                            For the Love of Delicious <span className="text-green">Food</span>
                        </h2>
                        <p className="text-[#4A4A4A] text-xl md:w-4/5 mx-auto">
                            Come with family & feel the joy of mouthwatering food such as
                            Greek Salad, Lasagne, Butternut Pumpkin, Tokusen Wagyu, Olivas
                            Rellenas and more for a moderate cost
                        </p>
                        <button className="bg-green font-semibold btn text-white px-8 py-3 rounded-full">
                            Order Now
                        </button>
                    </div>
                </div>
            </div>

            {/* menu shop  */}
            <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
                <div className='flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8'>

                </div>
            </div>
        </div>
    )
}

export default Menu