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

interface DestinationDetails {
    name: string;
    mainDescription: string;
    imagePath: string;
    things_to_do: string;
}

type DestinationPageDetails = {
    [province: string]: DestinationDetails;
};

const dynamicDestinationPageDetails: DestinationPageDetails  = {
    western: {
        name: "Western Province",
        mainDescription: "The Western Province is the bustling heart of Sri Lanka, encompassing the nation's vibrant commercial capital, Colombo, and its surrounding areas. Known for its dynamic urban lifestyle, cultural landmarks, and scenic coastal beauty, this province serves as the gateway to Sri Lanka's rich history and modern development.\n\nKey attractions include the iconic Colombo National Museum, showcasing the island's historical treasures, and the Galle Face Green, a picturesque oceanfront park perfect for evening strolls and sampling local street food. Visitors can explore the historic Kelaniya Temple, believed to have been visited by the Buddha, or relax at the serene Mount Lavinia Beach, renowned for its romantic dining spots.\n\nFor nature lovers, the Beddagana Wetland Park offers tranquil trails for birdwatching, while families and couples can enjoy the riverside charm of Diyatha Uyana. The province blends cultural significance with modern amenities, making it a must-visit destination for travelers seeking both relaxation and adventure.\n\nWhether you're drawn to the lively nightlife, historical landmarks, or natural escapes, the Western Province offers something for everyone.",
        imagePath: '/destinations/western_province',
        things_to_do: 'The Western Province of Sri Lanka offers a perfect blend of culture, history, and modernity. Explore Colombos vibrant nightlife, serene beaches, lush wetlands, historical temples, bustling markets, scenic parks, and diverse dining options. Enjoy coastal relaxation at Mount Lavinia, family outings at Diyatha Uyana, and cultural experiences at Kelaniya Temple and Colombo National Museum, making it a must-visit destination.'
    },
    central: {
        name: "Central Province",
        mainDescription: "The Central Province of Sri Lanka is a treasure trove of natural beauty and cultural heritage. Dominated by misty mountains and lush tea plantations, it is home to the historic city of Kandy, a UNESCO World Heritage Site. Kandy is famed for the Sacred Tooth Relic Temple, an important pilgrimage site for Buddhists worldwide.\n\nNuwara Eliya, often referred to as 'Little England,' offers a cool climate, colonial-era charm, and sprawling tea estates. Adventure seekers can explore the Horton Plains National Park, featuring breathtaking vistas, cloud forests, and the dramatic World's End precipice.\n\nVisitors can also immerse themselves in the vibrant local markets, traditional dance performances, and serene botanical gardens such as the Peradeniya Royal Botanical Garden. With its blend of spiritual significance and natural wonders, the Central Province promises an unforgettable experience for every traveler.",
        imagePath: '/destinations/central_province',
        things_to_do: 'In the Central Province, explore the Sacred Tooth Relic Temple, hike Horton Plains, visit tea plantations in Nuwara Eliya, and relax in the Peradeniya Botanical Gardens. Discover the cultural charm and natural beauty of Kandy and its surroundings.'
    },
    southern: {
        name: "Southern Province",
        mainDescription: "The Southern Province of Sri Lanka boasts a stunning coastline, rich history, and vibrant cultural experiences. Galle, the provincial capital, is renowned for the UNESCO-listed Galle Fort, a 17th-century Dutch colonial fortification. The province's pristine beaches, such as Unawatuna, Mirissa, and Tangalle, offer ideal spots for sunbathing, surfing, and whale watching.\n\nFor wildlife enthusiasts, the Yala National Park provides exciting safaris to spot leopards, elephants, and other exotic animals. Visitors can also explore ancient Buddhist temples like Mulkirigala Raja Maha Vihara and enjoy the laid-back charm of fishing villages along the coast.\n\nWhether you're seeking beachside relaxation, wildlife adventures, or cultural exploration, the Southern Province delivers an enchanting blend of experiences for all types of travelers.",
        imagePath: '/destinations/southern_province',
        things_to_do: 'Enjoy the Southern Province with safaris at Yala National Park, relaxation at Unawatuna Beach, surfing at Mirissa, and exploring the Galle Fort. Dive into cultural and natural beauty in this coastal paradise.'
    },
    northern: {
        name: "Northern Province",
        mainDescription: "The Northern Province of Sri Lanka is a unique blend of history, culture, and unspoiled natural beauty. Once impacted by conflict, the region is now open to visitors eager to explore its cultural and historical heritage. Jaffna, the provincial capital, is known for its vibrant Tamil culture, stunning Hindu temples, and colonial-era architecture.\n\nNotable attractions include the Nallur Kandaswamy Temple, a revered Hindu shrine, and the ancient Jaffna Fort, which offers panoramic views of the city. The pristine Casuarina Beach and the remote islands of the Jaffna Peninsula are perfect for a tranquil escape.\n\nVisitors can also immerse themselves in the local cuisine, featuring spicy curries and traditional seafood dishes. For history enthusiasts, the Nagadeepa Purana Vihara, accessible by boat, is a must-visit sacred Buddhist site.",
        imagePath: '/destinations/northern_province',
        things_to_do: 'In the Northern Province, explore Jaffnas cultural landmarks, relax at Casuarina Beach, visit the Jaffna Fort, and enjoy unique Tamil cuisine. Discover a region rich in history and charm.'
    },
    eastern: {
        name: "Eastern Province",
        mainDescription: "The Eastern Province of Sri Lanka is known for its pristine beaches, diverse ecosystems, and rich cultural tapestry. Trincomalee, the province's main city, offers stunning coastal beauty with its natural harbor, and iconic landmarks such as the Koneswaram Temple and Marble Beach. \n\nFor beach lovers, Nilaveli and Passikudah are among the most beautiful in Sri Lanka, boasting clear waters and soft sands. Arugam Bay is a world-famous surfing destination, attracting both professionals and beginners alike. Nature enthusiasts can explore the lagoons, mangroves, and wildlife of the Batticaloa District. \n\nThis province also features significant historical and cultural sites, such as the Batticaloa Fort and various ancient Hindu temples. With its tranquil beaches and cultural richness, the Eastern Province is perfect for travelers seeking serenity and adventure.",
        imagePath: '/destinations/eastern_province',
        things_to_do: 'Relax on Passikudah and Nilaveli beaches, surf at Arugam Bay, visit Koneswaram Temple, explore Batticaloa Fort, and enjoy the pristine coastal and cultural charm of the Eastern Province.'
    },
    north_central: {
        name: "North Central Province",
        mainDescription: "The North Central Province is the cultural and historical heart of Sri Lanka, often referred to as the 'Rajarata' or the Land of Kings. This region is home to two of the island's ancient capitals, Anuradhapura and Polonnaruwa, both UNESCO World Heritage Sites. \n\nAnuradhapura is famed for its ancient stupas, royal palaces, and the sacred Jaya Sri Maha Bodhi tree, believed to be the oldest recorded living tree in the world. Polonnaruwa showcases well-preserved ruins, including the Gal Viharaya's stunning rock-carved Buddha statues. \n\nVisitors can also explore the Minneriya and Kaudulla National Parks, known for their large elephant gatherings. The massive Sigiriya Rock Fortress, a marvel of ancient engineering and artistry, is a must-visit. The North Central Province offers a journey back in time, combined with the beauty of its natural landscapes.",
        imagePath: '/destinations/north_central_province',
        things_to_do: 'Discover the ancient cities of Anuradhapura and Polonnaruwa, visit Sigiriya Rock Fortress, and enjoy wildlife safaris at Minneriya National Park, all in the historic North Central Province.'
    },
    uva: {
        name: "Uva Province",
        mainDescription: "Uva Province is a serene and scenic region in Sri Lanka, known for its lush greenery, waterfalls, and cultural landmarks. Ella, a charming hill town, is a major highlight, offering stunning views from Ella Rock and Little Adam's Peak. The Nine Arches Bridge, a colonial-era railway marvel, is another iconic attraction. \n\nFor history enthusiasts, the ancient Dhowa Rock Temple features intricate carvings and paintings. Nature lovers can explore the Ravana Falls, one of Sri Lanka's most picturesque waterfalls, and enjoy treks through verdant tea plantations. \n\nUva is also famous for its tea estates, producing some of the finest Ceylon tea. The province provides a tranquil escape for those looking to unwind amidst natural beauty.",
        imagePath: '/destinations/uva_province',
        things_to_do: 'Explore Ella’s breathtaking views, trek to Little Adam’s Peak, visit the Nine Arches Bridge, marvel at Ravana Falls, and discover the cultural charm of the Uva Province.'
    },
    sabaragamuwa: {
        name: "Sabaragamuwa Province",
        mainDescription: "The Sabaragamuwa Province is a land of natural wonders, waterfalls, and wildlife. It is home to the world-famous Sinharaja Forest Reserve, a UNESCO World Heritage Site, offering breathtaking biodiversity and excellent opportunities for eco-tourism.\n\nThe province also features some of the island's most spectacular waterfalls, including Bopath Ella and the awe-inspiring Aberdeen Falls. Adventure seekers can enjoy white-water rafting in Kitulgala, a popular destination for water sports and hiking.\n\nRatnapura, known as the 'City of Gems,' offers visitors a chance to explore gem mines and learn about Sri Lanka's gem trade. Sabaragamuwa's mix of natural beauty, adventure, and cultural significance makes it a hidden gem waiting to be discovered.",
        imagePath: '/destinations/sabaragamuwa_province',
        things_to_do: 'Visit the Sinharaja Forest Reserve, explore gem mines in Ratnapura, admire stunning waterfalls like Bopath Ella, and enjoy rafting in Kitulgala.'
    },
    north_western: {
        name: "North Western Province",
        mainDescription: "The North Western Province, also known as Wayamba, is rich in history, wildlife, and cultural heritage. It is home to the ancient city of Kurunegala and the sacred Munneswaram Temple, an important Hindu religious site. \n\nNature lovers can explore the Wilpattu National Park, one of Sri Lanka’s largest and oldest parks, known for its leopards and tranquil villus (natural lakes). The province also features the Yapahuwa Rock Fortress, a historical site with fascinating rock carvings and stunning views from its summit.\n\nWith its blend of history, spirituality, and natural beauty, the North Western Province provides a serene and enriching experience for visitors.",
        imagePath: '/destinations/north_western_province',
        things_to_do: 'Explore Wilpattu National Park, visit Yapahuwa Rock Fortress, and discover the cultural significance of Munneswaram Temple in the North Western Province.'
    }

};
interface FestivalnDetails {
    name: string;
    mainDescription: string;
    imagePath: string;
    things_to_do: string;
}

type FestivalnPageDetails = {
    [province: string]: FestivalnDetails;
};


const dynamicFestivalPageDetails: FestivalnPageDetails = {
    january: {
        name: "January",
        mainDescription: "January is a month full of vibrant celebrations and cultural festivities in Sri Lanka. It marks the beginning of the year with national events like New Year's Day, celebrated with enthusiasm and a sense of renewal across the country. The month also holds significant Buddhist celebrations, like the Duruthu Perahera, which takes place in Colombo and features a grand procession to honor the first visit of Lord Buddha to Sri Lanka. The cool and festive atmosphere of January provides a great opportunity for locals and visitors alike to explore the rich traditions and join in the national spirit of unity and joy.",
        imagePath: "/festivals/january.jpg",
        things_to_do: "Experience the lively celebrations of New Year's Day, enjoy the cultural significance of the Duruthu Perahera, and explore the various local events that welcome the new year with festivities."
    },
    february: {
        name: "February",
        mainDescription: "February is a month of celebration and cultural expression, especially with the exciting and colorful Kandy Esala Perahera. The month also sees the celebration of Valentine's Day, widely observed with love and affection in both urban and rural areas across the country. The cooler climate of this month makes it perfect for traveling and exploring Sri Lanka's scenic beauty while engaging in the festivities that showcase Sri Lanka's artistic and cultural heritage.",
        imagePath: "/festivals/february.jpg",
        things_to_do: "Take part in Valentine's Day festivities, witness the grand Kandy Esala Perahera, and enjoy cultural performances and dances that celebrate love and tradition."
    },
    march: {
        name: "March",
        mainDescription: "March in Sri Lanka is a time of cultural and religious celebrations, with the Sinhala and Tamil New Year often falling towards the end of the month. The month also features the National Day of Sri Lanka, commemorating the country’s independence. The vibrant celebrations offer a blend of rich traditions, cultural dances, and delicious traditional foods that highlight the country's cultural diversity.",
        imagePath: "/festivals/march.jpg",
        things_to_do: "Join in the celebrations of Sinhala and Tamil New Year, enjoy traditional Sri Lankan foods and sweets, and take part in local festivities marking National Day."
    },
    april: {
        name: "April",
        mainDescription: "April marks the grand celebration of the Sinhala and Tamil New Year, a festive time full of traditional customs, games, and delicious foods. It is a joyous occasion for families to reunite, enjoy the holiday, and take part in various traditional rituals. The month is also associated with the traditional 'Aluth Avurudda' festival that celebrates the harvest and the passing of the zodiac year.",
        imagePath: "/festivals/april.jpg",
        things_to_do: "Participate in the Sinhala and Tamil New Year rituals, enjoy traditional games and foods, and explore the cultural significance of the Aluth Avurudda."
    },
    may: {
        name: "May",
        mainDescription: "May is a month where Sri Lanka celebrates the Buddha’s birth, enlightenment, and death with great reverence, especially with the Vesak festival. This significant Buddhist holiday is marked by colorful lanterns, religious observances, and displays of devotion across the country. The month also includes the annual May Day celebrations, where workers come together to celebrate labor rights and achievements.",
        imagePath: "/festivals/may.jpg",
        things_to_do: "Celebrate Vesak with lantern displays, visit temples for religious observances, and join in the May Day festivities honoring labor rights."
    },
    june: {
        name: "June",
        mainDescription: "June brings with it the start of the rainy season and quieter festivities compared to the previous months. However, it marks the beginning of the local cultural events that focus on the harvest, especially in rural Sri Lanka. Many small, regional festivals celebrate agriculture, nature, and community, providing insight into the traditional life of Sri Lankan villages.",
        imagePath: "/festivals/june.jpg",
        things_to_do: "Visit local harvest festivals, explore rural cultural traditions, and experience the serene beauty of Sri Lanka's nature during the rainy season."
    },
    july: {
        name: "July",
        mainDescription: "July in Sri Lanka is marked by the grand and colorful Esala Perahera in Kandy, one of the most famous Buddhist festivals in the country. This event is a spectacular procession of elephants, dancers, drummers, and religious ceremonies to honor the Sacred Tooth Relic of Buddha. The atmosphere is filled with devotion, cultural displays, and a deep sense of history and tradition.",
        imagePath: "/festivals/july.jpg",
        things_to_do: "Experience the Esala Perahera in Kandy, witness the grand procession, and explore the cultural heritage of the Sacred Tooth Relic."
    },
    august: {
        name: "August",
        mainDescription: "August features several vibrant festivals and celebrations, including the Nuwara Eliya Flower Festival, where the cool climate of the hill country creates a beautiful display of blooming flowers. This is also the time for the annual Galle Literary Festival, attracting writers and book lovers from around the world to this coastal city. The month is also marked by ongoing Buddhist ceremonies and smaller regional celebrations.",
        imagePath: "/festivals/august.jpg",
        things_to_do: "Attend the Nuwara Eliya Flower Festival, visit the Galle Literary Festival, and enjoy the cooler weather and local Buddhist ceremonies."
    },
    september: {
        name: "September",
        mainDescription: "September is a quieter month with fewer large-scale festivals. However, it’s the time for the harvest moon celebrations, marking the full moon with cultural activities in rural areas. September also brings a focus on art, craft, and local performances, as communities across Sri Lanka celebrate their creative traditions.",
        imagePath: "/festivals/september.jpg",
        things_to_do: "Participate in harvest moon celebrations, visit local arts and crafts exhibitions, and enjoy performances highlighting Sri Lanka’s cultural heritage."
    },
    october: {
        name: "October",
        mainDescription: "October is the time for the grand Navaratri festival, celebrated by Sri Lanka’s Hindu communities. This nine-day event is filled with music, dance, and prayers dedicated to the Goddess Durga. October is also a good time for visiting cultural exhibitions and experiencing Sri Lanka’s artistic traditions.",
        imagePath: "/festivals/october.jpg",
        things_to_do: "Celebrate Navaratri with vibrant music and dances, visit temples, and explore Sri Lanka's cultural exhibitions and art showcases."
    },
    november: {
        name: "November",
        mainDescription: "November is a time for reflection and celebration, with significant Buddhist holidays such as Deepavali, celebrated by the Hindu community. It’s a month filled with religious observances, prayers, and family gatherings. The weather is perfect for outdoor events, and several cultural performances are held across the country.",
        imagePath: "/festivals/november.jpg",
        things_to_do: "Celebrate Deepavali with family and prayers, attend cultural performances, and explore the religious and cultural heritage of Sri Lanka."
    },
    december: {
        name: "December",
        mainDescription: "December brings the festive spirit of Christmas and the New Year celebrations, marked with lights, decorations, and community events. Sri Lankans celebrate Christmas with family gatherings, traditional meals, and joyful festivities. The month also includes various religious observances, including Buddhist ceremonies and regional cultural festivals.",
        imagePath: "/festivals/december.jpg",
        things_to_do: "Celebrate Christmas with family and community events, enjoy the festive decorations around cities, and attend New Year's Eve celebrations."
    }
};


export { provinces, festivals, dynamicDestinationPageDetails, dynamicFestivalPageDetails };
