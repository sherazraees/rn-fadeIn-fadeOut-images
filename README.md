# rn-fadein-fadeout-images

This component works as fade in and fade out the images. Here is the link of package https://www.npmjs.com/package/rn-fadein-fadeout-images

## Installation

```bash
yarn add rn-fadein-fadeout-images
```

## Usage

```bash
import React from 'react';
import {View} from 'react-native';

import ImagesFadeInOut from 'rn-fadein-fadeout-images';

const arr = [
  'https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?cs=srgb&dl=pexels-daria-shevtsova-704569.jpg&fm=jpg',
  'https://images.pexels.com/photos/1391487/pexels-photo-1391487.jpeg?cs=srgb&dl=pexels-monicore-1391487.jpg&fm=jpg',
  'https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?cs=srgb&dl=pexels-daria-shevtsova-1260968.jpg&fm=jpg',
];

const App = () => {
  return (
    <View style={{flex: 1}}>
      <ImagesFadeInOut style={{margin: 10, borderRadius: 15}} images={arr} />
    </View>
  );
};

export default App;
```

## Example

<img src="./SlideShow.gif" width="320" height="590" alt="SlideShow.gif">

## Props

These are the props that the `rn-fadein-fadeout-images` component accepts:

| Property        | Type     | Required | Default | Description                    |
| --------------- | -------- | -------- | ------- | ------------------------------ |
| images          | `Array`  | `true`   |         | Array of images are required   |
| style           | `Object` | `true`   |         | Style for the images           |
| fadeInduration  | `Number` | `false`  | 3000    | The duration of fade in image  |
| fadeOutduration | `Number` | `false`  | 3000    | The duration of fade out image |

## Support

I would like to see your suggestions, in case of any query you can feel free to contact me at sherazraees3@gmail.com and you can also contact me on
Linkedln account https://www.linkedin.com/in/sheraz-raees-140b0b197/

## Contributing

Pull requests are welcome. For any major changes, please open an issue first to discuss what you would like to change.
