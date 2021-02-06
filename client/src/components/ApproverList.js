import React from 'react';

function ApproverList({approvers, quorum}) {
    return (
        <div>
            <ul>
                <li>Approvers: { approvers.join(', ') }</li>
                <li>Quorum: { quorum }</li>
            </ul>
        </div>
    )
}

export default ApproverList;