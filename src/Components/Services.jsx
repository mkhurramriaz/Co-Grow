import React from 'react'
import Card from "./Card";

import card1 from "../assets/card1.webp"
import card2 from "../assets/card2.jpg"
import card3 from "../assets/card3.jpg"
import card4 from "../assets/card 4.jpg"
import card5 from "../assets/card5.jpg"
import card6 from "../assets/card6.jpeg"

const Services = () => {
  return (
    <section
    id="services"
>
    <h1

        className="text-gray-700 text-center   text-xl sm:text-5xl py-10 font-semibold mt-6 ">
        Packages and Services
    </h1>


    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ">
        <Card
            Heading="Daily"
            description={[
                "Flexible seat",
                "12 Hours",
                "Day/Night",
                "High Speed Internet",
                "Unlimited Tea/Coffee",
            ]}
            imgURL={card1}
            Pricing="2000 per Hour"
        />
        <Card
            Heading="Flexible Desk"
            description={[
                "Flexible Seat",
                "12 hours Monday to Saturday",
                "Day/Night",
                "High Speed Internet",
                "Unlimited Tea/Coffee",
                "Meeting Room Access",
            ]}
            imgURL={card2}
              Pricing="14000 per Month"
        />
        <Card
            Heading="Dedicated Desk"
            description={[
                "Dedicated Seat",
                "9 AM to 9 PM Monday to Saturday",
                "Day/Night",
                "High Speed Internet",
                "Unlimited Tea/Coffee",
                "Meeting Room Access",
            ]}
            imgURL={card3}
             Pricing="16000/- per Month"
        />
        <Card
            Heading="Meeting Room"
            description={[
                "Meeting Room for 4-6 Persons",
                "9 AM TO 9 PM Monday to Friday",
                "10 AM TO 6 PM Monday to Saturday",
                "High Speed Internet",
                "Unlimited Tea/Coffee",
            ]}
            imgURL={card4}
             Pricing="5000/- per Hour"
        />
        <Card
            Heading="Dedicated Office"
            description={[
                "4-10 Persons Private Offices",
                "9 AM to 9 PM Monday to Friday",
                "10 AM to 6 PM Saturday",
                "High Speed Internet",
                "Unlimited Tea/Coffee",
                "Meeting Room Access",
            ]}
            imgURL={card5}
            Pricing="Contact for Pricing"
        />
        <Card
            Heading="Conference Spaces"
            description={[
                "Conference Space for 20-50 People",
                "8-hours booking",
                "Freshments",
            ]}
            imgURL={card6}
             Pricing="From 5000 per Hour"
        />
    </div>
</section>
  )
}

export default Services