import React from 'react';

const Footer = () => {
    let today = new Date();
    var day = String(today.getDate()).padStart(2, '0');
    var month = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const year = today.getFullYear();
    today = month + '/' + day + '/' + year;

    return (
        <footer className="text-center mt-5">
            <h5 style={{ color: 'green' }} >
                <span style={{ color: 'red', fontSize:'20px' }}>Copyright &copy;</span> {today}
            </h5>
        </footer>
    );
};

export default Footer;