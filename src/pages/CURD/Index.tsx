import React, { useState } from 'react';
import { Table } from '@app/components/common/Table/Table';
import { Button } from '@app/components/common/buttons/Button/Button';
import { ColumnsType } from 'antd/es/table';
//import {  } from 'antd';
import { Pagination } from 'api/table.api';
import './index.css';
import { User } from './api/UserApi';
// import { GetUserListByPageSearch, User } from './api/UserApi';
//GetUserList,
const initialPagination: Pagination = {
  current: 1,
  pageSize: 5,
};

// const Search: GetUserListByPageSearch = {
//   id: 0,
// };

//const handleTableChange = () => {};

//const Delete=(user:User)=>

// onClick={() => {
//           DeleteUser(record.id);
//           //setTableData();
//         }}

const CRUDPage: React.FC = () => {
  const columns: ColumnsType<User> = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '用户名',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: '密码',
      dataIndex: 'pwd',
      key: 'pwd',
    },
    {
      title: 'Token',
      dataIndex: 'token',
      key: 'token',
    },
    {
      title: '操作',
      dataIndex: 'id',
      key: 'id',
      render: () => <Button type="default">删除</Button>,
    },
  ];
  //setTableData data: GetUserList(Search),
  const [tableData] = useState<{ data: User[]; pagination: Pagination; loading: boolean }>({
    data: [],
    pagination: initialPagination,
    loading: false,
  });
  return (
    <>
      <div className="table-content">
        <div className="table-actionbar">
          <Button severity="info">添加</Button>
          <Button severity="success">修改</Button>
          <Button severity="error">删除</Button>
        </div>
        <div className="table-searchbar">crud</div>
        <Table
          columns={columns}
          dataSource={tableData.data}
          pagination={tableData.pagination}
          loading={tableData.loading}
          bordered
        />
      </div>
    </>
  );
};
export default CRUDPage;
