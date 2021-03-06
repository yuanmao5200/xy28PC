import React, {Component} from 'react';
import {connect} from 'dva';
import {Table, Row, Col} from 'antd';
import {getFrontDate} from '../../utils/formatUtil';
import {placeType, isWinning, combineRates} from '../../config';
import UserSelect from '../../components/UserSelect';

class BetRecords extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      records: [],
      count: 0,
      params: {
        pageIndex: 1,
      },
    };
  }

  componentWillMount() {
    const { location: {query} } = this.props;
    let params = null;
    if(query.user_id){
      params = {
        pageIndex: 1,
        user_id: query.user_id,
      }
      this.setState({params}, ()=>{
        this.loadRecords();
      })
    }else{
      this.loadRecords();
    }
  }

  loadRecords = ()=>{
    this.props.dispatch({
      type: 'bet/records',
      params: this.state.params,
      callback: (rs)=>{
        this.setState({count: rs.count});
      }
    });
  }

  groupByUser = (user_id)=>{
    let params = {
      pageIndex: 1,
    }
    if(user_id != 0) params.user_id = user_id;
    this.setState({params},()=>{
      this.loadRecords();
    })
  }

  columns = [
    {title: '下注期数', dataIndex: 'serial_number',},
    {title: '用户账号', dataIndex: 'user_account',
      render:(text, {user_id})=><a onClick={()=>{this.groupByUser(user_id)}}>{text}</a>},
    {title: '用户昵称', dataIndex: 'user_name'},
    {
      title: '下注类型', dataIndex: 'bottom_pour_type',
      render: (text, record)=>combineRates[text]?combineRates[text]:record.bottom_pour_number
    },
    {title: '下注金额', dataIndex: 'bottom_pour_money',},
    {title: '赢取积分', dataIndex: 'win_integral',},
    {
      title: '房间等级', dataIndex: 'room_level',
      render: (text)=>text == 1?'初级房':text == 2?'中级房':text == 3?'高级房':''
    },
    {
      title: '玩法类型', dataIndex: 'lottery_place_type',
      render: (text)=>text == placeType.bj ? "北京" : "加拿大"
    },
    {
      title: '下注时间', dataIndex: 'created_at',
      render: (text)=>getFrontDate(text, 'yyyy-MM-dd hh:mm')
    }
  ];

  nextPage = (pageIndex)=>{
    this.setState({params: {...this.state.params, pageIndex}},()=>{
      this.loadRecords({});
    });
  };

  render() {
    let {bet} = this.props;
    return (
      <div>
        <Row type="flex" style={{fontSize: 15,height: 50}}>
          <Col><label>玩家下注记录</label></Col>
          <Col style={{marginLeft: 20}}>
            <UserSelect onSelect={(user_id)=>{this.groupByUser(+user_id)}}
            dispatch={this.props.dispatch}/>
          </Col>
        </Row>
        <Table
          rowKey={record => record.bottom_pour_id}
          dataSource={bet.records} columns={this.columns}
          pagination={{ pageSize: 10, total: this.state.count, onChange:this.nextPage}}
        />
      </div>
    );
  }
}

export default connect(({bet})=> {
  return {bet};
})(BetRecords);
