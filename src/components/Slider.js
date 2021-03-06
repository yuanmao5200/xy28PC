/**
 * Created by chengyuan on 2017/3/25.
 */
import React,{Component} from 'react';
import { Menu, Icon, Switch } from 'antd';
import { Link } from 'dva/router';
import { routerRedux } from 'dva/router';
import {connect} from 'dva';
const SubMenu = Menu.SubMenu;

class Slider extends Component{

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      theme: 'dark',
      current: '1',
      openKeys: ["sub_0","sub_1","sub_2","sub_3","sub_4"],
    };
  }

  handleClick(e) {
    this.setState({
      current: e.key,
    });
  }

  componentWillMount() {
  }

  menuList = [
      {
        title: '玩家管理',
        icon: 'switcher',
        child: [
          {title: '玩家列表', router: '/usersList'},
          {title: '玩家充值记录', router: '/rechargeList'},
          {title: '玩家账变记录', router: '/userIntegralChange'},
        ]
      },
      {
        title: '下注管理',
        icon: 'appstore',
        child: [
          {title: '玩家下注记录', router: '/betRecords'},
          {title: '开奖记录', router: '/lotteryRecords'},
        ]
      },
      {
        title: '财务管理',
        icon: 'switcher',
        child: [
          {title: '玩家提现申请', router: '/withdrawRecords'},
          {title: '玩家回水计算', router: '/rollback'},
          {title: '玩家回水记录', router: '/rollbackRecord'},
        ]
      },
      {
        title: '消息管理',
        icon: 'switcher',
        child: [
          {title: '发系统消息', router: '/addMessage'},
          {title: '系统消息列表', router: '/systemList'},
        ]
      },
      {
        title: '系统设置',
        icon: 'setting',
        child: [
          {title: '房间设置', router: '/rooms'},
          {title: '下注金额设置', router: '/betLimit'},
          {title: '赔率设置', router: '/gameRules'},
          {title: '回水规则设置', router: '/rollbackRules'},
        ]
      },
    ]

  initSidebarDom(){
    return (
      this.menuList.map((sidebar,key)=>{
        return (
          <SubMenu
            key={`sub_${key}`}
            title={<span><Icon type={sidebar.icon} /><span>{sidebar.title}</span></span>}>
            {sidebar.child.map((child,index)=>{
              return (
                <Menu.Item key={`sub${key}_${index}`}>
                  <Link to={child.router}>
                    {child.title}
                  </Link>
                </Menu.Item>
              );
            })}
          </SubMenu>
        )
      })
    );
  }

  render() {
    return (
      <div>
        <div style={{height: 50, width: '80%',
        textAlign: 'center',paddingTop: 14,fontSize: 16,marginBottom: 20}}>
        </div>
        <Menu
          theme="dark"
          onClick={this.handleClick.bind(this)}
          style={{ width: '100%' }}
          mode="inline"//          mode="inline"
          defaultSelectedKeys={['sub0_0']}
          defaultOpenKeys={this.state.openKeys}
        >
          {this.initSidebarDom()}
        </Menu>
      </div>
    );
  }

}


export default connect()(Slider);
