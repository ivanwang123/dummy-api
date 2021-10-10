# Dummy API 🎲

All your dummy data needs in one API

Base URL: https://needrandom.netlify.app/api

## 🖼 Image

Endpoint: `/image`

Parameters:

- `width` - number *(default: 100)*
- `height` - number *(default: 100)*

Example: https://needrandom.netlify.app/api/image?width=200&height=300
```
https://picsum.photos/200/300
```

API: https://picsum.photos

## 🤳 Profile Pic

Endpoint: `/profilepic`

Parameters:

- `sprite` - male, female, human, identicon, initials, bottts, avataaars, jdenticon, gridy, micah *(default: human)*

Example: https://needrandom.netlify.app/api/profilepic?sprite=identicon
```
https://avatars.dicebear.com/api/identicon/98.svg
```

API: https://avatars.dicebear.com

## 👨‍🦲 User

Endpoint: `/user`

Example: https://needrandom.netlify.app/api/user

```
{
  "gender": "female",
  "name": {
    "title": "Ms",
    "first": "Stephanie",
    "last": "Silva"
  },
  "location": {
    "street": {
      "number": 7101,
      "name": "Manchester Road"
    },
    "city": "Aberdeen",
    "state": "Suffolk",
    "country": "United Kingdom",
    "postcode": "V9U 3WY",
    "coordinates": {
      "latitude": "5.6116",
      "longitude": "0.8967"
    },
    "timezone": {
      "offset": "-3:30",
      "description": "Newfoundland"
    }
  },
  "email": "stephanie.silva@example.com",
  "login": {
    "uuid": "edd4b60d-1ec4-4087-9a36-da3df4f648a7",
    "username": "greensnake676",
    "password": "buttons",
    "salt": "4VscHELO",
    "md5": "9e791f6597c872be9fd3bac946728428",
    "sha1": "ea1ecf5333bbddf2e11074c30c618e6cb2930a1c",
    "sha256": "6bf247a5140d1ca80830eaed56ba8f8a061d16ee8e11b27286d17bc1e070d4cc"
  },
  "dob": {
    "date": "1955-01-22T23:50:44.214Z",
    "age": 66
  },
  "registered": {
    "date": "2017-03-17T06:22:30.307Z",
    "age": 4
  },
  "phone": "0115701 686 2285",
  "cell": "0749-294-162",
  "id": {
    "name": "NINO",
    "value": "LL 63 87 43 D"
  },
  "picture": {
    "large": "https://randomuser.me/api/portraits/women/94.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/94.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/94.jpg"
  },
  "nat": "GB"
}
```

API: https://randomuser.me

## 📃 Text

Endpoint: `/text`

Parameters:

- `style` - lorem, article, book *(default: lorem)*
- `paragraphs` - number *(default: 1)*
- `length` *(only for style=lorem)* - short, medium, long, verylong *(default: short)*

Example: https://needrandom.netlify.app/api/text?style=article&paragraphs=2
```
That’s setting a very high bar, and, for now, I’m not sure Alyx clears it. The game is fighting VR’s inherent hardware limits, a pandemic-related headset shortage, and the difficulty of building a game for a new platform. While it’s about as long as the landmark Half-Life 2, with my game clocking in at 15 hours, it doesn’t feel as big or as narratively and mechanically fresh. It advances the series’s main plot, but it doesn’t come close to resolving it.

Students from Boston University to UCLA, from South Louisiana Community College to Northwestern University, have recently created or resurrected Minecraft servers and shared their creations on Discord chats, in Facebook meme groups, and on Reddit threads. The boom of college Minecraft servers has begun. These servers have the express purpose of bringing students together and building, oftentimes focused on recreating their college campuses. Searches for Minecraft server hosting have peaked to unprecedented levels in the last few weeks, and thousands of students are discussing college servers, most notably on the Facebook group "Zoom Memes for Self Quaranteens."
```

API: https://loripsum.net, https://corporatelorem.kovah.de, https://devlorem.kovah.de

## 👍 Testimonial

Endpoint: `/testimonial`

Example: https://needrandom.netlify.app/api/testimonial
```
[
  {
    "id": 1,
    "name": "Lance Jarvis",
    "location": "London, UK",
    "designation": "General Manager ",
    "avatar": "https://testimonialapi.toolcarton.com/avatar/1.jpg",
    "message": "We have been using product for last one year, and I have to say that it has transformed the way we do business. Thank you for awesome service.",
    "lorem": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
    "rating": 4.8,
    "audio": "https://testimonialapi.toolcarton.com/audio/1.mp3"
  },
  ...
]
```

API: https://testimonialapi.toolcarton.com

## 🗨 Quote

Endpoint: `/quote`

Example: https://needrandom.netlify.app/api/quote
```
It's easier to resist at the beginning than at the end.
```

API: https://github.com/lukePeavey/quotable
