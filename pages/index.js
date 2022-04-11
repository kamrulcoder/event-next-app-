import Head from 'next/head'
import Image from 'next/image'
import EventList from "../components/events/event-list"
import {getFeaturedEvents}  from "../dummy-data"

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <>

     <EventList   items={featuredEvents}/>
     </>
  
  )
}
