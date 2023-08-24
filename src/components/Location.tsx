/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react'
import Territory from '../interfaces/Territory';

type LocationType = {
    location: Territory
}

/**
 * This is a recursive component, which handles the creation of hierarchy of the location.
 * @param location 
 * - location object with a type of Territory.
 * @returns 
 * - Location
 */
function Location({ location }: LocationType) {

    const territories = useRef(document.createElement('ul'));

    const showChildrenTerritories = (e: any) => {
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

            }} className={location.children && 'caret'}>{location.name}</span>
            {
                location.children && location.children.length > 0 && (

                    <ul ref={territories} className='nested'>
                        {location.children.map(territory => {

                            return (
                                <Location key={territory.id} location={territory} />
                            )
                        })}
                    </ul>
                )
            }
        </li>
    )
}

export default Location