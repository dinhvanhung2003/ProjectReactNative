
import { comment } from 'postcss';

export const data = [
    
    {
        id: 'suggestion1',
        type: 'suggestion',
        title: 'Reflection',
        artist: 'Christina Aguilera',
        imageUrl: 'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731082603/Suggestions/jvvhlxjafkoiyjfgxffr.jpg',
        audioUrl: 'https://res.cloudinary.com/dlnmzi0ks/video/upload/v1731047736/exoohwq5blkjlnph4ndf.mp4',
        plays: '5M',
        duration: '3:25'
    },
    {
        id: 'suggestion2',
        type: 'suggestion',
        title: 'In The Stars',
        artist: 'Benson Boone',
        imageUrl: 'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731082087/Suggestions/ysveg4zsdgiwv4pfqray.png',
        audioUrl: 'https://res.cloudinary.com/dlnmzi0ks/video/upload/v1731047736/exoohwq5blkjlnph4ndf.mp4',
        plays: '4M',
        duration: '3:00'
    },

    // Charts - Include songs directly
    {
        id: 'chart1',
        type: 'chart',
        country: 'Canada',
        label: 'Top 50',
        discription:'Daily chart topper updates',
        imageUrl: 'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731046947/gr4dx4h5xmhhr0ofz93r.png',
        songs: [
            {
                id: 'song1',
                type: 'song',
                title: 'Cơn mưa ngang qua',
                artist: 'Sơn tùng MTP',
                plays: '2M',
                duration: '3:10',
                audioUrl: 'https://res.cloudinary.com/dlnmzi0ks/video/upload/v1731077161/DataReactNative/Songs/ConMuaNgangQua.mp3',
                imageUrl: 'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731077682/DataReactNative/Songs/s7lom1scr0vopfrdesti.jpg',
                imagebackGround:'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731080763/DataReactNative/Songs/xv0aflttyt2lfhpenotj.png'
            },
            {
                id: 'song2',
                type: 'song',
                title: 'Thủy Triều',
                artist: 'Quang Hùng MasterD',
                plays: '2M',
                duration: '3:10',
                audioUrl: 'https://res.cloudinary.com/dlnmzi0ks/video/upload/v1731078487/DataReactNative/Songs/dcdgabelceqvdtgirzwz.mp3',
                imageUrl: 'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731078627/DataReactNative/Songs/fhodqclslshrhadjhw4a.jpg',
               imagebackGround:'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731080763/DataReactNative/Songs/xv0aflttyt2lfhpenotj.png'
            },
            {
                id: 'song3',
                type: 'song',
                title: 'Thiên Lý Ơi',
                artist: 'Jack-J97',
                plays: '2M',
                duration: '3:10',
                audioUrl: 'https://res.cloudinary.com/dlnmzi0ks/video/upload/v1731078883/DataReactNative/Songs/xl9anhwry1nv1lmlpwbf.mp3',
                imageUrl: 'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731078947/DataReactNative/Songs/ecitztdgrx8h7tqhppmt.jpg',
                imagebackGround:'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731080763/DataReactNative/Songs/xv0aflttyt2lfhpenotj.png'
            },
            {
                id: 'song4',
                type: 'song',
                title: 'Miên Man',
                artist: 'Minh Huy',
                plays: '2M',
                duration: '3:10',
                audioUrl: 'https://res.cloudinary.com/dlnmzi0ks/video/upload/v1731079256/DataReactNative/Songs/ewavtdsdvyhtrmxg8b24.mp3',
                imageUrl: 'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731079355/DataReactNative/Songs/coh7wz1z2iwnej0ugx5g.jpg',
                imagebackGround:'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731080763/DataReactNative/Songs/xv0aflttyt2lfhpenotj.png'
            },
            {
                id: 'song5',
                type: 'song',
                title: 'Waiting For You',
                artist: 'Mono',
                plays: '2M',
                duration: '3:10',
                audioUrl: 'https://res.cloudinary.com/dlnmzi0ks/video/upload/v1731079525/DataReactNative/Songs/btpci7rdguuxtzh2cubm.mp3',
                imageUrl: 'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731079643/DataReactNative/Songs/giuaswzjteb4nshewjyc.jpg',
                imagebackGround:'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731080763/DataReactNative/Songs/xv0aflttyt2lfhpenotj.png'
            },
            {
                id: 'song6',
                type: 'song',
                title: 'Cơn mưa ngang qua',
                artist: 'Sơn tùng MTP',
                plays: '2M',
                duration: '3:10',
                audioUrl: 'https://res.cloudinary.com/dlnmzi0ks/video/upload/v1731077161/DataReactNative/Songs/ConMuaNgangQua.mp3',
                imageUrl: 'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731046947/gr4dx4h5xmhhr0ofz93r.png',
                imagebackGround:'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731080763/DataReactNative/Songs/xv0aflttyt2lfhpenotj.png'
            },
            {
                id: 'song7',
                type: 'song',
                title: 'Cơn mưa ngang qua',
                artist: 'Sơn tùng MTP',
                plays: '2M',
                duration: '3:10',
                audioUrl: 'https://res.cloudinary.com/dlnmzi0ks/video/upload/v1731077161/DataReactNative/Songs/ConMuaNgangQua.mp3',
                imageUrl: 'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731046947/gr4dx4h5xmhhr0ofz93r.png',
                imagebackGround:'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731080763/DataReactNative/Songs/xv0aflttyt2lfhpenotj.png'
            },
            {
                id: 'song8',
                type: 'song',
                title: 'Cơn mưa ngang qua',
                artist: 'Sơn tùng MTP',
                plays: '2M',
                duration: '3:10',
                audioUrl: 'https://res.cloudinary.com/dlnmzi0ks/video/upload/v1731077161/DataReactNative/Songs/ConMuaNgangQua.mp3',
                imageUrl: 'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731046947/gr4dx4h5xmhhr0ofz93r.png',
                imagebackGround:'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731046947/gr4dx4h5xmhhr0ofz93r.png'
            },
            {
                id: 'song9',
                type: 'song',
                title: 'Cơn mưa ngang qua',
                artist: 'Sơn tùng MTP',
                plays: '2M',
                duration: '3:10',
                audioUrl: 'https://res.cloudinary.com/dlnmzi0ks/video/upload/v1731077161/DataReactNative/Songs/ConMuaNgangQua.mp3',
                imageUrl: 'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731046947/gr4dx4h5xmhhr0ofz93r.png',
                imagebackGround:'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731046947/gr4dx4h5xmhhr0ofz93r.png'
            },
            {
                id: 'song10',
                type: 'song',
                title: 'Cơn mưa ngang qua',
                artist: 'Sơn tùng MTP',
                plays: '2M',
                duration: '3:10',
                audioUrl: 'https://res.cloudinary.com/dlnmzi0ks/video/upload/v1731077161/DataReactNative/Songs/ConMuaNgangQua.mp3',
                imageUrl: 'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731046947/gr4dx4h5xmhhr0ofz93r.png',
                imagebackGround:'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731046947/gr4dx4h5xmhhr0ofz93r.png'
            },
        ],
    },

    {
        id: 'chart2',
        type: 'chart',
        country: 'Global',
        label: 'Top 50',
        discription:'Daily chart topper updates',
        imageUrl: 'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731082942/DataReactNative/Charts/eaqrvlvc1amzz9y2x4k3.jpg',
        songs: [
            {
                id: 'song11',
                type: 'song',
                title: 'Cơn mưa ngang qua',
                artist: 'Sơn tùng MTP',
                plays: '2M',
                duration: '3:10',
                audioUrl: 'https://res.cloudinary.com/dlnmzi0ks/video/upload/v1731077161/DataReactNative/Songs/ConMuaNgangQua.mp3',
                imageUrl: 'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731077682/DataReactNative/Songs/s7lom1scr0vopfrdesti.jpg',
                imagebackGround:'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731046947/gr4dx4h5xmhhr0ofz93r.png'
            },
            {
                id: 'song12',
                type: 'song',
                title: 'Thủy Triều',
                artist: 'Quang Hùng MasterD',
                plays: '2M',
                duration: '3:10',
                audioUrl: 'https://res.cloudinary.com/dlnmzi0ks/video/upload/v1731078487/DataReactNative/Songs/dcdgabelceqvdtgirzwz.mp3',
                imageUrl: 'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731078627/DataReactNative/Songs/fhodqclslshrhadjhw4a.jpg',
                imagebackGround:'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731046947/gr4dx4h5xmhhr0ofz93r.png'
            },
            {
                id: 'song13',
                type: 'song',
                title: 'Thiên Lý Ơi',
                artist: 'Jack-J97',
                plays: '2M',
                duration: '3:10',
                audioUrl: 'https://res.cloudinary.com/dlnmzi0ks/video/upload/v1731078883/DataReactNative/Songs/xl9anhwry1nv1lmlpwbf.mp3',
                imageUrl: 'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731078947/DataReactNative/Songs/ecitztdgrx8h7tqhppmt.jpg',
                imagebackGround:'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731046947/gr4dx4h5xmhhr0ofz93r.png'
            },
            {
                id: 'song14',
                type: 'song',
                title: 'Miên Man',
                artist: 'Minh Huy',
                plays: '2M',
                duration: '3:10',
                audioUrl: 'https://res.cloudinary.com/dlnmzi0ks/video/upload/v1731079256/DataReactNative/Songs/ewavtdsdvyhtrmxg8b24.mp3',
                imageUrl: 'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731079355/DataReactNative/Songs/coh7wz1z2iwnej0ugx5g.jpg',
                imagebackGround:'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731046947/gr4dx4h5xmhhr0ofz93r.png'
            },
            {
                id: 'song15',
                type: 'song',
                title: 'Waiting For You',
                artist: 'Mono',
                plays: '2M',
                duration: '3:10',
                audioUrl: 'https://res.cloudinary.com/dlnmzi0ks/video/upload/v1731079525/DataReactNative/Songs/btpci7rdguuxtzh2cubm.mp3',
                imageUrl: 'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731079643/DataReactNative/Songs/giuaswzjteb4nshewjyc.jpg',
                imagebackGround:'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731046947/gr4dx4h5xmhhr0ofz93r.png'
            },
        ],
    },
    {
        id: 'chart3',
        type: 'chart',
        country: 'Thailand',
        label: 'Top 50',
        discription:'Daily chart topper updates',
        imageUrl: 'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731046947/gr4dx4h5xmhhr0ofz93r.png',
        songs: [
            {
                id: 'song16',
                type: 'song',
                title: 'Cơn mưa ngang qua',
                artist: 'Sơn tùng MTP',
                plays: '2M',
                duration: '3:10',
                audioUrl: 'https://res.cloudinary.com/dlnmzi0ks/video/upload/v1731077161/DataReactNative/Songs/ConMuaNgangQua.mp3',
                imageUrl: 'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731077682/DataReactNative/Songs/s7lom1scr0vopfrdesti.jpg',
                imagebackGround:'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731046947/gr4dx4h5xmhhr0ofz93r.png'
            },
            {
                id: 'song17',
                type: 'song',
                title: 'Thủy Triều',
                artist: 'Quang Hùng MasterD',
                plays: '2M',
                duration: '3:10',
                audioUrl: 'https://res.cloudinary.com/dlnmzi0ks/video/upload/v1731078487/DataReactNative/Songs/dcdgabelceqvdtgirzwz.mp3',
                imageUrl: 'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731078627/DataReactNative/Songs/fhodqclslshrhadjhw4a.jpg',
                imagebackGround:'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731046947/gr4dx4h5xmhhr0ofz93r.png'
            },
            {
                id: 'song18',
                type: 'song',
                title: 'Thiên Lý Ơi',
                artist: 'Jack-J97',
                plays: '2M',
                duration: '3:10',
                audioUrl: 'https://res.cloudinary.com/dlnmzi0ks/video/upload/v1731078883/DataReactNative/Songs/xl9anhwry1nv1lmlpwbf.mp3',
                imageUrl: 'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731078947/DataReactNative/Songs/ecitztdgrx8h7tqhppmt.jpg',
                imagebackGround:'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731046947/gr4dx4h5xmhhr0ofz93r.png'
            },
            {
                id: 'song19',
                type: 'song',
                title: 'Miên Man',
                artist: 'Minh Huy',
                plays: '2M',
                duration: '3:10',
                audioUrl: 'https://res.cloudinary.com/dlnmzi0ks/video/upload/v1731079256/DataReactNative/Songs/ewavtdsdvyhtrmxg8b24.mp3',
                imageUrl: 'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731079355/DataReactNative/Songs/coh7wz1z2iwnej0ugx5g.jpg',
                imagebackGround:'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731046947/gr4dx4h5xmhhr0ofz93r.png'
            },
            {
                id: 'song21',
                type: 'song',
                title: 'Waiting For You',
                artist: 'Mono',
                plays: '2M',
                duration: '3:10',
                audioUrl: 'https://res.cloudinary.com/dlnmzi0ks/video/upload/v1731079525/DataReactNative/Songs/btpci7rdguuxtzh2cubm.mp3',
                imageUrl: 'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731079643/DataReactNative/Songs/giuaswzjteb4nshewjyc.jpg',
                imagebackGround:'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731046947/gr4dx4h5xmhhr0ofz93r.png'
            },
        ],
    },

    // Trending Albums
    {
        id: 'album1',
        type: 'album',
        title: 'ME',
        artist: 'Jessica Gonzalez',
        imageUrl: 'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731069504/DataReactNative/Albums/Albums1/tgnl2fkk2d2qumaapov8.png',
    },
    {
        id: 'album2',
        type: 'album',
        title: 'ME',
        artist: 'Jessica Gonzalez',
        imageUrl: 'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731069505/DataReactNative/Albums/Albums1/jjbfp0qyrvgklxzzejfm.png',
    },
    {
        id: 'album3',
        type: 'album',
        title: 'ME',
        artist: 'Jessica Gonzalez',
        imageUrl: 'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731069507/DataReactNative/Albums/Albums1/kgd3hura5woafrrabcha.png',
    },

    // Popular Artists with Songs
    {
        id: 'artist1',
        type: 'artist',
        name: 'Jennifer Wilson',
        imageUrl: 'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731075260/DataReactNative/Artists/gewlx5voklrgsqncbdpu.png',
        followers: '1.5M',
        songs: [
            {
                id: 'song21',
                type: 'song',
                title: 'Cơn mưa ngang qua',
                artist: 'Sơn tùng MTP',
                plays: '2M',
                duration: '3:10',
                audioUrl: 'https://res.cloudinary.com/dlnmzi0ks/video/upload/v1731077161/DataReactNative/Songs/ConMuaNgangQua.mp3',
                imageUrl: 'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731077682/DataReactNative/Songs/s7lom1scr0vopfrdesti.jpg',
                imagebackGround:'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731046947/gr4dx4h5xmhhr0ofz93r.png'
            },
            {
                id: 'song23',
                type: 'song',
                title: 'Thủy Triều',
                artist: 'Quang Hùng MasterD',
                plays: '2M',
                duration: '3:10',
                audioUrl: 'https://res.cloudinary.com/dlnmzi0ks/video/upload/v1731078487/DataReactNative/Songs/dcdgabelceqvdtgirzwz.mp3',
                imageUrl: 'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731078627/DataReactNative/Songs/fhodqclslshrhadjhw4a.jpg',
                imagebackGround:'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731046947/gr4dx4h5xmhhr0ofz93r.png'
            },
            {
                id: 'song33',
                type: 'song',
                title: 'Thiên Lý Ơi',
                artist: 'Jack-J97',
                plays: '2M',
                duration: '3:10',
                audioUrl: 'https://res.cloudinary.com/dlnmzi0ks/video/upload/v1731078883/DataReactNative/Songs/xl9anhwry1nv1lmlpwbf.mp3',
                imageUrl: 'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731078947/DataReactNative/Songs/ecitztdgrx8h7tqhppmt.jpg',
                imagebackGround:'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731046947/gr4dx4h5xmhhr0ofz93r.png'
            },
            {
                id: 'song44',
                type: 'song',
                title: 'Miên Man',
                artist: 'Minh Huy',
                plays: '2M',
                duration: '3:10',
                audioUrl: 'https://res.cloudinary.com/dlnmzi0ks/video/upload/v1731079256/DataReactNative/Songs/ewavtdsdvyhtrmxg8b24.mp3',
                imageUrl: 'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731079355/DataReactNative/Songs/coh7wz1z2iwnej0ugx5g.jpg',
                imagebackGround:'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731046947/gr4dx4h5xmhhr0ofz93r.png'
            },
            {
                id: 'song58',
                type: 'song',
                title: 'Waiting For You',
                artist: 'Mono',
                plays: '2M',
                duration: '3:10',
                audioUrl: 'https://res.cloudinary.com/dlnmzi0ks/video/upload/v1731079525/DataReactNative/Songs/btpci7rdguuxtzh2cubm.mp3',
                imageUrl: 'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731079643/DataReactNative/Songs/giuaswzjteb4nshewjyc.jpg',
                imagebackGround:'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731046947/gr4dx4h5xmhhr0ofz93r.png'
            },
        ]
    },
    {
        id: 'artist2',
        type: 'artist',
        name: 'Elizabeth Hall',
        imageUrl: 'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731075260/DataReactNative/Artists/drzzxnh4e2z8hqyntjz1.png',
        followers: '1.2M',
        songs: [
            {
                id: 'song13',
                type: 'song',
                title: 'Cơn mưa ngang qua',
                artist: 'Sơn tùng MTP',
                plays: '2M',
                duration: '3:10',
                audioUrl: 'https://res.cloudinary.com/dlnmzi0ks/video/upload/v1731077161/DataReactNative/Songs/ConMuaNgangQua.mp3',
                imageUrl: 'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731077682/DataReactNative/Songs/s7lom1scr0vopfrdesti.jpg',
                imagebackGround:'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731046947/gr4dx4h5xmhhr0ofz93r.png'
            },
            {
                id: 'song2',
                type: 'song',
                title: 'Thủy Triều',
                artist: 'Quang Hùng MasterD',
                plays: '2M',
                duration: '3:10',
                audioUrl: 'https://res.cloudinary.com/dlnmzi0ks/video/upload/v1731078487/DataReactNative/Songs/dcdgabelceqvdtgirzwz.mp3',
                imageUrl: 'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731078627/DataReactNative/Songs/fhodqclslshrhadjhw4a.jpg',
                imagebackGround:'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731046947/gr4dx4h5xmhhr0ofz93r.png'
            },
            {
                id: 'song33',
                type: 'song',
                title: 'Thiên Lý Ơi',
                artist: 'Jack-J97',
                plays: '2M',
                duration: '3:10',
                audioUrl: 'https://res.cloudinary.com/dlnmzi0ks/video/upload/v1731078883/DataReactNative/Songs/xl9anhwry1nv1lmlpwbf.mp3',
                imageUrl: 'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731078947/DataReactNative/Songs/ecitztdgrx8h7tqhppmt.jpg',
                imagebackGround:'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731046947/gr4dx4h5xmhhr0ofz93r.png'
            },
            {
                id: 'song45',
                type: 'song',
                title: 'Miên Man',
                artist: 'Minh Huy',
                plays: '2M',
                duration: '3:10',
                audioUrl: 'https://res.cloudinary.com/dlnmzi0ks/video/upload/v1731079256/DataReactNative/Songs/ewavtdsdvyhtrmxg8b24.mp3',
                imageUrl: 'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731079355/DataReactNative/Songs/coh7wz1z2iwnej0ugx5g.jpg',
                imagebackGround:'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731046947/gr4dx4h5xmhhr0ofz93r.png'
            },
            {
                id: 'song58',
                type: 'song',
                title: 'Waiting For You',
                artist: 'Mono',
                plays: '2M',
                duration: '3:10',
                audioUrl: 'https://res.cloudinary.com/dlnmzi0ks/video/upload/v1731079525/DataReactNative/Songs/btpci7rdguuxtzh2cubm.mp3',
                imageUrl: 'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731079643/DataReactNative/Songs/giuaswzjteb4nshewjyc.jpg',
                imagebackGround:'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731046947/gr4dx4h5xmhhr0ofz93r.png'
            },
        ]
    },
    {
        id: 'artist3',
        type: 'artist',
        name: 'Elizabeth Hall',
        imageUrl: 'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731075260/DataReactNative/Artists/pdvgwkihyg2ay4ovoils.png',
        followers: '1.2M',
        songs: [
            {
                id: 'song100',
                type: 'song',
                title: 'Cơn mưa ngang qua',
                artist: 'Sơn tùng MTP',
                plays: '2M',
                duration: '3:10',
                audioUrl: 'https://res.cloudinary.com/dlnmzi0ks/video/upload/v1731077161/DataReactNative/Songs/ConMuaNgangQua.mp3',
                imageUrl: 'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731077682/DataReactNative/Songs/s7lom1scr0vopfrdesti.jpg',
                imagebackGround:'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731046947/gr4dx4h5xmhhr0ofz93r.png'
            },
            {
                id: 'song200',
                type: 'song',
                title: 'Thủy Triều',
                artist: 'Quang Hùng MasterD',
                plays: '2M',
                duration: '3:10',
                audioUrl: 'https://res.cloudinary.com/dlnmzi0ks/video/upload/v1731078487/DataReactNative/Songs/dcdgabelceqvdtgirzwz.mp3',
                imageUrl: 'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731078627/DataReactNative/Songs/fhodqclslshrhadjhw4a.jpg',
                imagebackGround:'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731046947/gr4dx4h5xmhhr0ofz93r.png'
            },
            {
                id: 'song300',
                type: 'song',
                title: 'Thiên Lý Ơi',
                artist: 'Jack-J97',
                plays: '2M',
                duration: '3:10',
                audioUrl: 'https://res.cloudinary.com/dlnmzi0ks/video/upload/v1731078883/DataReactNative/Songs/xl9anhwry1nv1lmlpwbf.mp3',
                imageUrl: 'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731078947/DataReactNative/Songs/ecitztdgrx8h7tqhppmt.jpg',
                imagebackGround:'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731046947/gr4dx4h5xmhhr0ofz93r.png'
            },
            {
                id: 'song400',
                type: 'song',
                title: 'Miên Man',
                artist: 'Minh Huy',
                plays: '2M',
                duration: '3:10',
                audioUrl: 'https://res.cloudinary.com/dlnmzi0ks/video/upload/v1731079256/DataReactNative/Songs/ewavtdsdvyhtrmxg8b24.mp3',
                imageUrl: 'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731079355/DataReactNative/Songs/coh7wz1z2iwnej0ugx5g.jpg',
                imagebackGround:'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731046947/gr4dx4h5xmhhr0ofz93r.png'
            },
            {
                id: 'song500',
                type: 'song',
                title: 'Waiting For You',
                artist: 'Mono',
                plays: '2M',
                duration: '3:10',
                audioUrl: 'https://res.cloudinary.com/dlnmzi0ks/video/upload/v1731079525/DataReactNative/Songs/btpci7rdguuxtzh2cubm.mp3',
                imageUrl: 'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731079643/DataReactNative/Songs/giuaswzjteb4nshewjyc.jpg',
                imagebackGround:'https://res.cloudinary.com/dlnmzi0ks/image/upload/v1731046947/gr4dx4h5xmhhr0ofz93r.png'
            },
        ]
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

