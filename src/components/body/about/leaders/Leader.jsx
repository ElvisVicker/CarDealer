import { AppContext } from '../../../../AppContext';
import { useContext } from 'react';
import './Leader.css'
export default function Leader() {
    const { listLeaders } = useContext(AppContext)
    return (
        <div className='Leader'>
            {
                listLeaders.map((data, index) => {
                    return (
                        <div key={index} className='leaderContainer'>
                            <img src={data.img} alt="" srcset="" className='leaderImg' />
                            <div className='leaderName'>{data.name}</div>
                            <div className='leaderRole' >{data.role}</div>
                        </div>
                    )
                })
            }
        </div>
    );
}






