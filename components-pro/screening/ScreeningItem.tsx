import React from 'react';
import { observer } from 'mobx-react';
import Row from 'choerodon-ui/lib/row';
import Icon from 'choerodon-ui/lib/icon';
import warning from 'choerodon-ui/lib/_util/warning';
import {observable, runInAction, action, computed} from 'mobx';
import isNumber from 'lodash/isNumber';
import defaultTo from 'lodash/defaultTo';
import { noop, omit } from 'lodash';
import DataSetComponent, { DataSetComponentProps } from '../data-set/DataSetComponent';
import ScreeningOption from './ScreeningOption';
import DataSet from '../data-set/DataSet';
import Field from '../data-set/Field';
import Record from '../data-set/Record';
import normalizeOptions from '../option/normalizeOptions';
import autobind from '../_util/autobind';
import isEmpty from '../_util/isEmpty';


const disabledField = '__disabled';

function defaultOnOption({ record }) {
  return {
    disabled: record.get(disabledField),
  };
}


export interface ScreeningItemProps extends DataSetComponentProps {
  field?: Field,
  textField: string;
  valueField: string;
  multiple: boolean;
  dataSet: DataSet;
  name: string;
}

@observer
export default class Screening extends DataSetComponent<ScreeningItemProps> {

  static displayName = 'Screening';

  @observable iconExpanded: boolean;

  @observable observableProps: any;

  constructor(props, context) {
    super(props, context);
    runInAction(() => {
      this.iconExpanded = false ;
    });
  }

  /**
   * return the record: dataIndex record, current, undefined
   */
  @computed
  get record(): Record | undefined {
    const { record, dataSet, dataIndex } = this.observableProps;
    if (record) {
      return record;
    }
    if (dataSet) {
      if (isNumber(dataIndex)) {
        return dataSet.get(dataIndex);
      }
      return dataSet.current;
    }
    return undefined;
  }

  @computed
  get value(): any | undefined {
    return this.observableProps.value;
  }

  set value(value: any | undefined) {
    runInAction(() => {
      this.observableProps.value = value;
    });
  }

  @computed
  get name(): string | undefined {
    console.log(this.observableProps);
    return this.observableProps.name;
  }

  /**
   * get field message: recordField,dsField,undefined
   */
  @computed
  get field(): Field | undefined {
    const { record, dataSet, name, observableProps } = this;
    const { displayName } = this.constructor as any;
    if (displayName !== 'Output' && !name) {
      warning(!observableProps.dataSet, `${displayName} with binding DataSet need property name.`);
      warning(!observableProps.record, `${displayName} with binding Record need property name.`);
    }
    if (name) {
      const recordField = record ? record.getField(name) : undefined;
      const dsField = dataSet ? dataSet.getField(name) : undefined;
      if (recordField) {
        return recordField;
      }
      return dsField;
    }
    return undefined;
  }

  getProp(propName: string) {
    const { field } = this;
    return defaultTo(field && field.get(propName), this.props[propName]);
  }

  @autobind
  handleChange(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  @computed
  get options(): DataSet {
    const {
      field,
      textField,
      valueField,
      multiple,
      observableProps: { children, options },
    } = this;
    return (
      options ||
      (field && field.options) ||
      normalizeOptions({ textField, valueField, disabledField, multiple, children })
    );
  }

  @computed
  get multiple(): boolean {
    return !!this.getProp('multiple');
  }

  @computed
  get textField(): string {
    return this.getProp('textField') || 'meaning';
  }

  @computed
  get valueField(): string {
    return this.getProp('valueField') || 'value';
  }

  static defaultProps = {
    suffixCls: 'screening',
  };

  @action
  handleExpanedClick = () => {
    this.iconExpanded = !this.iconExpanded
  }

  getScreeningOption = () => {
    const {
      options,
      textField,
      valueField,
    } = this;
    if(!options){
      return null;
    }
    const { data } = options;

    if(!isEmpty(data)){
      return data.map((record) => {
        const value = record.get(valueField);
        const text = record.get(textField);
        return (
          <ScreeningOption value={value} span={4} key={`${record.id}`}> 
              {text}
          </ScreeningOption>
        )
      })
    }
    return null
  }

  getObservableProps(props, context) {
    console.log(1111111);
    return {
      name: props.name,
      record: 'record' in props ? props.record : context.record,
      dataSet: 'dataSet' in props ? props.dataSet : context.dataSet,
      dataIndex: defaultTo(props.dataIndex, context.dataIndex),
      value: this.observableProps || 'value' in props ? props.value : props.defaultValue,
    };
  }

  getOtherProps() {
    const otherProps = omit(super.getOtherProps(), [
      'record',
      'defaultValue',
      'dataIndex',
      'onEnterDown',
      'onClear',
      'readOnly',
      'renderer',
      'pristine',
      'trim',
    ]);
    otherProps.onChange = !this.isDisabled() ? this.handleChange : noop;
    return otherProps;
  }

  render() {
    const { dataSet, ...otherProps } = this.props;
    const { iconExpanded, prefixCls } = this;
    const props: SpinProps = {};

    const expandedButton = () => {
      if(iconExpanded === true ){
        return (
          <>
            <span>更多</span>
            <Icon type="expand_less" />
          </>
        )
      }
      return (
        <>
         <span>收起</span>
         <Icon type="expand_more" />
        </>
      )
    }
    
    return (
      <div {...this.getMergedProps()}> 
        <div className={`${prefixCls}-title`}>分类</div>
        <div className={`${prefixCls}-content`}>
          <div className={`${prefixCls}-scroll`}>
            <Row>
               {this.getScreeningOption()}
            </Row>
          </div>
        </div>
        <div className={`${prefixCls}-operation`} onClick={this.handleExpanedClick}>
                {expandedButton()}
        </div>
      </div>
    );
  }
}
