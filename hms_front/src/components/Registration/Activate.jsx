import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { verify } from '../../store/usersSlice';

const Activate = ({ verify }) => {
    const [verified, setVerified] = useState(false);
    const { uid, token } = useParams()
    const verify_account = e => {

        verify(uid, token);
        setVerified(true);
    };

    if (verified) {
        return <Navigate to='/verified' />
    }

    return (
        <div className='container text-center my-5'>
            <div className=''>
                <button
                    onClick={verify_account}
                    type='button'
                    className='btn btn-primary p-3'
                >
                    Verify Account
                </button>
            </div>
        </div>
    );
};

export default connect(null, { verify })(Activate);
