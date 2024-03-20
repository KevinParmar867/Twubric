import React, { useState } from 'react'
import ConfirmationModal from './ConformationModel';
import ConvertTimestamp from '../utils/convertTimeStamp';
import avatar from "../assets/avatar.png"

const UserList = ({ follower, onRemove }) => {

    const [showModal, setShowModal] = useState(false);

    const handleRemove = () => {
        setShowModal(true);
    };

    const handleConfirmRemove = () => {
        setShowModal(false);
        onRemove(follower.uid);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="follower-container">
            <table className="table table-bordered mb-0">
                <thead>
                    <tr>
                        <td colSpan="3">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <img
                                        src={follower.image}
                                        onError={(e) => { e.currentTarget.src = avatar }}
                                        width={40}
                                        alt="Avatar"
                                        className="rounded-circle img-fluid mr-2" />
                                    <span className="username mx-2">{follower.username}</span>
                                </div>
                                <div>
                                    <span className="twubric-total"><strong>{follower.twubric.total}</strong></span>
                                </div>
                            </div>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><span>Friends: {follower.twubric.friends}</span></td>
                        <td><span>Influence: {follower.twubric.influence}</span></td>
                        <td><span>Chirpiness: {follower.twubric.chirpiness}</span></td>
                    </tr>
                    <tr>
                        <td>
                            <span>{ConvertTimestamp(follower.join_date).month}</span>
                            <span> {ConvertTimestamp(follower.join_date).day}</span>
                            <span>,{ConvertTimestamp(follower.join_date).year}</span>
                        </td>
                        <td colSpan="2">
                            <div className='d-flex justify-content-end'>
                                <button className="btn btn-danger remove-btn" onClick={handleRemove}>Remove</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

            <ConfirmationModal
                showModal={showModal}
                onClose={handleCloseModal}
                onConfirm={handleConfirmRemove}
                follower={follower}
            />
        </div>
    );
}

export default UserList