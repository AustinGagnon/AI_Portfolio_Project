import './Header.css';


const Header = () => {
    return (
        <header>
            <h1 className='title'>Austin.io</h1>
            <nav>
                <ul className='nav_links'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/Projects">Projects</a></li>
                    <li><a href="/Bio">Bio</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
