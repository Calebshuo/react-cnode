import React from 'react'
import { getUserList } from '../../redux/userlist.redux'
import { connect } from 'react-redux'
import UserChart from '../userchart/userchart'

@connect(
  state=>state.chatuser,
  { getUserList }
)
class Boss extends React.Component {
  componentWillMount() {
    this.props.getUserList('genius')
  }
  render() {
    return <UserChart userlist={this.props.userlist}></UserChart>
  }
}

export default Boss