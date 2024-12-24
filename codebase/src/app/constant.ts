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
        description: "January marks the beginning of the year with vibrant festivities, including the Duruthu Perahera at Kelaniya Temple, celebrating the Buddha's first historic visit to Sri Lanka. It's a month of cultural significance and spiritual reverence.", 
        imagePath: "/festivals/january.jpg" 
    },
    { 
        route: "february", 
        month: "February", 
        description: "February celebrates Sri Lanka’s Independence Day and the grand Nawam Perahera, featuring vibrant parades, traditional dancers, and cultural pride.", 
        imagePath: "/festivals/february.jpg" 
    },
    { 
        route: "march", 
        month: "March", 
        description: "A significant Hindu festival dedicated to Lord Shiva, observed with prayers, fasting, and rituals symbolizing devotion and spiritual renewal.", 
        imagePath: "/festivals/march.jpg" 
    },
    { 
        route: "april", 
        month: "April", 
        description: "A vibrant celebration of the New Year, featuring cultural rituals, traditional games, and festive gatherings.", 
        imagePath: "/festivals/april.jpg" 
    },
    { 
        route: "may", 
        month: "May", 
        description: "May is marked by Vesak Poya, celebrating the Buddha's birth, enlightenment, and passing with serene temple visits, dazzling lantern displays, and acts of kindness.", 
        imagePath: "/festivals/may.jpg" 
    },
    { 
        route: "june", 
        month: "June", 
        description: "June commemorates the arrival of Buddhism in Sri Lanka, celebrated with sacred rituals, pilgrimages, and reflections on spiritual heritage.", 
        imagePath: "/festivals/june.jpg" 
    },
    { 
        route: "july", 
        month: "July", 
        description: "July comes alive with the Kataragama Perahera, a grand procession honoring Lord Kataragama, featuring vibrant rituals, traditional music, and colorful cultural displays.", 
        imagePath: "/festivals/july.jpg" 
    },
    { 
        route: "august", 
        month: "August", 
        description: "August shines with the majestic Kandy Esala Perahera, a grand festival honoring the Sacred Tooth Relic, featuring cultural dances, decorated elephants, and traditional rituals.", 
        imagePath: "/festivals/august.jpg" 
    },
    { 
        route: "september", 
        month: "September",  
        description: "September is marked by vibrant Muslim festivals, including Eid al-Fitr and Eid al-Adha, celebrated with prayers, feasts, and acts of charity, bringing communities together in joy and devotion.", 
        imagePath: "/festivals/september.jpg" 
    },
    { 
        route: "october", 
        month: "October", 
        description: "A joyful Hindu festival, Diwali celebrates the triumph of light over darkness, good over evil, with vibrant decorations, prayers, and festive gatherings.", 
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
        description: "A worldwide celebration of the birth of Jesus Christ, Christmas is filled with joy, festive decorations, and a spirit of giving and togetherness", 
        imagePath: "/festivals/december.jpg" 
    }
];

export { provinces, festivals };
