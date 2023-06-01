import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { json } from "react-router-dom";
import data from "./components/CarList/data.json"
export const AppContext = createContext({})
export const AppProvider = ({ children }) => {

    // DATA
    const [list, setList] = useState(data)
    useEffect(() => {
        setList(list)

    }, [])


    // SCROLL POSITION
    const [scroll, setScroll] = useState(0);
    useEffect(() => {
        function handleScroll() {
            setScroll(window.scrollY);
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    // SCROLL TO TOP
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 });
    }, []);











    return (
        <AppContext.Provider value={{ list, scroll }}>
            {children}
        </AppContext.Provider>
    )


    // const [show, setShow] = useState(false)
    // const [count, setCount] = useState(1)
    // const [products, setProducts] = useState([])

    // const getData = async () => {
    //     const url = `https://6468b3b8e99f0ba0a82ab07a.mockapi.io/product`
    //     axios.get(url)
    //         .then(function (response) {

    //             setProducts(response.data)
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         })
    // }
    // useEffect(() => {

    //     if (localStorage.getItem('cart_list')) {
    //         setCart(JSON.parse(localStorage.getItem('cart_list')))
    //     }
    // }, [])




    // useEffect(() => {
    //     getData()
    // }, [])





    // const [cart, setCart] = useState([])
    // let addCart = function (id) {
    //     const kq = products.find(item => item.id == id);
    //     const index = cart.findIndex(item => item.id == id)

    //     if (index >= 0) {
    //         let newList = cart
    //         newList[index]["qty"]++
    //         setCart(newList)

    //         localStorage.setItem('cart_list', JSON.stringify(newList))



    //     } else {
    //         setCart([...cart, { ...kq, qty: 1 }])
    //         localStorage.setItem('cart_list', JSON.stringify([...cart, { ...kq, qty: 1 }]))
    //     }
    // }

    // const changeQty = (id, num) => {
    //     const kq = cart.map((item) => (item.id == id && !(num == -1 && item["qty"] == 1)) ? { ...item, qty: item["qty"] + num } : item)
    //     setCart(kq)
    //     localStorage.setItem('cart_list', JSON.stringify(kq))
    // }

    // const removeItem = (id) => {
    //     const kq = cart.filter((item) => item.id != id)
    //     setCart(kq)
    //     localStorage.setItem('cart_list', JSON.stringify(kq))
    // }















    // return (
    //     <AppContext.Provider value={{ list}}>
    //         {children}
    //     </AppContext.Provider>
    // )
}