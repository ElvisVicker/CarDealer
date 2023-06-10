import { AppContext } from '../../../../AppContext';
import { useContext } from 'react';
import './Founder.css'
export default function Founder() {
    const { listFounders } = useContext(AppContext)
    return (
        <div className='Founder'>
            {
                listFounders.map((data, index) => {
                    return (
                        <div key={index} className='founderContainer'>
                            <img src={data.img} alt="" srcset="" className='founderImg' />
                            <div className='founderName'>{data.name}</div>
                        </div>
                    )
                })
            }
        </div>
    );
}






