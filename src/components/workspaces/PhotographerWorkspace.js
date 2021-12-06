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
                    start: photoshoot.start,
                    color: photoshoot.images.length === 0? "#dc3545" : "#28a745"
                });
            });
            setEvents(events);
        }
        fetch();
    }, [setEvents]);

    const handleEventClick = (clickInfo) => {
        setSelectedId();
        setSelectedId(clickInfo.event.id);
    }

    return ( 
        <div>
            <h1 className="mt-5">{new Gender(employee.gender).Greeting}</h1>
            
            <div className="row">
                <div className="col-12"><h5 className="mt-3 mb-5">Boas-vindas ao seu espaço de trabalho! Mantenha seu calendário organizado e atualize suas sessões por aqui.</h5></div>
            </div>
            <h6 className="font-weight-bold m-0">Calendário de Sessões</h6>
            <hr />
            <div className="bg-white p-3">
                <FullCalendar
                    plugins={[ dayGridPlugin ]}
                    initialView="dayGridMonth"
                    events={events}
                    eventClick={handleEventClick}
                />
            </div>
            <PhotoshootModal id={selectedId} />
        </div>
    );
}

export default PhotographerWorkspace;