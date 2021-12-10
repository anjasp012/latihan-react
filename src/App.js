import React from 'react';
import Card from './components/Card';

function App() {
    return (
        <div className="p-4">
            <div className="container">
                <h3>Posts</h3>
                <hr />
                <div className="row">
                    <div className="col-md-4">
                        <Card content={{
                            imgUrl:"http://placekitten.com/g/300/200",
                            title: "Judul Pertama",
                            published: "06 Des, 2021",
                            }}/>
                    </div>
                    <div className="col-md-4">
                        <Card content={{
                            imgUrl:"http://placekitten.com/g/300/200",
                            title: "Judul Kedua",
                            published: "07 Des, 2021",
                            }}/>
                    </div>
                    <div className="col-md-4">
                        <Card content={{
                            imgUrl:"http://placekitten.com/300/200",
                            title: "Judul Ketiga",
                            published: "08 Des, 2021",
                            }}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;