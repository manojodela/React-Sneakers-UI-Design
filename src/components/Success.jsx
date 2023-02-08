import Toast from 'react-bootstrap/Toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import successImg from '../assets/images/favicon-32x32.png';
import { counterActions } from '../Store/Counter';

const Success = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return <>
        <Toast
            onClose={() => {
                dispatch(counterActions.ResetCart());
                dispatch(counterActions.successModal())
                navigate('/')
            }}
            delay={2000} autohide>
            <Toast.Header>
                <img src={successImg} className="rounded me-2" alt="" />
                <strong className="me-auto"></strong>
            </Toast.Header>
            <Toast.Body>Woohoo, Thank you for shopping...</Toast.Body>
        </Toast>
    </>
}
export default Success;