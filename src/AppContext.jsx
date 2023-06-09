import { createContext, useEffect, useState } from "react";
import axios from "axios";
import getData from "./components/data/data.json"

export const AppContext = createContext({})
export const AppProvider = ({ children }) => {
  // DATA FROM JSON========================================================
  const [list, setList] = useState(getData.data.allVehicles)
  useEffect(() => {
    setList(list)
  }, [])

  const [listLeaders, setListLeaders] = useState(getData.data.leaders)
  useEffect(() => {
    setListLeaders(listLeaders)
  }, [])

  const [listFounders, setListFounders] = useState(getData.data.founders)
  useEffect(() => {
    setListFounders(listFounders)
  }, [])

  // SCROLL TO TOP========================================================
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);



  // REVIEW SLIDER=====================================================
  const [cus1, setCus1] = useState([''])
  const getCus1 = async () => {
    const url = `https://6468b3b8e99f0ba0a82ab07a.mockapi.io/customer1`
    axios.get(url)
      .then(function (response) {
        setCus1(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  useEffect(() => {
    getCus1()
  }, [])

  const TextSlideshow1 = ({ cus1 }) => {
    const [currentDataIndex, setCurrentDataIndex] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentDataIndex((currentDataIndex) =>
          currentDataIndex + 1 === cus1.length ? 0 : currentDataIndex + 1
        );
      }, 3000);
      return () => clearInterval(interval);
    }, [cus1]);
    return (
      <div className="slideCus">
        <div className="cusImgContainer">
          <img className="cusImg" src={cus1[currentDataIndex].cusImg} alt="" />
        </div>
        <div className="reviewNameADes">
          <h1 className="cusName">{cus1[currentDataIndex].name}</h1>
          <p className="cusDes">{cus1[currentDataIndex].description}</p>
        </div>
      </div>
    );
  };



  // GET API CUSTOMER====================================================
  const [cus2, setCus2] = useState([''])
  const getCus2 = async () => {
    const url = `https://6468b3b8e99f0ba0a82ab07a.mockapi.io/customer2`
    axios.get(url)
      .then(function (response) {
        setCus2(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  useEffect(() => {
    getCus2()
  }, [])

  const TextSlideshow2 = ({ cus2 }) => {
    const [currentDataIndex, setCurrentDataIndex] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentDataIndex((currentDataIndex) =>
          currentDataIndex + 1 === cus2.length ? 0 : currentDataIndex + 1
        );
      }, 3000);
      return () => clearInterval(interval);
    }, [cus2]);
    return (
      <div className="slideCus">
        <div className="cusImgContainer">
          <img className="cusImg" src={cus2[currentDataIndex].cusImg} alt="" />
        </div>
        <div className="reviewNameADes">
          <h1 className="cusName">{cus2[currentDataIndex].name}</h1>
          <p className="cusDes">{cus2[currentDataIndex].description}</p>
        </div>
      </div>
    );
  };



  //LOGO COMPANY========================================================
  let allLogoCompany = []
  for (let x of list) {
    allLogoCompany.push(x.logo)
  }
  const logoCompany = allLogoCompany.filter((item, index) => allLogoCompany.indexOf(item) === index)
  let allCompany = []
  for (let x of list) {
    allCompany.push(x.company)
  }
  const company = allCompany.filter((item, index) => allCompany.indexOf(item) === index)



  //FILTER==============================================================
  const [inputMessage, setInputMessage] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState(list);
  let handleFilter = function (company) {
    let filteredCar = list.filter(item => item.company === company)
    setFilteredData(filteredCar);
    setCurrentPage(1)
    setInputMessage('');
    if (company == 'All') setFilteredData(list);
  }



  //SEARCH========================================================================================
  const changeSearchName = e => {
    let searchedCar = list.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
    setInputMessage(e.target.value);
    setFilteredData(searchedCar);
    setCurrentPage(1)
  };



  // PAGINATION==============================================
  const itemsPerPage = 8;
  const totalItems = filteredData.length;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const itemsToDisplay = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const pageLinks = [];
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageLinks.push(
      <div
        key={i}
        className={
          i === currentPage
            ? 'paginationClick'
            : 'paginationNoClick'
        }
        onClick={() => handlePageChange(i)}
      >
        {i}
      </div>
    );
  }



  //SHOW LIST LINK MODAL========================================================
  const [showListLink, setShowListLink] = useState(false);



  //SHOW LEADER OR FOUNDER========================================================
  const [showLeader, setshowLeader] = useState(true);
  const [showFounder, setshowFounder] = useState(false);
  const clickLeader = () => {
    setshowLeader(true);
    setshowFounder(false);
  };

  const clickFounder = () => {
    setshowLeader(false);
    setshowFounder(true);
  };



  // SELECTED A VEHICLE========================================================
  const [selectedCar, setSelectedCar] = useState([]);



  // SELECTED LEADER========================================================
  const [selectedLeader, setSelectedLeader] = useState([]);
  if (!localStorage.getItem("selectedLeader")) {
    localStorage.setItem("selectedLeader", JSON.stringify(selectedLeader))
  }
  let selectedLeaderStored = JSON.parse(localStorage.getItem("selectedLeader"));
  const [showModalLeader, setShowModalLeader] = useState(false);



  // SELECTED FOUNDER========================================================
  const [selectedFounder, setSelectedFounder] = useState([]);
  if (!localStorage.getItem("selectedFounder")) {
    localStorage.setItem("selectedFounder", JSON.stringify(selectedFounder))
  }
  let selectedFounderStored = JSON.parse(localStorage.getItem("selectedFounder"));
  const [showModalFounder, setShowModalFounder] = useState(false);
  return (
    <AppContext.Provider value={{
      list, cus1, TextSlideshow1, cus2, TextSlideshow2,
      logoCompany, listLeaders, listFounders, showLeader, showFounder, clickLeader,
      clickFounder, selectedCar, setSelectedCar,
      selectedLeader, setSelectedLeader,
      selectedFounder, setSelectedFounder, showModalLeader, setShowModalLeader, selectedLeaderStored,
      showModalFounder, setShowModalFounder, selectedFounderStored, handleFilter, itemsToDisplay, pageLinks
      , setCurrentPage, setFilteredData, company, showListLink,
      setShowListLink, changeSearchName, inputMessage
    }}>
      {children}
    </AppContext.Provider>
  )
}