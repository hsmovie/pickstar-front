import React from 'react'
import { View } from 'react-native'
import Header from './components/Header'
import SubHeader from './components/SubHeader'
import NewsFeedCardItem from './components/NewsFeedCardItem'

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    const testData = {
      writer: 'ekdyrtla',
      level: 8,
      date: '2일전',
      title: '오늘은 레드벨벳 예리의 공항패션을 소개시켜드릴까 해요!',
      heart: 30,
    }

    return (
      <View>
        <Header
          title="PICKSTAR"
          main
        />
        <SubHeader />
        <NewsFeedCardItem item={testData} />
      </View>
    )
  }
}
