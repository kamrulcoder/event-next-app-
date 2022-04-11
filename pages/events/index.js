import {getAllEvents}  from "../../dummy-data";
import EventList from "../../components/events/event-list"
import EventSearch  from "../../components/events/events-search"
import { useRouter } from "next/router";

function AllEventPage () {
    const events  = getAllEvents();
    const router = useRouter();

    function findEventsHandler(year, month) {
        const fullPath = `/events/${year}/${month}`;
        
        router.push(fullPath);
      }
    
    return ( 
        <>
        <EventSearch   onSearch={findEventsHandler} />
       <EventList   items= {events}/> 
        </>
     );
}

export default AllEventPage ;