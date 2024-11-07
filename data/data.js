
export const data = [
    // Suggestions
    {
        type: 'suggestion',
        title: 'Reflection',
        artist: 'Christina Aguilera',
        imageUrl: require('../assets/HomeScreen/Suggestion/Suggestion1.png'),
    },
    {
        type: 'suggestion',
        title: 'In The Stars',
        artist: 'Benson Boone',
        imageUrl: require('../assets/HomeScreen/Suggestion/Suggestion2.png'),
    },

    // Charts
    {
        type: 'chart',
        country: 'Canada',
        label: 'Top 50',
        imageUrl: require('../assets/HomeScreen/Chart/Chart1.png'),
        songs: [
            {
                id:'1',
                type: 'song',
                title: 'FLOWER',
                artist: 'Jessica Gonzalez',
                plays: '2M',
                duration: '3:10',
                audioUrl: require('../assets/songs/test.mp3'),
                backgroundImage: require('../assets/HomeScreen/ImageThuyTrieu.png'),
            },
            {
                id:'2',
                type: 'song',
                title: 'Sau Lời Từ Khước',
                artist: 'Phan Mạnh Quỳnh',
                plays: '6M',
                duration: '3:35',
                audioUrl: require('../assets/songs/test01.mp3'),
                backgroundImage: require('../assets/HomeScreen/ImageThuyTrieu.png'),
            },
            {
                id:'3',
                type: 'song',
                title: 'Ông Bà Anh',
                artist: 'Phan Mạnh Quỳnh',
                plays: '6M',
                duration: '3:35',
                audioUrl: require('../assets/songs/test02.mp3'),
                backgroundImage: require('../assets/HomeScreen/ImageThuyTrieu.png'),
            },
            {
                id:'4',
                type: 'song',
                title: 'Tiểu thuyết tình yêu',
                artist: 'Phan Mạnh Quỳnh',
                plays: '6M',
                duration: '3:35',
                audioUrl: require('../assets/songs/test04.mp3'),
                backgroundImage: require('../assets/HomeScreen/ImageThuyTrieu.png'),
            },
            {
                id:'5',
                type: 'song',
                title: 'Chúng ta của hiện tại',
                artist: 'Phan Mạnh Quỳnh',
                plays: '6M',
                duration: '3:35',
                audioUrl: require('../assets/songs/test01.mp3'),
                backgroundImage: require('../assets/HomeScreen/ImageThuyTrieu.png'),
            },
            // Các bài hát khác trong Top 50 của Canada...
        ],
    },
    {
        type: 'chart',
        country: 'Global',
        label: 'Top 50',
        imageUrl: require('../assets/HomeScreen/Chart/Chart2.png'),
        songs: [
            {
                type: 'song',
                title: 'Levitating',
                artist: 'Anthony Taylor',
                plays: '8M',
                duration: '3:48',
                audioUrl: require('../assets/songs/test.mp3'),
                backgroundImage: require('../assets/HomeScreen/MusicPlayerImage.png'),
            },
            {
                type: 'song',
                title: 'Astronaut in the Ocean',
                artist: 'Pedro Moreno',
                plays: '2M',
                duration: '3:36',
                audioUrl: require('../assets/songs/test.mp3'),
                backgroundImage: require('../assets/HomeScreen/MusicPlayerImage.png'),
            },
            // Các bài hát khác trong Top 50 Global...
        ],
    },
    {
        type: 'chart',
        country: 'Thailand',
        label: 'Top 50',
        imageUrl: require('../assets/HomeScreen/Chart/Chart3.png'),
        songs: [
            {
                type: 'song',
                title: 'Dynamite',
                artist: 'Elena Jimenez',
                plays: '10M',
                duration: '4:22',
                audioUrl: require('../assets/songs/test.mp3'),
                backgroundImage: require('../assets/HomeScreen/MusicPlayerImage.png'),
            },
            // Các bài hát khác trong Top 50 của Thailand...
        ],
    },

    // Trending Albums
    {
        type: 'album',
        title: 'ME',
        artist: 'Jessica Gonzalez',
        imageUrl: require('../assets/HomeScreen/Trending/Trending1.png'),
    },
    {
        type: 'album',
        title: 'Magna Nost',
        artist: 'Brian Thomas',
        imageUrl: require('../assets/HomeScreen/Trending/Trending2.png'),
    },
    {
        type: 'album',
        title: 'Magna Intrum',
        artist: 'Christopher Nolan',
        imageUrl: require('../assets/HomeScreen/Trending/Trending3.png'),
    },

    // Popular Artists
    {
        type: 'artist',
        name: 'Jennifer Wilson',
        imageUrl: require('../assets/HomeScreen/Artists/Artists1.png'),
        followers: '1.5M',
    },
    {
        type: 'artist',
        name: 'Elizabeth Hall',
        imageUrl: require('../assets/HomeScreen/Artists/Artists2.png'),
        followers: '1.2M',
    },
    {
        type: 'artist',
        name: 'Anthony Smith',
        imageUrl: require('../assets/HomeScreen/Artists/Artists3.png'),
        followers: '900K',
    },
];