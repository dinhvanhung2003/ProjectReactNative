import { comment } from 'postcss';

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

    //Feeds 
    {
        type: 'feed',
        action: 'Posted a track',
        time: '3d',
        author: {
            avatar: require('../assets/HomeScreen/Artists/Artists2.png'),
            name: 'Jessica Gonzalez',            
        },
        song: {
            title: 'FLOWER',
            author: 'Jessica Gonzalez',
            imageUrl: require('../assets/HomeScreen/Artists/Artists1.png'),
            plays: 125,
            length: '05:15',
        },
        like: 20,
        comment: [
            {
                avatar: require('../assets/FeedScreen/Feeds/Flowers.jpeg'),
                userName: 'Sally Rooney',
                text: 'Do duis cul 😍',
                time: '17h',
                likes: 1,
                replies: [
                    
                ],
            },
            {
                avatar: require('../assets/FeedScreen/Feeds/Flowers.jpeg'),
                userName: 'Jason',
                text: 'Minim magna exc 😍',
                time: '48m',
                likes: 1,
                replies: [
                    {
                        avatar: require('../assets/FeedScreen/Feeds/Flowers.jpeg'),
                        userName: 'Michael Key',
                        text: '@Jason Smith Deserunt officia consectetur aidpi',
                        time: '40m',
                        likes: 2,
                    }
                ],
            },
            {
                avatar: require('../assets/FeedScreen/Feeds/Flowers.jpeg'),
                name: 'Liam Pham',
                text: 'Commodo 🔥',
                time: '48m',
                likes: 1,
                replies: [
                    {
                        avatar: require('../assets/FeedScreen/Feeds/Flowers.jpeg'),
                        userName: 'Kiran Glaucus',
                        text: 'Esse consequat cillum ex',
                        time: '40m',
                        likes: 2,
                    }
                ],
            },
        ],
        shares: 1,

    },
    {
        type: 'feed',
        action: 'Posted a track',
        time: '5d',
        author: {
            avatar: require('../assets/HomeScreen/Artists/Artists2.png'),
            name: 'william King',            
        },
        song: {
            title: 'Me',
            author: 'william King',
            imageUrl: require('../assets/HomeScreen/Artists/Artists1.png'),
            plays: 245,
            length: '05:15',
        },
        like: 45,
        comment: [
            {
                avatar: require('../assets/FeedScreen/Feeds/Flowers.jpeg'),
                userName: 'Sally Rooney',
                text: 'Do duis cul 😍',
                time: '17h',
                likes: 1,
                replies: [
                    
                ],
            },
            {
                avatar: require('../assets/FeedScreen/Feeds/Flowers.jpeg'),
                userName: 'Sally Rooney',
                text: 'Do duis cul 😍',
                time: '17h',
                likes: 1,
                replies: [
                    
                ],
            },
            {
                avatar: require('../assets/FeedScreen/Feeds/Flowers.jpeg'),
                userName: 'Sally Rooney',
                text: 'Do duis cul 😍',
                time: '17h',
                likes: 1,
                replies: [
                    
                ],
            },
            {
                avatar: require('../assets/FeedScreen/Feeds/Flowers.jpeg'),
                userName: 'Sally Rooney',
                text: 'Do duis cul 😍',
                time: '17h',
                likes: 1,
                replies: [
                    
                ],
            },
            {
                avatar: require('../assets/FeedScreen/Feeds/Flowers.jpeg'),
                userName: 'Sally Rooney',
                text: 'Do duis cul 😍',
                time: '17h',
                likes: 1,
                replies: [
                    
                ],
            },
            {
                avatar: require('../assets/FeedScreen/Feeds/Flowers.jpeg'),
                userName: 'Sally Rooney',
                text: 'Do duis cul 😍',
                time: '17h',
                likes: 1,
                replies: [
                    
                ],
            },
            {
                avatar: require('../assets/FeedScreen/Feeds/Flowers.jpeg'),
                userName: 'Sally Rooney',
                text: 'Do duis cul 😍',
                time: '17h',
                likes: 1,
                replies: [
                    
                ],
            },
            {
                avatar: require('../assets/FeedScreen/Feeds/Flowers.jpeg'),
                userName: 'Sally Rooney',
                text: 'Do duis cul 😍',
                time: '17h',
                likes: 1,
                replies: [
                    
                ],
            },
            {
                avatar: require('../assets/FeedScreen/Feeds/Flowers.jpeg'),
                userName: 'Sally Rooney',
                text: 'Do duis cul 😍',
                time: '17h',
                likes: 1,
                replies: [
                    
                ],
            },
        ],
        shares: 2,
    },
    //Library
    {
        type: 'library',
        data: [
            {
                type: 'singer',
                avatar: require('../assets/HomeScreen/Artists/Artists1.png'),
                name: 'Mer Watson',
                followers: '1.234k',
            },
            {
                type: 'song',
                imageUrl: require('../assets/HomeScreen/Artists/Artists2.png'),
                name: 'FLOWER',
                artist: 'Jessica Gonzalez',
                plays: '2.1M',
                length: '03:35',
            },
            {
                type: 'song',
                imageUrl: require('../assets/HomeScreen/Artists/Artists1.png'),
                name: 'Shape of you',
                artist: 'Antony Taylor',
                plays: '68M',
                length: '03:36',
            },
            
            {
                type: 'album',
                imageUrl: require('../assets/HomeScreen/Artists/Artists1.png'),
                name: 'Blinding Lights',
                artist: 'Ashley Scott',
                songs: '4',
            },
            {
                type: 'song',
                imageUrl: require('../assets/HomeScreen/Artists/Artists1.png'),
                name: 'Leviating',
                artist: 'Antony Taylor',
                plays: '9M',
                length: '07:48',
            },
            {
                type: 'song',
                imageUrl: require('../assets/HomeScreen/Artists/Artists1.png'),
                name: 'Astronaut in the ocean',
                artist: 'Pedro Moreno',
                plays: '23M',
                length: '03:36',
            },
            {
                type: 'song',
                imageUrl: require('../assets/HomeScreen/Artists/Artists1.png'),
                name: 'Dynamite',
                artist: 'Elena jimenez',
                plays: '10M',
                length: '06:22',
            },
        ],
    }
];