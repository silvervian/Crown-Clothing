import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: `${require("../../assets/img/hats.png")}`,
          id: 1,
          linkUrl: "hats"
        },
        {
          title: "jackets",
          imageUrl: `${require("../../assets/img/jackets.png")}`,
          id: 2,
          linkUrl: ""
        },
        {
          title: "sneakers",
          imageUrl: `${require("../../assets/img/sneakers.png")}`,
          id: 3,
          linkUrl: ""
        },
        {
          title: "womens",
          imageUrl: `${require("../../assets/img/womens.png")}`,
          size: "large",
          id: 4,
          linkUrl: ""
        },
        {
          title: "men",
          imageUrl: `${require("../../assets/img/men.png")}`,
          size: "large",
          id: 5,
          linkUrl: ""
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
