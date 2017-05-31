/**
 * Created by chengyuan on 2017/p3/26.
 */
export default {
  user: {
    login: 'POST /users/admin/pcLogin',
    getList: 'GET /users/admin/list',
    updateUserSpeak: 'PUT /users/admin/updateUserSpeak',
  },
  recharge: {
    list: "GET /recharge/admin/list",
    rechargeIntegral: 'PUT /recharge/admin/adminRecharge',//积分充值
    approveRecharge: 'PUT /recharge/admin/approveRecharge',//积分充值
  },
  withdraw: {
    records: "GET /withdraw/admin/records",
    updateWithdraw: "PUT /withdraw/admin/updateWithdraw",//审核提现
  },
  betRecord: {
    list: 'GET /bet/admin/records'
  },
  lottery: {
    record: 'GET /lottery/admin/record',
    addGameRules: 'POST /gameRules/admin/addGameRules',
    updateRoomGameRule: 'PUT /gameRules/admin/updateRoomGameRule',
    gameRules: 'GET /gameRules/admin/list',
    updateRate: 'PUT /gameRules/admin/updateRate',
  },
  system: {
    rooms: 'GET /system/rooms',
    rollbackRules: 'GET /system/admin/rollbackRules',
    addRollback: 'POST /system/admin/addRollback',
    updateRoomStatus: 'PUT /system/admin/updateRoomStatus',
    updateRoomSpeak: 'PUT /system/admin/updateRoomSpeak',
    updateRollbackRules: 'PUT /system/admin/updateRollbackRules',
  },
  message: {
    addMessage: 'POST /message/admin/addMessage',
    systemList: 'GET /message/systemList',
    deleteMessage: 'PUT /message/admin/deleteMessage',
  },
  rollback: {
    countRollback: 'GET /rollback/admin/countRollback',
    doRollback: 'PUT /rollback/admin/doRollback',
    rollbackRecord: 'GET /rollback/admin/rollbackRecord',
  },
}
