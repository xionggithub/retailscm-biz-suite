import React from 'react'
import { Icon,Divider } from 'antd'

import { Link } from 'dva/router'
import moment from 'moment'
import ImagePreview from '../../components/ImagePreview'
import appLocaleName from '../../common/Locale.tool'
import BaseTool from '../../common/Base.tool'
import GlobalComponents from '../../custcomponents'
import DescriptionList from '../../components/DescriptionList'
const { Description } = DescriptionList
const {
	defaultRenderReferenceCell,
	defaultRenderBooleanCell,
	defaultRenderMoneyCell,
	defaultRenderDateTimeCell,
	defaultRenderImageCell,
	defaultRenderDateCell,
	defaultRenderIdentifier,
	defaultRenderTextCell,
} = BaseTool

const renderTextCell=defaultRenderTextCell
const renderIdentifier=defaultRenderIdentifier
const renderDateCell=defaultRenderDateCell
const renderDateTimeCell=defaultRenderDateTimeCell
const renderImageCell=defaultRenderImageCell
const renderMoneyCell=defaultRenderMoneyCell
const renderBooleanCell=defaultRenderBooleanCell
const renderReferenceCell=defaultRenderReferenceCell


const menuData = {menuName:"双链小超全国运营中心", menuFor: "retailStoreCountryCenter",
  		subItems: [
  {name: 'catalogList', displayName:'目录', icon:'at',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false, viewGroup: '产品管理'},
  {name: 'retailStoreProvinceCenterList', displayName:'双链小超省中心', icon:'store',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false, viewGroup: '组织机构'},
  {name: 'retailStoreList', displayName:'双链小超', icon:'store',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false, viewGroup: '加盟管理'},
  {name: 'retailStoreMemberList', displayName:'生超会员', icon:'store',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false, viewGroup: '会员管理'},
  {name: 'goodsSupplierList', displayName:'产品供应商', icon:'500px',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false, viewGroup: '供应管理'},
  {name: 'supplyOrderList', displayName:'供应订单', icon:'first-order',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false, viewGroup: '供应管理'},
  {name: 'retailStoreOrderList', displayName:'生超的订单', icon:'store',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false, viewGroup: '销售管理'},
  {name: 'warehouseList', displayName:'仓库', icon:'warehouse',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false, viewGroup: '仓配运一体化'},
  {name: 'transportFleetList', displayName:'运输车队', icon:'500px',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false, viewGroup: '仓配运一体化'},
  {name: 'accountSetList', displayName:'账套', icon:'headset',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false, viewGroup: '财务管理'},
  {name: 'levelOneDepartmentList', displayName:'一级部门', icon:'bone',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false, viewGroup: '组织机构'},
  {name: 'employeeList', displayName:'员工', icon:'500px',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false, viewGroup: '人力资源'},
  {name: 'instructorList', displayName:'讲师', icon:'500px',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false, viewGroup: '人力资源'},
  {name: 'companyTrainingList', displayName:'公司培训', icon:'om',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false, viewGroup: '人力资源'},
  
  		],
}


const settingMenuData = {menuName:"双链小超全国运营中心", menuFor: "retailStoreCountryCenter",
  		subItems: [
  {name: 'skillTypeList', displayName:'技能类型', icon:'500px',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false, viewGroup: '人力资源'},
  {name: 'responsibilityTypeList', displayName:'责任类型', icon:'500px',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false, viewGroup: '人力资源'},
  {name: 'terminationReasonList', displayName:'雇佣终止的原因', icon:'at',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false, viewGroup: '人力资源'},
  {name: 'terminationTypeList', displayName:'雇佣终止类型', icon:'at',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false, viewGroup: '人力资源'},
  {name: 'occupationTypeList', displayName:'职位类型', icon:'at',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false, viewGroup: '人力资源'},
  {name: 'leaveTypeList', displayName:'请假类型', icon:'500px',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false, viewGroup: '人力资源'},
  {name: 'salaryGradeList', displayName:'工资等级', icon:'ad',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false, viewGroup: '人力资源'},
  {name: 'interviewTypeList', displayName:'面试类型', icon:'500px',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false, viewGroup: '人力资源'},
  {name: 'trainingCourseTypeList', displayName:'培训课程类型', icon:'discourse',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false, viewGroup: '人力资源'},
  {name: 'publicHolidayList', displayName:'公共假日', icon:'galactic-republic',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false, viewGroup: '人力资源'},
  
  		],
}

const fieldLabels = {
  id: '序号',
  name: '名称',
  serviceNumber: '服务号码',
  founded: '成立',
  webSite: '网站',
  address: '地址',
  operatedBy: '由',
  legalRepresentative: '法定代表人',
  description: '描述',

}

const displayColumns = [
  { title: fieldLabels.id, debugtype: 'string', dataIndex: 'id', width: '8', render: (text, record)=>renderTextCell(text,record,'retailStoreCountryCenter') , sorter: true },
  { title: fieldLabels.name, debugtype: 'string', dataIndex: 'name', width: '15',render: (text, record)=>renderTextCell(text,record)},
  { title: fieldLabels.serviceNumber, debugtype: 'string', dataIndex: 'serviceNumber', width: '13',render: (text, record)=>renderTextCell(text,record)},
  { title: fieldLabels.founded, dataIndex: 'founded', render: (text, record) =>renderDateCell(text,record), sorter: true },
  { title: fieldLabels.webSite, debugtype: 'string_url', dataIndex: 'webSite', width: '36',render: (text, record)=>renderTextCell(text,record)},
  { title: fieldLabels.address, debugtype: 'string', dataIndex: 'address', width: '18',render: (text, record)=>renderTextCell(text,record)},
  { title: fieldLabels.operatedBy, debugtype: 'string', dataIndex: 'operatedBy', width: '8',render: (text, record)=>renderTextCell(text,record)},
  { title: fieldLabels.legalRepresentative, debugtype: 'string', dataIndex: 'legalRepresentative', width: '7',render: (text, record)=>renderTextCell(text,record)},
  { title: fieldLabels.description, debugtype: 'string', dataIndex: 'description', width: '17',render: (text, record)=>renderTextCell(text,record)},

]
// refernce to https://ant.design/components/list-cn/
const renderItemOfList=(retailStoreCountryCenter,targetComponent)=>{

  const userContext = null
  return (
    <div key={retailStoreCountryCenter.id}>
	
      <DescriptionList  key={retailStoreCountryCenter.id} size="small" col="4">
        <Description term="序号">{retailStoreCountryCenter.id}</Description> 
        <Description term="名称">{retailStoreCountryCenter.name}</Description> 
        <Description term="服务号码">{retailStoreCountryCenter.serviceNumber}</Description> 
        <Description term="成立"><div>{ moment(retailStoreCountryCenter.founded).format('YYYY-MM-DD')}</div></Description> 
        <Description term="网站">{retailStoreCountryCenter.webSite}</Description> 
        <Description term="地址">{retailStoreCountryCenter.address}</Description> 
        <Description term="由">{retailStoreCountryCenter.operatedBy}</Description> 
        <Description term="法定代表人">{retailStoreCountryCenter.legalRepresentative}</Description> 
        <Description term="描述">{retailStoreCountryCenter.description}</Description> 
	
        
      </DescriptionList>
      <Divider style={{ height: '2px' }} />
    </div>
	)

}
	
const packFormValuesToObject = ( formValuesToPack )=>{
	const {name, serviceNumber, founded, webSite, address, operatedBy, legalRepresentative, description} = formValuesToPack

	const data = {name, serviceNumber, founded, webSite, address, operatedBy, legalRepresentative, description}
	return data
}
const unpackObjectToFormValues = ( objectToUnpack )=>{
	const {name, serviceNumber, founded, webSite, address, operatedBy, legalRepresentative, description} = objectToUnpack

	const data = {name, serviceNumber, founded, webSite, address, operatedBy, legalRepresentative, description}
	return data
}

const RetailStoreCountryCenterBase={menuData,displayColumns,fieldLabels,renderItemOfList,packFormValuesToObject,unpackObjectToFormValues}
export default RetailStoreCountryCenterBase



