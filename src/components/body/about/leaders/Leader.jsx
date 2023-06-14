import { AppContext } from '../../../../AppContext';
import { useContext } from 'react';
import './Leader.css'
export default function Leader() {
    const { listLeaders, setSelectedLeader, showModalLeader, setShowModalLeader, selectedLeaderStored } = useContext(AppContext)

    return (
        <div className='Leader'>
            {
                listLeaders.map((data, index) => {
                    return (
                        <div key={index} className='leaderContainer' onClick={() => {
                            localStorage.removeItem("selectedLeader");
                            setShowModalLeader(true)
                            setSelectedLeader(data)
                        }}>
                            <img src={data.img} alt="" srcset="" className='leaderImg' />
                            <div className='leaderName'>{data.name}</div>
                            <div className='leaderRole' >{data.role}</div>
                        </div>
                    )
                })
            }

            {showModalLeader && (
                <div className='showPeopleModal'>
                    <div className='btnClosePeople' onClick={() => { setShowModalLeader(false) }}  >x</div>
                    <div className='modalImgInfo'>
                        <img src={selectedLeaderStored.img} alt="" srcset="" className='showPeopleImg' />
                        <div className='modalNameRoleContainer'>
                            <div className='showPeopleName'>{selectedLeaderStored.name}</div>
                            <div className='showPeopleRole'>{selectedLeaderStored.role}</div>
                        </div>
                    </div>
                    <div className='showPeopleDesContainer' >
                        {selectedLeaderStored.description.map((des) => (
                            <div className='showPeopleDes'>{des}</div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}






