import Location from '../components/Location';
import Territory from '../interfaces/Territory';

function Home() {

    const data: Territory[] = [
        {
            "id": "1",
            "name": "Metro Manila",
            "parent": null,
            "children": [
                {
                    "id": "101",
                    "name": "Manila",
                    "parent": "1",
                    "children": [
                        {
                            "id": "10101",
                            "name": "Malate",
                            "parent": "101"
                        },
                        {
                            "id": "10102",
                            "name": "Ermita",
                            "parent": "101"
                        },
                        {
                            "id": "10103",
                            "name": "Binondo",
                            "parent": "101"
                        }
                    ]
                },
                {
                    "id": "102",
                    "name": "Makati",
                    "parent": "1",
                    "children": [
                        {
                            "id": "10201",
                            "name": "Poblacion",
                            "parent": "102"
                        },
                        {
                            "id": "10202",
                            "name": "Bel-Air",
                            "parent": "102"
                        },
                        {
                            "id": "10203",
                            "name": "San Lorenzo",
                            "parent": "102"
                        },
                        {
                            "id": "10204",
                            "name": "Urdaneta",
                            "parent": "102"
                        }
                    ]
                },
                {
                    "id": "103",
                    "name": "Marikina",
                    "parent": "1",
                    "children": [
                        {
                            "id": "10301",
                            "name": "Sto Nino",
                            "parent": "103"
                        },
                        {
                            "id": "10302",
                            "name": "Malanday",
                            "parent": "103"
                        },
                        {
                            "id": "10303",
                            "name": "Concepcion I",
                            "parent": "103"
                        }
                    ]
                }
            ]
        },
        {
            "id": "2",
            "name": "CALABARZON",
            "parent": null,
            "children": [
                {
                    "id": "201",
                    "name": "Laguna",
                    "parent": "2",
                    "children": [
                        {
                            "id": "20101",
                            "name": "Calamba",
                            "parent": "201"
                        },
                        {
                            "id": "20102",
                            "name": "Sta. Rosa",
                            "parent": "201"
                        }
                    ]
                },
                {
                    "id": "202",
                    "name": "Cavite",
                    "parent": "2",
                    "children": [
                        {
                            "id": "20201",
                            "name": "Kawit",
                            "parent": "202"
                        }
                    ]
                },
                {
                    "id": "203",
                    "name": "Batangas",
                    "parent": "2",
                    "children": [
                        {
                            "id": "20301",
                            "name": "Lipa",
                            "parent": "203"
                        },
                        {
                            "id": "20302",
                            "name": "Tanauan",
                            "parent": "203"
                        }
                    ]
                }
            ]
        },
        {
            "id": "3",
            "name": "Central Luzon",
            "parent": null,
            "children": [
                {
                    "id": "301",
                    "name": "Bulacan",
                    "parent": "3"
                },
                {
                    "id": "302",
                    "name": "Nueva Ecija",
                    "parent": "3"
                },
                {
                    "id": "303",
                    "name": "Tarlac",
                    "parent": "3"
                },
                {
                    "id": "304",
                    "name": "Pampanga",
                    "parent": "3"
                }
            ]
        }
    ]

    return (
        <main className='mx-5 my-4'>

            <div className='mx-3 d-flex align-items-center gap-3'>
                <h1 >Territories</h1>
                <button className='btn btn-danger'>Logout</button>
            </div>

            <p className='mx-3'>Here are the list of territories</p>
            <ul>
                {
                    data.map(location => (<Location location={location} />))
                }
            </ul>
        </main>
    )
}

export default Home