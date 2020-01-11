const initialState = {
  sections: [
    {
      title: "hats",
      imageUrl: `${require("../../assets/img/hats.png")}`,
      id: 1,
      linkUrl: "shop/hats"
    },
    {
      title: "jackets",
      imageUrl: `${require("../../assets/img/jackets.png")}`,
      id: 2,
      linkUrl: "shop/jackets"
    },
    {
      title: "sneakers",
      imageUrl: `${require("../../assets/img/sneakers.png")}`,
      id: 3,
      linkUrl: "shop/sneakers"
    },
    {
      title: "womens",
      imageUrl: `${require("../../assets/img/womens.png")}`,
      size: "large",
      id: 4,
      linkUrl: "shop/womens"
    },
    {
      title: "men",
      imageUrl: `${require("../../assets/img/men.png")}`,
      size: "large",
      id: 5,
      linkUrl: "shop/men"
    }
  ]
};

const directoryReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
