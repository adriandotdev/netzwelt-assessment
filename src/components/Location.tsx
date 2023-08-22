import { useRef } from 'react'
import Territory from '../interfaces/Territory';

type LocationType = {
    location: Territory
}

function Location({ location }: LocationType) {

    const territories = useRef(null);

    return (
        <li key={location.id}>
            <span onClick={(e) => {

                territories.current.classList.toggle('active');
                e.currentTarget.classList.toggle('caret-down');
            }} className='caret'>{location.name}</span>
            {
                location.children && location.children.length > 0 && (

                    <ul ref={territories} className='nested'>
                        {location.children.map(territory => {

                            return (
                                <Location location={territory} />
                            )
                        })}
                    </ul>
                )
            }
        </li>
    )
}

export default Location