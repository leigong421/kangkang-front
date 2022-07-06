export const colConfig = [
  {
    dragLocked: true, //锁住不让拖动
    switchDisabled: true, //禁用关闭
    switch: true, // 是否展示该列
    attrs: {
      label: "序号",
      prop: "name",
      align: "left",
    },
  },
  {
    dragLocked: true, //锁住不让拖动
    switchDisabled: true, //禁用关闭
    switch: true, // 是否展示该列
    slotHeaderName: "searchBuyCompany", // 表头插槽
    slotHeaderSearchType: "input", // 表头查询类型,目前支持 input 和select
    searchKey: "buyCompany", // /表头查询字段,用于配置查询的时候传递给后台的字段
    attrs: {
      label: "购货单位",
      prop: "companyName",
      align: "left",
    },
  },
  {
    dragLocked: true, //锁住不让拖动
    switchDisabled: true, //禁用关闭
    switch: true, // 是否展示该列
    slotHeaderName: "searchGoodName", // 表头插槽
    slotHeaderSearchType: "input", // 表头查询类型,目前支持 input 和select
    searchKey: "goodName", // /表头查询字段,用于配置查询的时候传递给后台的字段
    attrs: {
      label: "商品名称",
      prop: "goodsName",
      align: "left",
    },
  },
  {
    switch: true, // 是否展示该列
    slotHeaderName: "searchNum", // 表头插槽
    slotHeaderSearchType: "input", // 表头查询类型,目前支持 input 和select
    searchKey: "address", // /表头查询字段,用于配置查询的时候传递给后台的字段
    attrs: {
      label: "数量",
      prop: "goodsNum",
      align: "left",
    },
  },
  {
    switch: true, // 是否展示该列
    slotHeaderName: "searchUnit", // 表头插槽
    slotHeaderSearchType: "input", // 表头查询类型,目前支持 input 和select
    searchKey: "goodsUnit", // /表头查询字段,用于配置查询的时候传递给后台的字段
    attrs: {
      label: "单位",
      prop: "goodsUnit",
      align: "left",
    },
  },
  {
    switch: true, // 是否展示该列
    slotHeaderName: "searchPrice", // 表头插槽
    slotHeaderSearchType: "input", // 表头查询类型,目前支持 input 和select
    searchKey: "goodsPrice", // /表头查询字段,用于配置查询的时候传递给后台的字段
    attrs: {
      label: "单价（元）",
      prop: "goodsPrice",
      align: "left",
    },
  },
  {
    switch: true, // 是否展示该列
    slotHeaderName: "searchTotal", // 表头插槽
    slotHeaderSearchType: "input", // 表头查询类型,目前支持 input 和select
    searchKey: "goodsTotal", // /表头查询字段,用于配置查询的时候传递给后台的字段
    attrs: {
      label: "总计金额",
      prop: "goodsTotal",
      align: "left",
    },
  },
  {
    switch: true, // 是否展示该列
    slotHeaderName: "searchDate", // 表头插槽
    slotHeaderSearchType: "input", // 表头查询类型,目前支持 input 和select
    searchKey: "date", // /表头查询字段,用于配置查询的时候传递给后台的字段
    attrs: {
      label: "购货日期",
      prop: "date",
      align: "left",
    },
  },
  {
    slotHeaderName: "hbSetting", // 是否展示表格配置项
    switch: true,
    attrs: {
      label: "",
      width: "100px",
      fixed: "right",
    },
  },
];

// export const bankListRules = {
//   code: [
//     {
//       required: true,
//       message: "银行编码不能为空",
//       trigger: ["blur", "change"],
//     },
//   ],
//   name: [
//     {
//       required: true,
//       message: "银行名称不能为空",
//       trigger: ["blur", "change"],
//     },
//   ],
//   address: [
//     {
//       required: true,
//       message: "银行地址不能为空",
//       trigger: ["blur", "change"],
//     },
//   ],
// };

// export const formItemList = [
//   {
//     type: "select",
//     prop: "buyCompany",
//     label: "购货单位",
//     formDataKey: "buyCompany",
//   },
//   {
//     type: "select",
//     prop: "goodName",
//     label: "商品名称",
//     formDataKey: "goodName",
//   },
//   {
//     type: "select",
//     prop: "unit",
//     label: "单位",
//     formDataKey: "unit",
//   },
//   {
//     type: "input",
//     prop: "num",
//     label: "数量",
//     formDataKey: "num",
//   },

//   {
//     type: "input",
//     prop: "price",
//     label: "单价",
//     formDataKey: "price",
//   },
//   {
//     type: "input",
//     prop: "sumPrice",
//     label: "金额",
//     formDataKey: "sumPrice",
//   },
// ];
