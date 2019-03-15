import React, {Component} from 'react'
import {Modal, StyleSheet, Text, TouchableHighlight, View} from 'react-native'

export default class Menu extends Component {

    render() {
        const {children, list, onClose, onItem, style, title, visible = false} = this.props;
        return visible && <Modal transparent visible={visible}>
            <TouchableHighlight onPress={onClose} style={[css.overlay, style]} underlayColor="transparent"><View style={css.container}>
                {title !== undefined && <Text style={css.title}>{title}</Text>}
                {children ? children : Array.isArray(list) && list.map((item, i) => <View key={`menu${i}`}>
                    <Item onPress={() => onItem && onItem(item)} {...item}/>
                    {(i < list.length - 1) && <View style={css.itemDivider}/>}
                </View>)}
            </View></TouchableHighlight>
        </Modal>
    }
}

class Item extends Component {

    render() {
        const {style = css.itemContainer, text, ...props} = this.props;
        return <TouchableHighlight style={style} {...props}>
            <Text style={{textAlign: 'center'}}>{text}</Text>
        </TouchableHighlight>
    }
}

Menu.Item = Item;

const css = StyleSheet.create({
    overlay: {
        flex: 1,
        alignItems: 'center', justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
    },
    container: {
        margin: 20, minWidth: 250,
        backgroundColor: 'white',
        borderRadius: 10
    },
    title: {padding: 10, textAlign: 'center'},
    itemContainer: {
        alignItems: 'center', justifyContent: 'center',
        padding: 15
    },
    itemDivider: {
        height: 1, backgroundColor: '#f3f3f3'
    }
});
