import { Link } from 'react-router-dom';

function MainNavigation(){
    return <header>
        <div>Uhuy</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Beranda</Link>
                </li>
                <li>
                    <Link to='/about-us'>Tentang Kami</Link>
                </li>
                <li>
                    <Link to='/contact-us'>Hubungi Kami</Link>
                </li>
                <li>
                    <Link to='/login'>Masuk</Link>
                </li> 
                <li>
                    <Link to='/register'>Daftar</Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;