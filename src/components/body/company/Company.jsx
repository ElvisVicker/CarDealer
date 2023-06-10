import './Company.css'
import { useContext } from 'react';
import { AppContext } from '../../../AppContext';
export default function Company() {

    const { logoCompany } = useContext(AppContext)

    return (
        <div className='Company'>


            <div className='companyImgTitle'>
                <img className='companyMainImg' src="https://wallpaperaccess.com/full/656670.jpg" alt="" srcset="" />
                <div className='companyMainTitle'>   COMPANY</div>
            </div>




            <div className='companyMainList'>
                <div className='companyContainer'>
                    <div className='companyLogoName'>
                        <img src={logoCompany[0]} alt="" srcset="" className='companyLogo' />
                        <div className='companyName'>FORD</div>
                    </div>
                    <div className='companyDescription'>

                        <div>
                            Ford Motor Company (commonly known as Ford) is an American multinational automobile manufacturer headquartered in Dearborn, Michigan, United States. It was founded by Henry Ford and incorporated on June 16, 1903. The company sells automobiles and commercial vehicles under the Ford brand, and luxury cars under its Lincoln brand. Ford also owns Brazilian SUV manufacturer Troller, an 8% stake in Aston Martin of the United Kingdom and a 32% stake in China's Jiangling Motors. It also has joint ventures in China (Changan Ford), Taiwan (Ford Lio Ho), Thailand (AutoAlliance Thailand), and Turkey (Ford Otosan). The company is listed on the New York Stock Exchange and is controlled by the Ford family; they have minority ownership but the majority of the voting power.
                        </div>
                        <div>
                            Ford introduced methods for large-scale manufacturing of cars and large-scale management of an industrial workforce using elaborately engineered manufacturing sequences typified by moving assembly lines; by 1914, these methods were known around the world as Fordism. Ford's former UK subsidiaries Jaguar and Land Rover, acquired in 1989 and 2000, respectively, were sold to the Indian automaker Tata Motors in March 2008. Ford owned the Swedish automaker Volvo from 1999 to 2010. In 2011, Ford discontinued the Mercury brand, under which it had marketed entry-level luxury cars in the United States, Canada, Mexico, and the Middle East since 1938.
                        </div>
                        <div>
                            Ford is the second-largest U.S.-based automaker (behind General Motors) and the fifth largest in the world (behind Toyota, Volkswagen, Hyundai and General Motors) based on 2015 vehicle production. At the end of 2010, Ford was the fifth-largest automaker in Europe. The company went public in 1956 but the Ford family, through special Class B shares, still retain 40 percent of the voting rights. During the financial crisis of 2007–08, the company struggled financially but did not have to be rescued by the federal government, unlike the other two major US automakers. Ford Motors has since returned to profitability, and was the eleventh-ranked overall American-based company in the 2018 Fortune 500 list, based on global revenues in 2017 of $156.7 billion. In 2008, Ford produced 5.532 million automobiles and employed about 213,000 employees at around 90 plants and facilities worldwide.
                        </div>
                    </div>



                    <a href="https://en.wikipedia.org/wiki/Ford_Motor_Company" target="_blank" className='companyLink'>
                        <button className='btnLink'>More Information &rarr;</button>
                    </a>


                </div>





                <div className='companyContainer'>
                    <div className='companyLogoName'>
                        <img src={logoCompany[1]} alt="" srcset="" className='companyLogo' />
                        <div className='companyName'>AUDI</div>
                    </div>
                    <div className='companyDescription'>

                        <div>
                            Audi AG (German: [ˈaʊ̯di ʔaːˈɡeː] (listen)) is a German automotive manufacturer of luxury vehicles headquartered in Ingolstadt, Bavaria, Germany. As a subsidiary of its parent company, the Volkswagen Group, Audi produces vehicles in nine production facilities worldwide.
                        </div>
                        <div>
                            The origins of the company are complex, going back to the early 20th century and the initial enterprises (Horch and the Audiwerke) founded by engineer August Horch (1868–1951); and two other manufacturers (DKW and Wanderer), leading to the foundation of Auto Union in 1932. The modern Audi era began in the 1960s, when Auto Union was acquired by Volkswagen from Daimler-Benz. After relaunching the Audi brand with the 1965 introduction of the Audi F103 series, Volkswagen merged Auto Union with NSU Motorenwerke in 1969, thus creating the present-day form of the company.
                        </div>
                        <div>
                            The company name is based on the Latin translation of the surname of the founder, August Horch. Horch, meaning "listen", becomes audi in Latin. The four rings of the Audi logo each represent one of four car companies that banded together to create Audi's predecessor company, Auto Union. Audi's slogan is Vorsprung durch Technik, meaning "Being Ahead through Technology". Audi, along with German brands BMW and Mercedes-Benz, is among the best-selling luxury automobile brands in the world.
                        </div>

                    </div>
                    <a href="https://en.wikipedia.org/wiki/Audi" target="_blank" className='companyLink'>
                        <button className='btnLink'>More Information &rarr;</button>
                    </a>
                </div>




                <div className='companyContainer'>

                    <div className='companyLogoName'>

                        <img src={logoCompany[2]} alt="" srcset="" className='companyLogo' />
                        <div className='companyName'>CHEVROLET</div>
                    </div>
                    <div className='companyDescription'>

                        <div>
                            Chevrolet (/ˌʃɛvrəˈleɪ/ SHEV-rə-LAY) (colloquially referred to as Chevy and formally the Chevrolet Motor Division of General Motors Company) is an American automobile division of the American manufacturer General Motors (GM). Louis Chevrolet (1878–1941), Arthur Chevrolet (1884–1946) and ousted General Motors founder William C. Durant (1861–1947) started the company on November 3, 1911 as the Chevrolet Motor Car Company. Durant used the Chevrolet Motor Car Company to acquire a controlling stake in General Motors with a reverse merger occurring on May 2, 1918, and propelled himself back to the GM presidency. After Durant's second ousting in 1919, Alfred Sloan, with his maxim "a car for every purse and purpose", would pick the Chevrolet brand to become the volume leader in the General Motors family, selling mainstream vehicles to compete with Henry Ford's Model T in 1919 and overtaking Ford as the best-selling car in the United States by 1929 with the Chevrolet International.
                        </div>
                        <div>
                            Chevrolet-branded vehicles are sold in most automotive markets worldwide. In Oceania, Chevrolet was represented by Holden Special Vehicles, having returned to the region in 2018 after a 50-year absence with the launching of the Camaro and Silverado pickup truck (HSV was partially and formerly owned by GM subsidiary Holden, which GM retired in 2021). In 2021, General Motors Specialty Vehicles took over the distribution and sales of Chevrolet vehicles in Oceania, starting with the Silverado. In 2005, Chevrolet was relaunched in Europe, primarily selling vehicles built by GM Daewoo of South Korea with the tagline "Daewoo has grown up enough to become Chevrolet", a move rooted in General Motors' attempt to build a global brand around Chevrolet. With the reintroduction of Chevrolet to Europe, GM intended Chevrolet to be a mainstream value brand, while GM's traditional European standard-bearers, Opel of Germany and Vauxhall of the United Kingdom, would be moved upmarket. However, GM reversed this move in late 2013, announcing that the brand would be withdrawn from Europe from 2016 onward, with the exception of the Camaro and Corvette.[6] Chevrolet vehicles were to continue to be marketed in the CIS states, including Russia. After General Motors fully acquired GM Daewoo in 2011 to create GM Korea, the last usage of the Daewoo automotive brand was discontinued in its native South Korea and succeeded by Chevrolet.
                        </div>
                        <div>
                            In North America, Chevrolet produces and sells a wide range of vehicles, from subcompact automobiles to medium-duty commercial trucks. Due to the prominence and name recognition of Chevrolet as one of General Motors' global marques, 'Chevrolet', 'Chevy' or 'Chev' is used at times as a synonym for General Motors or its products, one example being the GM LS1 engine, commonly known by the name or a variant thereof of its progenitor, the Chevrolet small-block engine.
                        </div>

                    </div>
                    <a href="https://en.wikipedia.org/wiki/Chevrolet" target="_blank" className='companyLink'>
                        <button className='btnLink'>More Information &rarr;</button>
                    </a>
                </div>




                <div className='companyContainer'>
                    <div className='companyLogoName'>
                        <img src={logoCompany[3]} alt="" srcset="" className='companyLogo' />
                        <div className='companyName'>VOLVO</div>
                    </div>
                    <div className='companyDescription'>

                        <div>
                            The Volvo Group (Swedish: Volvokoncernen; legally Aktiebolaget Volvo, shortened to AB Volvo, stylized as VOLVO) is a Swedish multinational manufacturing corporation headquartered in Gothenburg. While its core activity is the production, distribution and sale of trucks, buses and construction equipment, Volvo also supplies marine and industrial drive systems and financial services. In 2016, it was the world's second-largest manufacturer of heavy-duty trucks with its subsidiary Volvo Trucks.
                        </div>
                        <div>
                            Automobile manufacturer Volvo Cars, also based in Gothenburg, was part of AB Volvo until 1999, when it was sold to the Ford Motor Company. Since 2010 Volvo Cars has been owned by the automotive company Geely Holding Group. Both AB Volvo and Volvo Cars share the Volvo logo and cooperate in running the Volvo Museum in Sweden.
                        </div>
                        <div>
                            The corporation was first listed on the Stockholm Stock Exchange in 1935, and was on the NASDAQ indices from 1985 to 2007.
                        </div>
                        <div>
                            Volvo was established in 1915 as a subsidiary of SKF, a ball bearing manufacturer; however both the Volvo Group and Volvo Cars regard the rollout of the company's first car series, the Volvo ÖV 4, on 14 April 1927, as their beginning.
                        </div>

                    </div>
                    <a href="https://en.wikipedia.org/wiki/Volvo" target="_blank" className='companyLink'>
                        <button className='btnLink'>More Information &rarr;</button>
                    </a>
                </div>






                <div className='companyContainer'>
                    <div className='companyLogoName'>
                        <img src={logoCompany[4]} alt="" srcset="" className='companyLogo' />
                        <div className='companyName'>RANGE ROVER</div>
                    </div>
                    <div className='companyDescription'>

                        <div>
                            The Rover Company (originator of the Land Rover marque) was experimenting with a larger model than the Land Rover Series in 1951, when the Rover P4-based two-wheel-drive "Road Rover" project was developed by Gordon Bashford. This was shelved in 1958 and the idea lay dormant until 1966, when engineers Spen King and Bashford set to work on a new model.
                        </div>
                        <div>
                            The first Range Rover prototype was built in 1967 with plate number SYE 157F. The design of the Range Rover was finalised in 1969. Twenty-six Velar-badged engineering development vehicles were built between 1969 and 1970 and were road registered with the number plates YVB151H through to YVB177H.
                        </div>
                        <div>
                            Though being chassis no. 3, YVB 153H is believed to have been the first off the production line as a vehicle in that colour was urgently required for marketing. (The Range Rover with chassis no. 1 was a green model with the registration "YVB 151H", and is now on exhibition at Huddersfield Land Rover Centre, Huddersfield, West Yorkshire). The Velar name was derived from the Italian "velare" meaning to veil or to cover. Range Rover development engineer Geof Miller used the name as a decoy for registering pre-production Range Rovers. The Velar company was registered in London and produced 40 pre-production vehicles that were built between 1967 and 1970.
                        </div>
                        <div>
                            The Range Rover was launched in 1970. In the early 1970s, the Musée du Louvre in Paris exhibited a Range Rover as an "exemplary work of industrial design".
                        </div>
                        <div>
                            In 1971, ex-Cream drummer Ginger Baker used the unproven Range Rover to drive from Algeria to Lagos, Nigeria to set up a recording studio and jam with Fela Kuti. Predating the Paris-Dakar rally the subsequent documentary is replete with such terrain, documenting the vehicle's endurance.
                        </div>
                        <div>
                            In 1972, the British Trans-Americas Expedition became the first vehicle-based expedition to traverse the Americas from north-to-south, including traversing the roadless Darién Gap. The specially modified Range Rovers used for this expedition are now on display in the British Motor Industry Heritage Trust collection at Gaydon, Warwickshire.
                        </div>
                        <div>
                            Range Rover sub-brands have been launched. In 2004, Land Rover debuted the Range Rover Sport, based on the Land Rover Discovery platform. Later models received the latest Range Rover platform. In 2011 came the Range Rover Evoque, and in 2017 the Range Rover Velar (re-using the name of the very first, pre-production Range Rovers).
                        </div>

                    </div>

                    <a href="https://en.wikipedia.org/wiki/Range_Rover" target="_blank" className='companyLink'>
                        <button className='btnLink'>More Information &rarr;</button>
                    </a>
                </div>
            </div>
        </div >
    );
}