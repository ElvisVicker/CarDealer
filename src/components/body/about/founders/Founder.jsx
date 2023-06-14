import { AppContext } from '../../../../AppContext';
import { useContext } from 'react';
import './Founder.css'
export default function Founder() {
    const { listFounders, setSelectedFounder, showModalFounder, setShowModalFounder, selectedFounderStored } = useContext(AppContext)

    return (
        <div className='Founder'>
            {
                listFounders.map((data, index) => {
                    return (
                        <div key={index} className='founderContainer' onClick={() => {
                            localStorage.removeItem("selectedFounder");
                            setShowModalFounder(true)
                            setSelectedFounder(data)
                        }}>
                            <img src={data.img} alt="" srcset="" className='founderImg' />
                            <div className='founderName'>{data.name}</div>
                        </div>
                    )
                })
            }

            {showModalFounder && (
                <div className='showPeopleModal'>
                    <div className='btnClosePeople' onClick={() => { setShowModalFounder(false) }}>x</div>
                    <div className='modalImgInfo'>
                        <img src={selectedFounderStored.img} alt="" srcset="" className='showPeopleImg' />
                        <div className='modalNameRoleContainer'>
                            <div className='showPeopleName'>{selectedFounderStored.name}</div>
                            <div className='showPeopleRole'>{selectedFounderStored.role}</div>
                        </div>
                    </div>
                    <div className='showPeopleDesContainer' >
                        {selectedFounderStored.description.map((des) => (
                            <div className='showPeopleDes'>{des}</div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}



