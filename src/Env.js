
const Env = () => {
    return (
        <>
            <h1 className="fs-4 text-center my-3">Env file Test</h1>
            {process.env.REACT_APP_TITLE}
            {process.env.REACT_APP_DESCRIPTION}
            {process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_MODE : process.env.REACT_APP_PRO_MODE}
        </>
    )
}

export default Env;