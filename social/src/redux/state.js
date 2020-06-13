let state = {
  profilePage: {
    postData: [
      {id: 1, text: "Hello, i'm here", likes: 12},
      {id: 2, text: "I'm learning React!", likes: 15},
      {id: 3, text: "And Redux", likes: 7},
    ]
  },
  dialogsPage: {
    dialogs: [
      {id: 1, name: 'Alex'},
      {id: 2, name: 'Dasha'},
      {id: 3, name: 'Max'},
      {id: 4, name: 'Elena'}
    ],
    messages: [
      {
        id: 0,
        name: 'Alex',
        message: 'Hi',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaOJeQgJS1vwCJ6tj4-OAvWRl8c7IrnRRk7lKLxyBMnJVcVDl5&s'
      },
      {
        id: 1,
        name: 'Dasha',
        message: 'How are you',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaOJeQgJS1vwCJ6tj4-OAvWRl8c7IrnRRk7lKLxyBMnJVcVDl5&s'
      },
      {
        id: 2,
        name: 'Alex',
        message: 'File',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaOJeQgJS1vwCJ6tj4-OAvWRl8c7IrnRRk7lKLxyBMnJVcVDl5&s'
      },
    ]
  }
}

export default state;