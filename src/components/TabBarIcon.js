import React from 'react'
import { Icon } from 'expo'

export default class TabBarIcon extends React.Component {
  render() {
    const {
      iconColor,
    } = styles

    return (
      <Icon.Ionicons
        name={this.props.name}
        size={26}
        style={{ marginBottom: -3 }}
        color={this.props.focused ? iconColor.tabIconSelected : iconColor.tabIconDefault}
      />
    )
  }
}

const tintColor = '#2f95dc'
const styles = {
  iconColor: {
    tintColor,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColor,
    tabBar: '#fefefe',
    errorBackground: 'red',
    errorText: '#fff',
    warningBackground: '#EAEB5E',
    warningText: '#666804',
    noticeBackground: tintColor,
    noticeText: '#fff',
  },
}
