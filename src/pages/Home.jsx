import './Home.css'

function Home() {
    return(
        <>
            <div className="home">
                <div className="container">
                    <div className="title">
                        School Tracker
                    </div>
                    <div className="subtitle">
                        Keep track of your school timetable and homework with ease.
                    </div>
                </div>
                <div className="about">
                    <div className="author">
                        Created by Oliver Hughes.
                    </div>
                    <a href="https://github.com/Yeskonerism" className="github"> GitHub</a>
                </div>
            </div>
        </>
    )
}

export default Home;