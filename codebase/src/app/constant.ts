const provinces: { 
    route: string; 
    title: string; 
    description: string; 
    imagePath: string; 
    province : string
}[] = [
    { 
        route: "central", 
        title: "Central Province", 
        description: "Known for its breathtaking hill country, tea plantations, and cultural heritage sites like the Temple of the Tooth in Kandy.", 
        imagePath: "/destinations/central_province.jpg",
        province : "Central"
    },
    { 
        route: "eastern", 
        title: "Eastern Province", 
        description: "A coastal region famous for its beautiful beaches, lagoons, and cultural diversity.", 
        imagePath: "/destinations/eastern_province.jpg" ,
        province : "Eastern"
    },
    { 
        route: "northern", 
        title: "Northern Province", 
        description: "Rich in Tamil culture and history, known for its Hindu temples and vibrant traditions.", 
        imagePath: "/destinations/northern_province.jpg" ,
        province : "Northern"
    },
    { 
        route: "northcentral", 
        title: "North Central Province", 
        description: "Home to ancient cities like Anuradhapura and Polonnaruwa, showcasing Sri Lanka's historical and archaeological marvels.", 
        imagePath: "/destinations/north_central_province.jpg" ,
        province : "Northcentral"
    },
    { 
        route: "northwestern", 
        title: "North Western Province", 
        description: "Known for its coconut plantations, fishing villages, and Wilpattu National Park.", 
        imagePath: "/destinations/north_western_province.jpg" ,
        province : "Northwestern"
    },
    { 
        route: "sabaragamuwa", 
        title: "Sabaragamuwa Province", 
        description: "Famous for gems, waterfalls, and the Sinharaja Rainforest, a UNESCO World Heritage Site.", 
        imagePath: "/destinations/sabaragamuwa_province.jpg" ,
        province : "Sabaragamuwa"
    },
    { 
        route: "southern", 
        title: "Southern Province", 
        description: "A tourist hotspot with pristine beaches, colonial-era forts, and wildlife-rich national parks.", 
        imagePath: "/destinations/southern_province.jpg" ,
        province : "Southern"
    },
    { 
        route: "uva", 
        title: "Uva Province", 
        description: "Known for its stunning landscapes, tea estates, and waterfalls like Dunhinda Falls.", 
        imagePath: "/destinations/uva_province.jpg" ,
        province : "Uva"
    },
    { 
        route: "western", 
        title: "Western Province", 
        description: "The commercial hub of Sri Lanka, housing the capital Colombo and many urban attractions.", 
        imagePath: "/destinations/western_province.jpg" ,
        province : "Western"
    }
];

const festivals: { 
    month: string; 
    description: string; 
    imagePath: string; 
    route: string
}[] = [
    { 
        route: "january", 
        month: "January",  
        description: "A grand procession held at Kelaniya Temple to commemorate the Buddha's first visit to Sri Lanka.", 
        imagePath: "/festivals/january.jpg" 
    },
    { 
        route: "february", 
        month: "February", 
        description: "A vibrant religious procession in Colombo with elephants, dancers, and traditional drummers.", 
        imagePath: "/festivals/february.jpg" 
    },
    { 
        route: "march", 
        month: "March", 
        description: "A Hindu festival celebrating Lord Shiva with prayers and fasting.", 
        imagePath: "/festivals/march.jpg" 
    },
    { 
        route: "april", 
        month: "April", 
        description: "A cultural celebration marking the New Year with traditional games and rituals.", 
        imagePath: "/festivals/april.jpg" 
    },
    { 
        route: "may", 
        month: "May", 
        description: "Celebrating the birth, enlightenment, and passing of Buddha with lanterns and temple visits.", 
        imagePath: "/festivals/may.jpg" 
    },
    { 
        route: "june", 
        month: "June", 
        description: "Commemorates the introduction of Buddhism to Sri Lanka with rituals and pilgrimages.", 
        imagePath: "/festivals/june.jpg" 
    },
    { 
        route: "july", 
        month: "July", 
        description: "A grand procession in Kandy showcasing the sacred tooth relic of Buddha.", 
        imagePath: "/festivals/july.jpg" 
    },
    { 
        route: "august", 
        month: "August", 
        description: "A vibrant multi-religious festival dedicated to Lord Kataragama.", 
        imagePath: "/festivals/august.jpg" 
    },
    { 
        route: "september", 
        month: "September",  
        description: "A Buddhist celebration focusing on the spiritual significance of the full moon.", 
        imagePath: "/festivals/september.jpg" 
    },
    { 
        route: "october", 
        month: "October", 
        description: "The Hindu festival of lights symbolizing the victory of light over darkness.", 
        imagePath: "/festivals/october.jpg" 
    },
    { 
        route: "november", 
        month: "November", 
        description: "Commemorates the Buddha’s teachings and spiritual milestones.", 
        imagePath: "/festivals/november.jpg" 
    },
    { 
        route: "december", 
        month: "December", 
        description: "A global celebration of the birth of Jesus Christ, marked by festivities and decorations.", 
        imagePath: "/festivals/december.jpg" 
    }
];

export { provinces, festivals };
