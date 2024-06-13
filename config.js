
export const DOMAIN = 'http://localhost:3000';
// export const DOMAIN = 'https://www.vinlandsagamanga.in.net';


export const MANGA_DESCRIPTION = `Set in the Viking era, this manga follows Thorfinn's quest for revenge and his dream of finding the legendary land of Vinland. Filled with action and historical drama, <a href="${DOMAIN}"><u>Vinland Saga</u></a> is a thrilling story about battles, honor, and the search for peace. Perfect for fans of exciting, historical tales. Experience the gripping adventures of Thorfinn as he navigates through the tumultuous Viking world, facing formidable challenges and discovering his own path to redemption.`;

export const MANGA_NAME = 'Blue Lock';
export const MANGA_AUTHOR = 'YUKIMURA Makoto';
export const MANGA_RELEASE = '2015';
export const MANGA_STATUS = 'Ongoing';
export const MANGA_ARTIST = 'Makoto YUKIMURA ';
export const MANGA_STUDIO = 'Wit, MAPPA';
export const MANGA_GENRE = 'Action, Adventure, Drama, Historical, Seinen';

export const CHAPTER_PREFIX = 'blue-lock-chapter';
export const IMAGE_PREFIX = 'images/blue-lock';
export const NEXT_PREVIOUS_PREFIX = 'manga/blue-lock-chapter';
export const URL_PREFIX = 'manga/blue-lock-chapter';

export const AUTHOR_PAGE = `${DOMAIN}/blue-lock-team`;
export const LOGO_URL = `${DOMAIN}/logo.webp`;
export const COVER_IMG = `${DOMAIN}/cover.webp`;
export const BEHIND_COVER_IMG = "";



export const APP_DESCRIPTION = `Read Vinland Saga manga online at "${DOMAIN}". Enjoy high-quality scans, latest chapters, and connect with fans in our vibrant community. Dive into the epic Viking adventure today!`;

export const DISQUS_SHORTNAME = "my-cms-7";


export const MANGA_SUMMARY = [
    {
        id: 1,
        content: "Vinland Saga is a gripping manga and anime series that plunges viewers into the tumultuous world of Vikings during the Viking Age. At its core is the compelling story of Thorfinn, a young boy whose life is shattered when his father, Thors, a renowned warrior, is killed. Driven by an unquenchable thirst for vengeance, Thorfinn embarks on a perilous journey to avenge his father's death."
    },
    {
        id: 2,
        content: "As the series unfolds, viewers are taken on a gripping adventure filled with intense battles, complex characters, and moral dilemmas. Thorfinn's quest for revenge leads him into the heart of the Viking world, where he encounters warlords, mercenaries, and fellow warriors, each with their own motivations and agendas."
    },
    {
        id: 3,
        content: "Yet, amidst the chaos of battle and the brutality of Viking society, Thorfinn's journey also becomes one of self-discovery and redemption. Along the way, he grapples with questions of honor, loyalty, and the true meaning of strength. As Thorfinn confronts the harsh realities of his world, he begins to question his desire for vengeance and yearns for a life of peace and purpose."
    },
    {
        id: 4,
        content: "The concept of Vinland, a legendary land across the sea where conflict is replaced by harmony, serves as both a literal and metaphorical destination for Thorfinn. It represents his ultimate goal – a place where he can escape the cycle of violence and find a new beginning."
    },
    {
        id: 5,
        content: "Through stunning artwork, intricate storytelling, and rich historical detail, Vinland Saga captivates audiences with its exploration of themes such as justice, identity, and the human spirit. It challenges viewers to confront the complexities of morality and the consequences of one's actions, all within the vivid backdrop of Viking-era Scandinavia."
    },
    {
        id: 6,
        content: "In the end, Vinland Saga is not just a tale of revenge, but a profound saga of growth, redemption, and the enduring search for meaning in a world torn apart by conflict."
    }
];


// Navbar
export const logo = <img src={`${LOGO_URL}`} alt="Logo" className="h-[75px] w-[185px] mr-5 md:ml-0 ml-4 md:pb-2 md:my-0 my-1" />

export const APP_NAME = 'Blue Lock';
export const NavbarName = "Blue Lock";

export const navLinks = [
    { text: 'Home', href: `${DOMAIN}` },
    { text: 'DMCA', href: `${DOMAIN}/dmca` },
    { text: 'Terms & Conditions', href: `${DOMAIN}/terms-and-conditions` },
];

export const FooterLinks = [
    { text: 'About', href: `${DOMAIN}/about` },
    { text: 'Contact', href: `${DOMAIN}/contact` },
    { text: 'Disclaimer', href: `${DOMAIN}/disclaimer` },
    { text: 'Privacy Policy', href: `${DOMAIN}/privacy-policy` },
    { text: 'Terms & Conditions', href: `${DOMAIN}/terms-and-conditions` }
];


export const RelatedMangaLinks = [
    {
        imageUrl: `${DOMAIN}/related/frieran.webp`,
        title: 'Frieran',
        link: 'https://www.frieranmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/one-punch-man.webp`,
        title: 'One Punch Man',
        link: 'https://www.onepunchmanmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/vinland-saga.webp`,
        title: 'Vinland Saga',
        link: 'https://www.vinlandsagamanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/jujutsu-kaisen.webp`,
        title: 'Jujutsu Kaisen',
        link: 'https://www.jujutsukaisenmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/black-clover.webp`,
        title: 'Black Clover',
        link: 'https://www.blackclovermanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/chainsaw-man.webp`,
        title: 'Chainsaw Man',
        link: 'https://www.chainsawmanmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/mushoku-tensei.webp`,
        title: 'Mushoku Tensei',
        link: 'https://www.mushokutenseimanga.in.net',
    },
];




export const chaptersData = [
    {
        "chapterNumber": "1",
        "numImages": 73
    },
    {
        "chapterNumber": "2",
        "numImages": 71
    },
    {
        "chapterNumber": "3",
        "numImages": 24
    },
    {
        "chapterNumber": "4",
        "numImages": 20
    },
    {
        "chapterNumber": "5",
        "numImages": 21
    },
    {
        "chapterNumber": "6",
        "numImages": 20
    },
    {
        "chapterNumber": "7",
        "numImages": 18
    },
    {
        "chapterNumber": "8",
        "numImages": 19
    },
    {
        "chapterNumber": "9",
        "numImages": 20
    },
    {
        "chapterNumber": "10",
        "numImages": 20
    },
    {
        "chapterNumber": "11",
        "numImages": 20
    },
    {
        "chapterNumber": "12",
        "numImages": 17
    },
    {
        "chapterNumber": "13",
        "numImages": 25
    },
    {
        "chapterNumber": "14",
        "numImages": 24
    },
    {
        "chapterNumber": "15",
        "numImages": 18
    },
    {
        "chapterNumber": "16",
        "numImages": 17
    },
    {
        "chapterNumber": "17",
        "numImages": 20
    },
    {
        "chapterNumber": "18",
        "numImages": 20
    },
    {
        "chapterNumber": "19",
        "numImages": 19
    },
    {
        "chapterNumber": "20",
        "numImages": 18
    },
    {
        "chapterNumber": "21",
        "numImages": 17
    },
    {
        "chapterNumber": "22",
        "numImages": 25
    },
    {
        "chapterNumber": "23",
        "numImages": 23
    },
    {
        "chapterNumber": "24",
        "numImages": 19
    },
    {
        "chapterNumber": "25",
        "numImages": 20
    },
    {
        "chapterNumber": "26",
        "numImages": 19
    },
    {
        "chapterNumber": "27",
        "numImages": 19
    },
    {
        "chapterNumber": "28",
        "numImages": 19
    },
    {
        "chapterNumber": "29",
        "numImages": 17
    },
    {
        "chapterNumber": "30",
        "numImages": 19
    },
    {
        "chapterNumber": "31",
        "numImages": 22
    },
    {
        "chapterNumber": "32",
        "numImages": 20
    },
    {
        "chapterNumber": "33",
        "numImages": 19
    },
    {
        "chapterNumber": "34",
        "numImages": 20
    },
    {
        "chapterNumber": "35",
        "numImages": 20
    },
    {
        "chapterNumber": "36",
        "numImages": 21
    },
    {
        "chapterNumber": "37",
        "numImages": 13
    },
    {
        "chapterNumber": "38",
        "numImages": 21
    },
    {
        "chapterNumber": "39",
        "numImages": 19
    },
    {
        "chapterNumber": "40",
        "numImages": 20
    },
    {
        "chapterNumber": "41",
        "numImages": 20
    },
    {
        "chapterNumber": "42",
        "numImages": 20
    },
    {
        "chapterNumber": "43",
        "numImages": 18
    },
    {
        "chapterNumber": "44",
        "numImages": 21
    },
    {
        "chapterNumber": "45",
        "numImages": 19
    },
    {
        "chapterNumber": "46",
        "numImages": 20
    },
    {
        "chapterNumber": "47",
        "numImages": 22
    },
    {
        "chapterNumber": "48",
        "numImages": 20
    },
    {
        "chapterNumber": "49",
        "numImages": 20
    },
    {
        "chapterNumber": "50",
        "numImages": 20
    },
    {
        "chapterNumber": "51",
        "numImages": 20
    },
    {
        "chapterNumber": "52",
        "numImages": 19
    },
    {
        "chapterNumber": "53",
        "numImages": 20
    },
    {
        "chapterNumber": "54",
        "numImages": 17
    },
    {
        "chapterNumber": "55",
        "numImages": 21
    },
    {
        "chapterNumber": "56",
        "numImages": 21
    },
    {
        "chapterNumber": "57",
        "numImages": 20
    },
    {
        "chapterNumber": "58",
        "numImages": 21
    },
    {
        "chapterNumber": "59",
        "numImages": 20
    },
    {
        "chapterNumber": "60",
        "numImages": 18
    },
    {
        "chapterNumber": "61",
        "numImages": 19
    },
    {
        "chapterNumber": "62",
        "numImages": 18
    },
    {
        "chapterNumber": "63",
        "numImages": 19
    },
    {
        "chapterNumber": "64",
        "numImages": 19
    },
    {
        "chapterNumber": "65",
        "numImages": 18
    },
    {
        "chapterNumber": "66",
        "numImages": 21
    },
    {
        "chapterNumber": "67",
        "numImages": 18
    },
    {
        "chapterNumber": "68",
        "numImages": 18
    },
    {
        "chapterNumber": "69",
        "numImages": 21
    },
    {
        "chapterNumber": "70",
        "numImages": 21
    },
    {
        "chapterNumber": "71",
        "numImages": 19
    },
    {
        "chapterNumber": "72",
        "numImages": 21
    },
    {
        "chapterNumber": "73",
        "numImages": 19
    },
    {
        "chapterNumber": "74",
        "numImages": 18
    },
    {
        "chapterNumber": "75",
        "numImages": 20
    },
    {
        "chapterNumber": "76",
        "numImages": 19
    },
    {
        "chapterNumber": "77",
        "numImages": 20
    },
    {
        "chapterNumber": "78",
        "numImages": 20
    },
    {
        "chapterNumber": "79",
        "numImages": 21
    },
    {
        "chapterNumber": "80",
        "numImages": 20
    },
    {
        "chapterNumber": "81",
        "numImages": 23
    },
    {
        "chapterNumber": "82",
        "numImages": 21
    },
    {
        "chapterNumber": "83",
        "numImages": 20
    },
    {
        "chapterNumber": "84",
        "numImages": 24
    },
    {
        "chapterNumber": "85",
        "numImages": 19
    },
    {
        "chapterNumber": "86",
        "numImages": 22
    },
    {
        "chapterNumber": "87",
        "numImages": 22
    },
    {
        "chapterNumber": "88",
        "numImages": 21
    },
    {
        "chapterNumber": "89",
        "numImages": 18
    },
    {
        "chapterNumber": "90",
        "numImages": 21
    },
    {
        "chapterNumber": "91",
        "numImages": 18
    },
    {
        "chapterNumber": "92",
        "numImages": 20
    },
    {
        "chapterNumber": "93",
        "numImages": 20
    },
    {
        "chapterNumber": "94",
        "numImages": 22
    },
    {
        "chapterNumber": "95",
        "numImages": 21
    },
    {
        "chapterNumber": "96",
        "numImages": 19
    },
    {
        "chapterNumber": "97",
        "numImages": 20
    },
    {
        "chapterNumber": "98",
        "numImages": 19
    },
    {
        "chapterNumber": "99",
        "numImages": 19
    },
    {
        "chapterNumber": "100",
        "numImages": 21
    },
    {
        "chapterNumber": "101",
        "numImages": 19
    },
    {
        "chapterNumber": "102",
        "numImages": 16
    },
    {
        "chapterNumber": "103",
        "numImages": 17
    },
    {
        "chapterNumber": "104",
        "numImages": 19
    },
    {
        "chapterNumber": "105",
        "numImages": 21
    },
    {
        "chapterNumber": "106",
        "numImages": 19
    },
    {
        "chapterNumber": "107",
        "numImages": 21
    },
    {
        "chapterNumber": "108",
        "numImages": 21
    },
    {
        "chapterNumber": "109",
        "numImages": 18
    },
    {
        "chapterNumber": "110",
        "numImages": 21
    },
    {
        "chapterNumber": "111",
        "numImages": 21
    },
    {
        "chapterNumber": "112",
        "numImages": 18
    },
    {
        "chapterNumber": "113",
        "numImages": 16
    },
    {
        "chapterNumber": "114",
        "numImages": 17
    },
    {
        "chapterNumber": "115",
        "numImages": 18
    },
    {
        "chapterNumber": "116",
        "numImages": 20
    },
    {
        "chapterNumber": "117",
        "numImages": 16
    },
    {
        "chapterNumber": "118",
        "numImages": 20
    },
    {
        "chapterNumber": "119",
        "numImages": 20
    },
    {
        "chapterNumber": "120",
        "numImages": 15
    },
    {
        "chapterNumber": "121",
        "numImages": 19
    },
    {
        "chapterNumber": "122",
        "numImages": 19
    },
    {
        "chapterNumber": "123",
        "numImages": 22
    },
    {
        "chapterNumber": "124",
        "numImages": 19
    },
    {
        "chapterNumber": "125",
        "numImages": 18
    },
    {
        "chapterNumber": "126",
        "numImages": 18
    },
    {
        "chapterNumber": "127",
        "numImages": 16
    },
    {
        "chapterNumber": "128",
        "numImages": 19
    },
    {
        "chapterNumber": "129",
        "numImages": 20
    },
    {
        "chapterNumber": "130",
        "numImages": 20
    },
    {
        "chapterNumber": "131",
        "numImages": 19
    },
    {
        "chapterNumber": "132",
        "numImages": 17
    },
    {
        "chapterNumber": "133",
        "numImages": 18
    },
    {
        "chapterNumber": "134",
        "numImages": 20
    },
    {
        "chapterNumber": "135",
        "numImages": 14
    },
    {
        "chapterNumber": "136",
        "numImages": 19
    },
    {
        "chapterNumber": "137",
        "numImages": 14
    },
    {
        "chapterNumber": "138",
        "numImages": 19
    },
    {
        "chapterNumber": "139",
        "numImages": 18
    },
    {
        "chapterNumber": "140",
        "numImages": 20
    },
    {
        "chapterNumber": "141",
        "numImages": 17
    },
    {
        "chapterNumber": "142",
        "numImages": 19
    },
    {
        "chapterNumber": "143",
        "numImages": 17
    },
    {
        "chapterNumber": "144",
        "numImages": 17
    },
    {
        "chapterNumber": "145",
        "numImages": 17
    },
    {
        "chapterNumber": "146",
        "numImages": 16
    },
    {
        "chapterNumber": "147",
        "numImages": 16
    },
    {
        "chapterNumber": "148",
        "numImages": 19
    },
    {
        "chapterNumber": "149",
        "numImages": 18
    },
    {
        "chapterNumber": "150",
        "numImages": 20
    },
    {
        "chapterNumber": "151",
        "numImages": 20
    },
    {
        "chapterNumber": "152",
        "numImages": 18
    },
    {
        "chapterNumber": "153",
        "numImages": 20
    },
    {
        "chapterNumber": "154",
        "numImages": 18
    },
    {
        "chapterNumber": "155",
        "numImages": 19
    },
    {
        "chapterNumber": "156",
        "numImages": 16
    },
    {
        "chapterNumber": "157",
        "numImages": 19
    },
    {
        "chapterNumber": "158",
        "numImages": 19
    },
    {
        "chapterNumber": "159",
        "numImages": 18
    },
    {
        "chapterNumber": "160",
        "numImages": 18
    },
    {
        "chapterNumber": "161",
        "numImages": 17
    },
    {
        "chapterNumber": "162",
        "numImages": 16
    },
    {
        "chapterNumber": "163",
        "numImages": 21
    },
    {
        "chapterNumber": "164",
        "numImages": 21
    },
    {
        "chapterNumber": "165",
        "numImages": 18
    },
    {
        "chapterNumber": "166",
        "numImages": 19
    },
    {
        "chapterNumber": "167",
        "numImages": 11
    },
    {
        "chapterNumber": "168",
        "numImages": 19
    },
    {
        "chapterNumber": "169",
        "numImages": 19
    },
    {
        "chapterNumber": "170",
        "numImages": 21
    },
    {
        "chapterNumber": "171",
        "numImages": 20
    },
    {
        "chapterNumber": "172",
        "numImages": 20
    },
    {
        "chapterNumber": "173",
        "numImages": 20
    },
    {
        "chapterNumber": "174",
        "numImages": 18
    },
    {
        "chapterNumber": "175",
        "numImages": 20
    },
    {
        "chapterNumber": "176",
        "numImages": 18
    },
    {
        "chapterNumber": "177",
        "numImages": 18
    },
    {
        "chapterNumber": "178",
        "numImages": 17
    },
    {
        "chapterNumber": "179",
        "numImages": 18
    },
    {
        "chapterNumber": "180",
        "numImages": 19
    },
    {
        "chapterNumber": "181",
        "numImages": 16
    },
    {
        "chapterNumber": "182",
        "numImages": 19
    },
    {
        "chapterNumber": "183",
        "numImages": 15
    },
    {
        "chapterNumber": "184",
        "numImages": 17
    },
    {
        "chapterNumber": "185",
        "numImages": 15
    },
    {
        "chapterNumber": "186",
        "numImages": 21
    },
    {
        "chapterNumber": "187",
        "numImages": 18
    },
    {
        "chapterNumber": "188",
        "numImages": 18
    },
    {
        "chapterNumber": "189",
        "numImages": 19
    },
    {
        "chapterNumber": "190",
        "numImages": 16
    },
    {
        "chapterNumber": "191",
        "numImages": 20
    },
    {
        "chapterNumber": "192",
        "numImages": 19
    },
    {
        "chapterNumber": "193",
        "numImages": 18
    },
    {
        "chapterNumber": "194",
        "numImages": 15
    },
    {
        "chapterNumber": "195",
        "numImages": 15
    },
    {
        "chapterNumber": "196",
        "numImages": 18
    },
    {
        "chapterNumber": "197",
        "numImages": 20
    },
    {
        "chapterNumber": "198",
        "numImages": 18
    },
    {
        "chapterNumber": "199",
        "numImages": 19
    },
    {
        "chapterNumber": "200",
        "numImages": 19
    },
    {
        "chapterNumber": "201",
        "numImages": 18
    },
    {
        "chapterNumber": "202",
        "numImages": 19
    },
    {
        "chapterNumber": "203",
        "numImages": 20
    },
    {
        "chapterNumber": "204",
        "numImages": 19
    },
    {
        "chapterNumber": "205",
        "numImages": 20
    },
    {
        "chapterNumber": "206",
        "numImages": 20
    },
    {
        "chapterNumber": "207",
        "numImages": 19
    },
    {
        "chapterNumber": "208",
        "numImages": 21
    },
    {
        "chapterNumber": "209",
        "numImages": 17
    },
    {
        "chapterNumber": "210",
        "numImages": 18
    },
    {
        "chapterNumber": "211",
        "numImages": 17
    },
    {
        "chapterNumber": "212",
        "numImages": 16
    },
    {
        "chapterNumber": "213",
        "numImages": 18
    },
    {
        "chapterNumber": "214",
        "numImages": 21
    },
    {
        "chapterNumber": "215",
        "numImages": 19
    },
    {
        "chapterNumber": "216",
        "numImages": 18
    },
    {
        "chapterNumber": "217",
        "numImages": 21
    },
    {
        "chapterNumber": "218",
        "numImages": 19
    },
    {
        "chapterNumber": "219",
        "numImages": 20
    },
    {
        "chapterNumber": "220",
        "numImages": 16
    },
    {
        "chapterNumber": "221",
        "numImages": 18
    },
    {
        "chapterNumber": "222",
        "numImages": 17
    },
    {
        "chapterNumber": "223",
        "numImages": 20
    },
    {
        "chapterNumber": "224",
        "numImages": 20
    },
    {
        "chapterNumber": "225",
        "numImages": 16
    },
    {
        "chapterNumber": "226",
        "numImages": 19
    },
    {
        "chapterNumber": "227",
        "numImages": 18
    },
    {
        "chapterNumber": "228",
        "numImages": 15
    },
    {
        "chapterNumber": "229",
        "numImages": 19
    },
    {
        "chapterNumber": "230",
        "numImages": 19
    },
    {
        "chapterNumber": "232",
        "numImages": 21
    },
    {
        "chapterNumber": "233",
        "numImages": 17
    },
    {
        "chapterNumber": "234",
        "numImages": 16
    },
    {
        "chapterNumber": "235",
        "numImages": 18
    },
    {
        "chapterNumber": "236",
        "numImages": 17
    },
    {
        "chapterNumber": "237",
        "numImages": 19
    },
    {
        "chapterNumber": "238",
        "numImages": 13
    },
    {
        "chapterNumber": "239",
        "numImages": 18
    },
    {
        "chapterNumber": "240",
        "numImages": 19
    },
    {
        "chapterNumber": "241",
        "numImages": 16
    },
    {
        "chapterNumber": "243",
        "numImages": 19
    },
    {
        "chapterNumber": "244",
        "numImages": 18
    },
    {
        "chapterNumber": "245",
        "numImages": 19
    },
    {
        "chapterNumber": "246",
        "numImages": 19
    },
    {
        "chapterNumber": "247",
        "numImages": 17
    },
    {
        "chapterNumber": "248",
        "numImages": 17
    },
    {
        "chapterNumber": "249",
        "numImages": 16
    },
    {
        "chapterNumber": "250",
        "numImages": 18
    },
    {
        "chapterNumber": "251",
        "numImages": 16
    },
    {
        "chapterNumber": "252",
        "numImages": 16
    },
    {
        "chapterNumber": "253",
        "numImages": 16
    },
    {
        "chapterNumber": "254",
        "numImages": 19
    },
    {
        "chapterNumber": "255",
        "numImages": 18
    },
    {
        "chapterNumber": "256",
        "numImages": 17
    },
    {
        "chapterNumber": "257",
        "numImages": 16
    },
    {
        "chapterNumber": "258",
        "numImages": 18
    },
    {
        "chapterNumber": "259",
        "numImages": 20
    },
    {
        "chapterNumber": "260",
        "numImages": 18
    },
    {
        "chapterNumber": "261",
        "numImages": 18
    },
    {
        "chapterNumber": "262",
        "numImages": 18
    },
    {
        "chapterNumber": "263",
        "numImages": 18
    },
    {
        "chapterNumber": "264",
        "numImages": 20
    },
    {
        "chapterNumber": "265",
        "numImages": 18
    }
]