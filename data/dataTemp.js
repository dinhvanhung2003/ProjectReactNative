

export const data = [

    //Feeds 
    {
        type: 'feed',
        action: 'Posted a track',
        time: '3d',
        author: {
            avatar: require('../assets/FeedScreen/Feeds/JessicaGonzalez.png'),
            name: 'Jessica Gonzalez',            
        },
        song: {
            title: 'FLOWER',
            author: 'Jessica Gonzalez',
            imageUrl: require('../assets/FeedScreen/Feeds/Flower-Orange.png'),
            plays: 125,
            length: '05:15',
        },
        like: 20,
        comment: [
            {
                avatar: require('../assets/FeedScreen/Feeds/Flower.png'),
                userName: 'Sally Rooney',
                text: 'Do duis cul 😍',
                time: '17h',
                likes: 1,
                replies: [
                    
                ],
            },
            {
                avatar: require('../assets/FeedScreen/Feeds/Flower.png'),
                userName: 'Jason',
                text: 'Minim magna exc 😍',
                time: '48m',
                likes: 1,
                replies: [
                    {
                        avatar: require('../assets/FeedScreen/Feeds/Flower.png'),
                        userName: 'Michael Key',
                        text: '@Jason Smith Deserunt officia consectetur aidpi',
                        time: '40m',
                        likes: 2,
                    }
                ],
            },
            {
                avatar: require('../assets/FeedScreen/Feeds/Flower.png'),
                name: 'Liam Pham',
                text: 'Commodo 🔥',
                time: '48m',
                likes: 1,
                replies: [
                    {
                        avatar: require('../assets/FeedScreen/Feeds/Flower.png'),
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
            avatar: require('../assets/FeedScreen/Feeds/WilliamKingActive.png'),
            name: 'william King',            
        },
        song: {
            title: 'Me',
            author: 'william King',
            imageUrl: require('../assets/FeedScreen/Feeds/Me.png'),
            plays: 245,
            length: '05:15',
        },
        like: 45,
        comment: [
            {
                avatar: require('../assets/FeedScreen/Feeds/Flower.png'),
                userName: 'Sally Rooney',
                text: 'Do duis cul 😍',
                time: '17h',
                likes: 1,
                replies: [
                    
                ],
            },
            {
                avatar: require('../assets/FeedScreen/Feeds/Flower.png'),
                userName: 'Sally Rooney',
                text: 'Do duis cul 😍',
                time: '17h',
                likes: 1,
                replies: [
                    
                ],
            },
            {
                avatar: require('../assets/FeedScreen/Feeds/Flower.png'),
                userName: 'Sally Rooney',
                text: 'Do duis cul 😍',
                time: '17h',
                likes: 1,
                replies: [
                    
                ],
            },
            {
                avatar: require('../assets/FeedScreen/Feeds/Flower.png'),
                userName: 'Sally Rooney',
                text: 'Do duis cul 😍',
                time: '17h',
                likes: 1,
                replies: [
                    
                ],
            },
            {
                avatar: require('../assets/FeedScreen/Feeds/Flower.png'),
                userName: 'Sally Rooney',
                text: 'Do duis cul 😍',
                time: '17h',
                likes: 1,
                replies: [
                    
                ],
            },
            {
                avatar: require('../assets/FeedScreen/Feeds/Flower.png'),
                userName: 'Sally Rooney',
                text: 'Do duis cul 😍',
                time: '17h',
                likes: 1,
                replies: [
                    
                ],
            },
            {
                avatar: require('../assets/FeedScreen/Feeds/Flower.png'),
                userName: 'Sally Rooney',
                text: 'Do duis cul 😍',
                time: '17h',
                likes: 1,
                replies: [
                    
                ],
            },
            {
                avatar: require('../assets/FeedScreen/Feeds/Flower.png'),
                userName: 'Sally Rooney',
                text: 'Do duis cul 😍',
                time: '17h',
                likes: 1,
                replies: [
                    
                ],
            },
            {
                avatar: require('../assets/FeedScreen/Feeds/Flower.png'),
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
                avatar: require('../assets/FeedScreen/Feeds/MerWatson.png'),
                name: 'Mer Watson',
                followers: '1.234k',
            },
            {
                type: 'song',
                imageUrl: require('../assets/FeedScreen/Feeds/Flower.png'),
                name: 'FLOWER',
                artist: 'Jessica Gonzalez',
                plays: '2.1M',
                length: '03:35',
            },
            {
                type: 'song',
                imageUrl: require('../assets/FeedScreen/Feeds/ShapeOfYou.png'),
                name: 'Shape of you',
                artist: 'Antony Taylor',
                plays: '68M',
                length: '03:36',
            },
            
            {
                type: 'album',
                imageUrl: require('../assets/FeedScreen/Feeds/BlindingLights.png'),
                name: 'Blinding Lights',
                artist: 'Ashley Scott',
                songs: '4',
            },
            {
                type: 'song',
                imageUrl: require('../assets/FeedScreen/Feeds/Leviating.png'),
                name: 'Leviating',
                artist: 'Antony Taylor',
                plays: '9M',
                length: '07:48',
            },
            {
                type: 'song',
                imageUrl: require('../assets/FeedScreen/Feeds/AstronautInTheOcean.png'),
                name: 'Astronaut in the ocean',
                artist: 'Pedro Moreno',
                plays: '23M',
                length: '03:36',
            },
            {
                type: 'song',
                imageUrl: require('../assets/FeedScreen/Feeds/Dynamite.png'),
                name: 'Dynamite',
                artist: 'Elena jimenez',
                plays: '10M',
                length: '06:22',
            },
        ],
    }
];

