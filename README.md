# react-native-popups

<img align="left" width="50%" src="https://github.com/LeeYoungIn/react-native-popups/blob/master/screenshot/Screen1.png">
<img align="left" width="50%" src="https://github.com/LeeYoungIn/react-native-popups/blob/master/screenshot/Screen2.png">

---

## Installation
```sh
npm i -S react-native-popups
```

```javascript
import { Popup } from 'react-native-popups'
```

## Props
### PopMenu
| Prop                 |  Default  |       Type        | Description                                                |
| :------------------- | :-------: | :---------------: | ---------------------------------------------------------- |
| list                 |    `0`    |     `number`      | Right inset of separator                                   |
| title                |     -     |     `string`      | Title of PopMenu                                           |
| visible              |  `false`  |      `bool`       | PopMenu visible                                            |

###PopMenu.Item
| Prop                 |                             Default                             |       Type        | Description                                   |
| :------------------- |                            :-------:                            | :---------------: | --------------------------------------------- |
| style                | `{alignItems: 'center', justifyContent: 'center', padding: 15}` |      `Style`      | Item's <TouchableHighlight/> style            |
| text                 |                                -                                |     `string`      | Text of the item                              |
| props                |                                -                                |      `Props`      | React Native <TouchableHighlight/> props      |

## Example
```javascript
<PopMenu visible={visible} title="Menu Title" list={[
    {text: 'Item 1', value: 1},
    {text: 'Item 2', value: 2},
    {text: 'Item 3', value: 3}
]} onClose={() => this.setState({visible: false})}
   onItem={item => this.onItem(item)}/>

<PopMenu visible title="With Children">
    <PopMenu.Item onPress={() => this.onItem(1)} text="Item 1"/>
    <Text>Item 2<Text>
    <Text>Item 3<Text>
</PopMenu>
```
