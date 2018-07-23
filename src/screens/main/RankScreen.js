import React, { Component } from 'react'
import {
  FlatList,
  View,
} from 'react-native'
import { connect } from 'react-redux'
import Header from './components/Header'
import {
  fetchRankData,
} from '../../redux/actions/rank.actions'
import SubHeader from './components/SubHeader'
import RankCardItem from './components/RankCardItem'
// import SplashScreen from '../loading/SplashScreen'

class RankScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  componentWillMount() {
    const { fetchRankData } = this.props

    fetchRankData()
  }

  renderItem(ranking) {
    return (
      <RankCardItem ranking={ranking} />
    )
  }

  onPress() {
    console.log(1)
  }

  render() {
    const { containerStyle } = styles

    const {
      rankData,
    } = this.props

    return (
      <View style={containerStyle}>
        <Header
          navigation={this.props.navigation}
          title="PICKSTAR"
          main
        />
        <SubHeader />
        <FlatList
          data={rankData}
          renderItem={this.renderItem}
          keyExtractor={(ranking) => ranking.rank.toString()}
        />
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    flex: 1,
  },
}

const mapStateToProps = (state) => {
  const { rankData } = state.rank

  return { rankData }
}

export default connect(mapStateToProps, {
  fetchRankData,
})(RankScreen)
