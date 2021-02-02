import { Lang } from './enum';
import { Locale } from './locale';

const locale: Locale = {
  lang: Lang.zh_CN,
  Table: {
    show_cached_seletion: '显示所有已选记录',
    hide_cached_seletion: '隐藏所有已选记录',
    edit_button: '编辑',
    create_button: '新增',
    save_button: '保存',
    cancel_button: '取消',
    delete_button: '删除',
    remove_button: '移除',
    reset_button: '重置',
    query_button: '查询',
    expand_button: '展开',
    collapse_button: '合并',
    export_button: '导出',
    more_button: '其他操作',
    advanced_search: '高级搜索',
    dirty_info: '显示条件已更改',
    restore: '还原',
    empty_data: '暂无数据',
    choose_export_columns: '请选择要导出的列',
    column_name: '列名',
    filter_bar_placeholder: '过滤表',
    advanced_query: '高级查询',
    advanced_query_conditions: '高级查询条件',
    more: '更多',
    max_export: '最大导出数量',
    enter_text_filter: '输入文字以进行过滤',
    clear_filter: '清除筛选项',
    save_filter: '保存筛选',
    collapse: '收起',
    predefined_fields: '预定义字段',
    add_filter: '添加筛选',
    enter_search_content: '请输入搜索内容',
    save_as: '另存为',
    fast_filter: '快速筛选',
    rename: '重命名',
    set_default: '设为默认',
    cancel_default: '取消默认',
    filter_rename: '筛选重命名',
    save_filter_as: '筛选另存为',
    whether_delete_filter: '是否删除筛选记录',
    filter_name: '筛选名称',
    please_enter: '请输入',
  },
  Pagination: {
    page: '页',
    jump_to: '跳至',
    jump_to_confirm: '确定',
    records_per_page: '每页行数：',
  },
  Upload: {
    file_selection: '选择文件',
    click_to_upload: '点击上传',
    upload_success: '上传成功',
    upload_failure: '上传失败',
    no_file: '没有文件',
    been_uploaded: '文件已上传',
    upload_path_unset: '未设置上传路径',
    not_acceptable_prompt: '含有上传类型不匹配的文件，期待：',
    file_list_max_length: '文件数量超过最大限制',
  },
  Modal: {
    ok: '确定',
    cancel: '取消',
  },
  DataSet: {
    unsaved_data_confirm: '有未保存的数据，是否继续？',
    invalid_query_dataset: '查询条件数据集校验不通过',
    delete_selected_row_confirm: '确认删除选中行？',
    delete_all_row_confirm: '确认删除所有行？',
    query_failure: '查询失败',
    submit_success: '提交成功',
    submit_failure: '提交失败',
    cannot_add_record_when_head_no_current: '头未选中记录，不能新建行记录',
  },
  DatePicker: {
    value_missing_no_label: '请选择日期。',
    value_missing: '请选择{label}。',
    type_mismatch: '请输入有效的日期。',
    ok: '确定',
    today: '今天',
    now: '此刻',
    this_week: '本周',
  },
  EmailField: {
    value_missing_no_label: '请输入邮箱地址',
    value_missing: '请输入{label}。',
    type_mismatch: '请输入有效的邮箱地址',
  },
  IntlField: {
    modal_title: '输入多语言信息',
  },
  NumberField: {
    value_missing_no_label: '请输入数字',
    value_missing: '请输入{label}。',
  },
  Radio: {
    value_missing_no_label: '请选择。',
    value_missing: '请选择{label}。',
  },
  SelectBox: {
    value_missing_no_label: '请选择。',
    value_missing: '请选择{label}。',
  },
  Select: {
    value_missing_no_label: '请选择。',
    value_missing: '请选择{label}。',
    no_matching_results: '无匹配结果。',
    select_all: '全选',
    select_re: '反选',
    unselect_all: '无',
    common_item: '常用项',
  },
  Lov: {
    choose: '请选择',
  },
  Transfer: {
    items: '项',
  },
  UrlField: {
    value_missing_no_label: '请输入网址。',
    value_missing: '请输入{label}。',
    type_mismatch: '请输入有效的网址。',
  },
  ColorPicker: {
    value_missing_no_label: '请选择颜色',
    value_missing: '请选择{label}。',
    type_mismatch: '请选择有效的颜色。',
  },
  Validator: {
    bad_input: '请输入一个数字。',
    pattern_mismatch: '请输入有效的值。',
    range_overflow: '{label}必须小于或等于{max}。',
    range_underflow: '{label}必须大于或等于{min}。',
    step_mismatch: '请输入有效值。最接近的有效值为{0}。',
    step_mismatch_between: '请输入有效值。两个最接近的有效值分别为{0}和{1}。',
    too_long: '请将该内容减少到{maxLength}个或更少字符（目前您使用了{length}个字符）。',
    too_short: '请将该内容增加到{minLength}个或更多字符（目前您使用了{length}个字符）。',
    type_mismatch: '请输入与类型匹配的有效值。',
    value_missing_no_label: '请填写此字段。',
    value_missing: '请输入{label}。',
    unique: '该字段值重复，请重新填写。',
    unknown: '未知错误。',
  },
  Icon: {
    icons: '图标',
    whatsNew: '新增',
    direction: '方向性',
    suggestion: '提示建议性',
    edit: '编辑类',
    data: '数据类',
    other: '网站通用',
    series: '套系类',
  },
  Cascader: {
    please_select:'请选择',
    value_missing_no_label: '请选择。',
    value_missing: '请选择{label}。',
    select_all: '全选',
    unselect_all: '无',
  },
  Screening:{
    selected:'已选',
    pack_up:'收起',
    more:'更多',
    multi_select:'多选',
    confirm:'确认',
    cancel:'取消',
  },
};

export default locale;
