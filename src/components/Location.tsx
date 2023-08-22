import { useRef } from 'react'
import Territory from '../interfaces/Territory';

type LocationType = {
    location: Territory
}

function Location({ location }: LocationType) {

    const territories = useRef(null);

    const showChildrenTerritories = (e) => {
        territories.current.classList.toggle('active');
        e.currentTarget.classList.toggle('caret-down');
    }

    return (
        <li key={location.id}>
            <span tabIndex={0} onKeyDown={(e) => {
                if (e.key === " " || e.code === "Space") {

                    showChildrenTerritories(e);
                }
            }} onClick={(e) => {

                showChildrenTerritories(e);

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