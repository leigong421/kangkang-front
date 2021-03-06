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
    slotHeaderName: "searchGoodName", // 表头插槽
    slotHeaderSearchType: "input", // 表头查询类型,目前支持 input 和select
    searchKey: "goodName", // /表头查询字段,用于配置查询的时候传递给后台的字段
    attrs: {
      label: "商品名称",
      prop: "goodName",
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
      prop: "num",
      align: "left",
    },
  },
  {
    switch: true, // 是否展示该列
    slotHeaderName: "searchUnit", // 表头插槽
    slotHeaderSearchType: "input", // 表头查询类型,目前支持 input 和select
    searchKey: "unit", // /表头查询字段,用于配置查询的时候传递给后台的字段
    attrs: {
      label: "单位",
      prop: "unit",
      align: "left",
    },
  },
  {
    switch: true, // 是否展示该列
    slotHeaderName: "searchPrice", // 表头插槽
    slotHeaderSearchType: "input", // 表头查询类型,目前支持 input 和select
    searchKey: "price", // /表头查询字段,用于配置查询的时候传递给后台的字段
    attrs: {
      label: "单价（元）",
      prop: "price",
      align: "left",
    },
  },
  {
    switch: true, // 是否展示该列
    slotHeaderName: "searchTotal", // 表头插槽
    slotHeaderSearchType: "input", // 表头查询类型,目前支持 input 和select
    searchKey: "total", // /表头查询字段,用于配置查询的时候传递给后台的字段
    attrs: {
      label: "总计金额",
      prop: "total",
      align: "left",
    },
  },
  {
    switch: true, // 是否展示该列
    slotHeaderName: "searchTotal", // 表头插槽
    slotHeaderSearchType: "input", // 表头查询类型,目前支持 input 和select
    searchKey: "total", // /表头查询字段,用于配置查询的时候传递给后台的字段
    attrs: {
      label: "入库日期",
      prop: "total",
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

export const bankListRules = {
  code: [
    {
      required: true,
      message: "银行编码不能为空",
      trigger: ["blur", "change"],
    },
  ],
  name: [
    {
      required: true,
      message: "银行名称不能为空",
      trigger: ["blur", "change"],
    },
  ],
  address: [
    {
      required: true,
      message: "银行地址不能为空",
      trigger: ["blur", "change"],
    },
  ],
};

export const formItemList = [
  {
    type: "select",
    prop: "goodName",
    label: "商品名称",
    formDataKey: "goodName",
  },
  {
    type: "input",
    prop: "num",
    label: "数量",
    formDataKey: "num",
  },
  {
    type: "input",
    prop: "unit",
    label: "单位",
    formDataKey: "unit",
  },
  {
    type: "input",
    prop: "price",
    label: "购入价格",
    formDataKey: "price",
  },
];
