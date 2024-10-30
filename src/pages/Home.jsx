

export default function Home({ allStudents }) {
    return (
        <div className="container text-center mt-5">
            <h1 className="test-center mb-4">Students</h1>
            <div className="row">
                {allStudents.map((detail) =>
                    <div className="col-md-3">
                        <div className="card">
                            <img src={detail.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{detail.name}</h5>
                                <ul class="list-group list-group-flush">
                                    <li className="list-group-item">Age: {detail.age}</li>
                                    <li className="list-group-item">Course: {detail.course}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}


