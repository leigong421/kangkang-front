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
    switch: true, // 是否展示该列
    slotHeaderName: "name", // 表头插槽
    slotHeaderSearchType: "input", // 表头查询类型,目前支持 input 和select
    searchKey: "name", // /表头查询字段,用于配置查询的时候传递给后台的字段
    attrs: {
      label: "公司名称",
      prop: "name",
      align: "left",
    },
  },
  {
    switch: true, // 是否展示该列
    slotHeaderName: "searchAdress", // 表头插槽
    slotHeaderSearchType: "input", // 表头查询类型,目前支持 input 和select
    searchKey: "adress", // /表头查询字段,用于配置查询的时候传递给后台的字段
    attrs: {
      label: "公司地址",
      prop: "adress",
      align: "left",
    },
  },
  {
    switch: true, // 是否展示该列
    slotHeaderName: "searchPhone", // 表头插槽
    slotHeaderSearchType: "input", // 表头查询类型,目前支持 input 和select
    searchKey: "phone", // 表头查询字段,用于配置查询的时候传递给后台的字段
    attrs: {
      label: "联系电话",
      prop: "phone",
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
  name: [
    {
      required: true,
      message: "商品名称不能为空",
      trigger: ["blur", "change"],
    },
  ],
};

export const formItemList = [
  {
    type: "input",
    prop: "name",
    label: "公司名称",
    formDataKey: "name",
  },
  {
    type: "input",
    prop: "adress",
    label: "公司地址",
    formDataKey: "adress",
  },
  {
    type: "input",
    prop: "phone",
    label: "电话",
    formDataKey: "phone",
  },
];
