import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonList = (index) => {
    return (
        <div className="follower-container" key={index}>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <td colSpan="3">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex justify-content-between align-items-center">
                                    <Skeleton
                                        circle
                                        width={40}
                                        height={40}
                                        containerClassName="avatar-skeleton"
                                    />
                                    <span className="username pl-0 ps-2"><Skeleton width={100} height={30} /></span>
                                </div>
                                <div>
                                    <span className="twubric-total"><Skeleton width={40} height={40} /></span>
                                </div>
                            </div>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> <Skeleton /></td>
                        <td> <Skeleton /></td>
                        <td> <Skeleton /></td>
                    </tr>
                    <tr>
                        <td>
                            <span><Skeleton height={30} /></span>
                        </td>
                        <td colSpan="2">
                            <span><Skeleton height={30} /></span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default SkeletonList;
