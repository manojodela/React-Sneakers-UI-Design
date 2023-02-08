import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import minus from '../assets/images/icon-minus.svg';
import plus from '../assets/images/icon-plus.svg';
import { Button } from 'react-bootstrap'
import cart from '../assets/images/icon-cart.svg';
import { useDispatch } from 'react-redux';
import { counterActions } from '../Store/Counter';
import { useSelector } from 'react-redux';
const Cart = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter.counter)

    return <Container>
        <Row className='p-3 align-items-center g-2'>
            <Col lg={5} xs={12} md={3}>
                <div className='bg-grey rounded-1'>
                    <img src={minus} alt="minus" className='click' onClick={() => { dispatch(counterActions.decrement()); }} />
                    <strong className='px-4'>{counter}</strong>
                    <img src={plus} alt="plus" className='click' onClick={() => dispatch(counterActions.increment())} />
                </div>
            </Col>
            <Col lg={6} xs={12} md={6}>
                <Button className='px-4 btn' onClick={() => dispatch(counterActions.addToCart())}>
                    <img src={cart} alt="cart" className='btn-white font-weight-bold' /> &nbsp; &nbsp; Add to cart</Button>
            </Col>
        </Row>
    </Container>
};
export default Cart;