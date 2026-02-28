import background from './assets/webbg.jpeg'

function Home(){
    return(
        <>
            <div className='homecontainer'>
                <img src={background} alt="BackGround Image" />
                <h1>Empowering <span>Your Digital Success</span></h1>
                <div className='Tagline'>
                    <strong>Turning Ideas into Innovation...</strong>
                    <p>Innovative IT & Digital Solutions for a Smarter World</p>
                </div>
            </div>
        </>
    )   
}

export default Home;