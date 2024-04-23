import Logo from './../Logo/Logo'
import Requirements from '../Requirements/Requirements';

function Form()
{
    return (
        <div className='vh-100 d-flex'>
            <div className='d-md-block d-none card w-50 m-auto shadow border border-5 border-light'>
                <div className='card-header p-3 d-flex align-items-middle'>
                    <Logo/>
                    <p className='ms-auto mt-auto mb-auto display-6 fs-3 text-dark w-50 text-end'>Paper Bag Quotation Form</p>
                </div>
                <div className='card-body'>
                    <Requirements/>
                </div>
            </div>
            <div className='d-sm-block d-md-none card m-auto shadow border border-5 border-light h-75'>
                <div className='card-header p-3 d-flex align-items-middle'>
                    <Logo/>
                    <p className='ms-auto mt-auto mb-auto display-6 fs-3 text-dark text-end'>Paper Bag Quotation Form</p>
                </div>
                <div className='card-body'>
                    <Requirements/>
                </div>
            </div>
        </div>
    );
}

export default Form;