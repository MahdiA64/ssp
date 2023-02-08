import './featured.css'

import React from 'react'

const Featured = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img src="https://www.qmul.ac.uk/library/media/library/using-the-library/Mile-End-30th-March-2017.PNG" alt="Library" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Mile End Campus Library</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://www.qmul.ac.uk/media/qmul/study/london-advantage/senate-house.jpg" alt="Individual" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Individual Study Space</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://www.qmul.ac.uk/topten/media/myqmul/images/MILE-END-LIBRARY_062-1.jpg" alt="PC" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Computer Room</h1>
            </div>
        </div>
    </div>
  )
}

export default Featured;
