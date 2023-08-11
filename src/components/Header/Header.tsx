import './Header.css';


const Header = () => {
    return (
        <header>
            <a className='title' href='/' ><h1>Austin.io</h1></a>
            <nav>
                <a className="navLink1" href="/">Home</a>
                <a className="navLink2" href="/Projects">Projects</a>
                <a className="navLink3" href="/Bio">Bio</a>
            </nav>
        </header>
    );
};

export default Header;
