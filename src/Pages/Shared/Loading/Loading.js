import React from 'react';

const Loading = () => {
    return (
        <div style={{ height:'400px'}} class="d-flex justify-content-center align-items-center">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;