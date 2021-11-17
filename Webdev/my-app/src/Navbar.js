import { useState } from 'react';

const Navbar = () => {
    const [name, setName] = useState('Log In');

    const loginClick = () => {
        setName('Logged In')
    }

    return (
        <nav className="navbar">
            <img src={require("./png/logo_betis.jpg").default} height={50} width={50} />
            <div className="links">
                <a href="/">HOME</a>
                <a href="/about">About</a>
                <a href="/faq">FAQ</a>
                <a href="/login">
                    <button onClick={loginClick} style={{
                    height: "30px",
                    width: "100px",
                    color: "white",
                    backgroundColor: '#68873e',
                    borderRadius: '4px',
                }}>{name}</button></a>
            </div>
        </nav>
    );
}

export default Navbar;