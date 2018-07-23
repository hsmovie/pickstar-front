import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { BackArrowHeader, Input, ButtonGradient } from '../../components/common'
import {
  fetchRankData,
  starNameChanged,
} from '../../redux/actions/rank.actions'
import StarItem from './components/StarItem'

class PickFavoriteStarScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  componentWillMount() {
    const {
      fetchRankData,
    } = this.props

    fetchRankData()
  }

  renderItem(rankData) {
    return <StarItem rankData={rankData} />
  }

  render() {
    const {
      containerStyle,
      inputStyle,
      // starItemBoxStyle,
    } = styles

    const {
      rankData,
      starName,
      filteredRankData,

      starNameChanged, // function
    } = this.props

    return (
      <View style={containerStyle}>
        <BackArrowHeader
          firstLineText="관심있는 연예인을"
          secondLineText="선택해 주세요."
        />

        <Input
          style={inputStyle}
          placeholder="검색할 연예인을 입력하세요."
          onChangeText={starNameChanged}
          value={starName}
        />

        <FlatList
          data={filteredRankData.length > 0 ? filteredRankData : rankData}
          renderItem={this.renderItem}
          keyExtractor={(rankData) => rankData.rank.toString()}
          numColumns={3}
        />

        <ButtonGradient>
          선택완료
        </ButtonGradient>
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  inputStyle: {
    borderRadius: 20,
    height: 42,
    width: 300,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: -21,
  },
}

const mapStateToProps = (state) => {
  const { starName, rankData, filteredRankData } = state.rank

  return { rankData, starName, filteredRankData }
}

export default connect(mapStateToProps, {
  fetchRankData,
  starNameChanged,
})(PickFavoriteStarScreen)
