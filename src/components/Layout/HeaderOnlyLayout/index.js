import Header from './Header';

function HeaderOnly({ children }) {
    return (
        <>
            <Header />
            <div className="container"></div>
            <div className="content">{children}</div>
        </>
    );
}

export default HeaderOnly;
