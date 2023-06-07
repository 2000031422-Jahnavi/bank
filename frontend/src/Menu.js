import './Menu.css';
import { useNavigate } from 'react-router-dom';
import image from './image.jpg'

export function Menu() {
    const navigate = useNavigate()
    return (
            <div>
                <img src={image} alt="Image" style={{ position: 'absolute', top: '30px', left: '30px', width: '100px', height: '100px' }} />
                <strong> <center><p style={{ fontSize: 50 }}>WELCOME TO SAI SHUTTERS COMPANY</p></center></strong>
                <div className="dashCont">
                    <div onClick={() => navigate('/gear')}>
                        Gear shutter
                    </div>
                    <div>
                        Remote shutter
                    </div>
                    <div>
                        Withdraw
                    </div>
                    <div>
                        Transfer
                    </div>
                    <div>
                        Balance
                    </div>
                </div>
            </div>
        
    );
}
export default Menu;