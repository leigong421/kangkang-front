<!--银行信息列表-->
<template>
  <div class="fms-view bank-list">
    <h3 class="h3-title">出库信息</h3>
    <div class="header-operate-area">
      <el-button
        type="primary"
        icon="el-icon-plus"
        class="add-btn"
        @click="handleAddvoucherInfo('add')"
        >新增</el-button
      >
      <!-- 商品出库信息 -->
    </div>

    <div class="fms-content">
      <hb-table
        v-loading="loading"
        :colConfig="colConfig"
        :tableData="tableList"
        row-key="id"
        height="calc(100vh - 265px)"
        :selection="true"
        :border="true"
        @to-search="handleToSearch"
        @reset-search="handleResetSearch"
        @update-search-col-config="handleUpdateSearchColConfig"
      >
        <!--自定义表头列插槽--表头查询项----- 循环遍历input和select搜索框  -->

        <template
          v-for="(item, index) in searchColConfig"
          :slot="item.slotHeaderName"
          slot-scope="scope"
        >
          <hb-search
            :item="item"
            :key="index"
            :searchColConfig="searchColConfig"
            :searchForm="searchForm"
            :row="scope.row"
          />
        </template>

        <!--自定义表头列插槽----下的列内容插槽--------如:插槽'hbSetting'下展示操作项 -->
        <template slot="operation" slot-scope="scope">
          <hb-operate
            :operateList="operateList"
            :row="scope.row"
            @setEventsName="setEventsName"
          ></hb-operate>
        </template>
      </hb-table>
    </div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleChangePage"
      :current-page="searchForm.page"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="searchForm.size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>

    <hb-dialog
      :visible.sync="bankDialogVisible"
      v-if="bankDialogVisible"
      :show-footer="false"
      width="1200px"
      :title="bankDialogVisibleTitle"
    >
      <el-form
        :model="formData"
        :rules="bankListRules"
        ref="bank-list"
        label-position="left"
      >
        <div id="single-info">
          <el-form-item label="公司名称">
            <el-select
              size="mini"
              v-model="formData.companyName"
              placeholder="请选择公司"
            >
              <el-option
                v-for="(item, index) in companyOptions"
                :key="index"
                :label="item.name"
                :value="item.name"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-table
            :data="formData.goodsList"
            style="width: 100%"
            show-summary
            :summary-method="getSummaries"
          >
            <el-table-column prop="name" label="商品名称" width="180">
              <template slot-scope="scope">
                <el-select
                  size="mini"
                  v-model="scope.row.goodsName"
                  placeholder="请选择商品"
                >
                  <el-option
                    v-for="(item, index) in goodsOptions"
                    :key="index"
                    :label="item.name"
                    :value="item.name"
                  ></el-option>
                </el-select>
              </template>
            </el-table-column>
            <el-table-column prop="num" label="数量">
              <template slot-scope="scope">
                <el-input
                  size="mini"
                  v-model.trim="scope.row.goodsNum"
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="unit" label="单位">
              <template slot-scope="scope">
                {{ getUnit(scope.row.goodsName) }}
                <span class="add-data">
                  {{
                    (scope.row.goodsUnit = getUnit(scope.row.goodsName))
                  }}</span
                >
              </template>
            </el-table-column>
            <el-table-column prop="price" label="价格">
              <template slot-scope="scope">
                <el-input
                  size="mini"
                  v-model.trim="scope.row.goodsPrice"
                ></el-input>
              </template>
            </el-table-column>

            <el-table-column prop="price" label="单商品总价（元）">
              <template slot-scope="scope">
                {{ scope.row.goodsNum * scope.row.goodsPrice }}
                <span class="add-data">
                  {{
                    (scope.row.goodsTotal =
                      scope.row.goodsNum * scope.row.goodsPrice)
                  }}</span
                >
              </template>
            </el-table-column>
            <el-table-column prop="price" label="出货日期">
              <template slot-scope="scope">
                <el-date-picker
                  v-model="scope.row.saleDate"
                  type="date"
                  placeholder="选择日期"
                  size="mini"
                  style="width: 130px"
                  format="yyyy-MM-dd"
                  value-format="yyyy-MM-dd"
                >
                </el-date-picker>
              </template>
            </el-table-column>
            <el-table-column prop="price" label="操作">
              <template slot-scope="scope">
                <el-button size="mini" type="text" @click="handleAddRow"
                  >+</el-button
                >
                <el-button
                  size="mini"
                  type="text"
                  :disabled="formData.goodsList.length === 1"
                  @click="handleDelete(scope.$index)"
                  >-</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </div>

        <span name="footer" class="dialog-footer">
          <el-button v-print="'#single-info'" @click="prints">打印</el-button>
          <el-button @click="handleCancel">取消</el-button>
          <el-button
            type="primary"
            @click="handleSubmitForm"
            :disabled="submitLoading"
            >确认</el-button
          >
        </span>
      </el-form>
    </hb-dialog>
  </div>
</template>

<script>
const INIT_SEARCH = {
  page: 1,
  size: 10,
};

import HbTable from "@/components/hb-table/index.vue";
import Pagination from "@/components/hb-pagination/index.vue";
import HbDialog from "@/components/hb-dialog/index.vue";
import HbFormItem from "@/components/hb-form/index.vue";
import HbOperate from "@/components/hb-operate/index.vue";
import HbSearch from "@/components/hb-search/index.vue";
import { colConfig, bankListRules, formItemList } from "./constants.js";
import tableMixins from "@/mixins/table-mixins.js";
import { cleanParams } from "@/utils/index.js";
import { cloneDeep } from "lodash";
import { format } from "date-fns";
export default {
  components: {
    HbTable,
    Pagination,
    HbDialog,
    HbFormItem,
    HbSearch,
    HbOperate,
  },
  mixins: [tableMixins],
  inject: ["frontUrl"],
  data() {
    return {
      format,
      colConfig,
      bankListRules,
      goodsOptions: undefined,
      companyOptions: undefined,
      formItemList,
      // 搜索条件
      searchForm: {
        ...cloneDeep(INIT_SEARCH),
      },
      //操作项list
      operateList: [
        {
          btnName: "修改",
          eventsName: "handleEdit",
        },
      ],
      //初始化数据
      // initData: {
      //   page: 0,
      //   size: 10,
      //   data: [],
      // },
      tableList: undefined,
      loading: false,
      total: 0,

      bankDialogVisible: false,
      bankDialogVisibleTitle: "新增出货信息",
      submitLoading: false,
      formData: {
        companyName: "",
        goodsList: [{ saleDate: format(new Date(), "yyyy-MM-dd") }],
      },
    };
  },
  methods: {
    getUnit(name) {
      console.log(
        this.goodsOptions.filter((item) => item.name === name)[0],
        9999999,
        name
      );
      return this.goodsOptions.filter((item) => item.name === name)?.[0]?.unit;
    },
    handleResetSearch() {
      this.searchForm = {
        ...cloneDeep(INIT_SEARCH),
      };
      this.publicSearchAndChangeSize();
    },
    //去查询
    handleToSearch() {
      console.log("看查询条件-----", this.searchForm);
      this.publicSearchAndChangeSize();
    },

    //编辑操作项
    handleEdit(row) {
      console.log("编辑页", row);
      this.bankDialogVisibleTitle = "修改银行信息";
      this.formData = { ...row };
      this.handleAddvoucherInfo("edit");
    },

    //操作项父级方法
    handleOperateCol(eventName, row) {
      console.log("操作栏对应的操作项", eventName, row);
      this[eventName](row);
    },

    //禁用操作列
    handleColBtnIsDisabled(row) {
      console.log(row, row.delFlag === 1);
      return row.delFlag === 1;
    },
    setEventsName(eventName, row) {
      console.log(eventName, row);
      this[eventName](row);
    },
    //翻页--查询
    handleChangePage(page) {
      this.searchForm.page = page;
      this.pageList();
    },
    //每页条数改变---查询
    handleSizeChange(size) {
      this.searchForm.size = size;
      this.publicSearchAndChangeSize();
    },
    publicSearchAndChangeSize() {
      this.searchForm.page = 1;

      this.pageList();
    },
    //查询列表
    async pageList() {
      this.loading = true;
      try {
        let res = await this.$ajax.get(
          `${this.frontUrl}/api/saleGoods/getList`,
          {
            params: {
              ...this.searchForm,
            },
          }
        );
        this.loading = false;

        if (res.code === 200) {
          console.log(res);
          this.tableList = res?.data.list;
          this.total = res?.data?.total;
          return false;
        }
        this.$message.error(res.message);
      } catch (error) {
        this.loading = false;
        console.log("出错了", error);
      }
    },
    handleAddBankInfo() {
      this.bankDialogVisibleTitle = "新增银行信息";
    },
    handleAddvoucherInfo(edit) {
      if (edit == "add") {
        // this.formData = cleanParams(this.formData);
      }
      this.bankDialogVisible = true;
    },
    async handleSubmitForm() {
      const validate = await this.$refs["bank-list"]
        .validate()
        .catch(() => false);
      console.log(validate, "提交校验", this.formData);
      if (!validate) return false;
      try {
        this.submitLoading = true;
        let sendData = this.formData.goodsList.map((item) => {
          return {
            companyName: this.formData.companyName,
            ...item,
          };
        });
        let res = await this.$ajax.post(`${this.frontUrl}/api/saleGoods/add`, {
          goodsList: sendData,
        });
        this.bankDialogVisible = false;
        this.submitLoading = false;
        this.pageList();
      } catch (error) {
        this.bankDialogVisible = false;
        this.submitLoading = false;
      }
    },
    handleCancel() {
      this.bankDialogVisible = false;
    },
    prints() {
      // var prints = document.getElementById(".single-info");
      // prints.title = "打印的标题";
    },
    handleAddRow() {
      this.formData.goodsList.push({
        name: "",
        num: "",
        unit: "",
        price: "",
        totalPrice: "",
        saleDate: format(new Date(), "yyyy-MM-dd"),
      });
    },
    handleDelete(index) {
      this.formData.goodsList.splice(index, 1);
    },
    getSummaries(param) {
      const { columns, data } = param;
      console.log(columns, data, 66666666666);
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "总价";
          return;
        }
        if (index === 4) {
          // sums[index] = "总价";
          sums[index] = data.reduce((prev, curr) => {
            return prev + curr.goodsNum * curr.goodsPrice;
          }, 0);
          // console.log(data, 999999999999,  sums[index] );
          // if (!values.every((value) => isNaN(value))) {
          //   sums[index] = values.reduce((prev, curr) => {
          //     const value = Number(curr);
          //     if (!isNaN(value)) {
          //       return prev + curr;
          //     } else {
          //       return prev;
          //     }
          //   }, 0);
          //   sums[index] += " 元";
          // } else {
          //   sums[index] = "N/A";
          // }
          return sums[index];
        }
      });

      return sums;
    },

    async getPublic() {
      let res1 = this.$ajax.get(`${this.frontUrl}/api/companys/getList`);
      let res2 = this.$ajax.get(`${this.frontUrl}/api/goods/getList`);
      let res = await Promise.allSettled([res1, res2]);
      console.log(res);
      this.companyOptions = res[0]?.value?.data?.list;
      this.goodsOptions = res[1]?.value?.data?.list;
    },
  },
  created() {
    // console.log(this.formData);
    this.getPublic();
    this.pageList();
  },
};
</script>

<style scoped lang="scss">
// @import "../../styles/fms.scss";
.bank-list {
  .h3-title {
    padding: 16px 0;
    font-size: 16px;
    color: #242833;
  }
  .header-operate-area {
    padding-bottom: 16px;
    .add-btn {
      // margin-right: 6px;
    }
  }
  .dialog-footer {
    padding: 12px 0;
  }
  .add-data {
    display: none;
  }
}
</style>
