export const colConfig = [
  {
    dragLocked: true, //锁住不让拖动
    switchDisabled: true, //禁用关闭
    switch: true, // 是否展示该列
    slotHeaderName: "name", // 表头插槽
    slotHeaderSearchType: "input", // 表头查询类型,目前支持 input 和select
    searchKey: "name", // /表头查询字段,用于配置查询的时候传递给后台的字段
    attrs: {
      label: "商品名称",
      prop: "name",
      align: "left",
    },
  },
  {
    switch: true, // 是否展示该列
    slotHeaderName: "unit", // 表头插槽
    slotHeaderSearchType: "input", // 表头查询类型,目前支持 input 和select
    searchKey: "unit", // /表头查询字段,用于配置查询的时候传递给后台的字段
    attrs: {
      label: "商品单位",
      prop: "unit",
      "show-overflow-tooltip": true, // 当内容过长被隐藏时显示 tooltip
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
  unit: [
    {
      required: true,
      message: "商品单位不能为空",
      trigger: ["blur", "change"],
    },
  ],
};

export const formItemList = [
  {
    type: "input",
    prop: "name",
    label: "商品名称",
    formDataKey: "name",
  },
  {
    type: "input",
    prop: "unit",
    label: "单位",
    formDataKey: "unit",
  },
];
