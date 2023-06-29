
import './NotFound.css'
import { Link } from 'react-router-dom';

import { AiOutlineHome } from 'react-icons/ai';



export default function NotFound() {
    return (
        <div className='notFound'>
            <div className='notFoundTitle'>404 - Page Not Found</div>
            <div className='notFoundText'>The page you are looking for does not exist.</div>
            <Link className="notFoundLink" to="/" onClick={() => { window.scrollTo({ top: 0, left: 0 }); }}>Return Home</Link>
        </div>
    );
}