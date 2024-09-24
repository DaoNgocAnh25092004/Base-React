import Header from '~/layouts/components/Header';

function HeaderOnly({ children }) {
    return (
        <>
            <Header />
            <div className="container">{children}</div>
        </>
    );
}

export default HeaderOnly;
