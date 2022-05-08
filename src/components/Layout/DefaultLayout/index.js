import Header from './Header';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className="container">
                <Sidebar />
            </div>
            <div className="content">{children}</div>
        </>
    );
}

export default DefaultLayout;
