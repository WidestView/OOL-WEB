import { useEffect, useState } from "react";
import Gender from "../../util/Gender";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import PhotoshootAPI from "../../api/PhotoshootAPI";
import PhotoshootModal from "../modals/PhotoshootModal";

const PhotographerWorkspace = ({employee}) => {

    const [events, setEvents] = useState();
    const [selectedId, setSelectedId] = useState();

    useEffect(() => {
        const fetch = async () => { 
            const photoshoots = await PhotoshootAPI.getCurrent();
            const events = [];
            if(Array.isArray(photoshoots)) photoshoots.forEach(photoshoot => {
                events.push({
                    id: photoshoot.id,
                    title: photoshoot.address,
                    start: photoshoot.start
                });
            });
            setEvents(events);
        }
        fetch();
    }, [setEvents]);

    const handleEventClick = (clickInfo) => {
        setSelectedId(clickInfo.event.id);
    }

    return ( 
        <div>
            <h1>{new Gender(employee.gender).Greeting}</h1>
            <hr />
            <FullCalendar
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                events={events}
                eventClick={handleEventClick}
            />
            <PhotoshootModal id={selectedId} />
        </div>
    );
}

export default PhotographerWorkspace;