import React, { useState } from "react";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { TAcademicSemester, TQueryParams } from "../../../types";

export type TTableData = Pick<
  TAcademicSemester,
  'name' | 'year' | 'startMonth' | 'endMonth'
>;

const AcademicSemester = () => {
  const [params, setParams] = useState<TQueryParams[] | undefined>(undefined);
  const {
    data: semesterData,
    isLoading,
    isFetching,
  } = useGetAllSemestersQuery(params);

console.log(semesterData)
  const tableData = semesterData?.data?.map(({_id,name,startMonth,endMonth,year})=>({key:_id,name,startMonth,endMonth,year}))
  
  
  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "name",
      filters: [
        {
          text: 'Autumn',
          value: 'Autumn',
        },
        {
          text: 'Summer',
          value: 'Summer',
        },
        {
          text: 'Fall',
          value: 'Fall',
        },
      
      ],
      filterMode: 'menu',
      filterSearch: true,
      onFilter: (value, record) => record.name.includes(value as string),
      width: '30%',
     
    },
    {
      title: "Year",
      dataIndex: "year",
      sorter: (a, b) => Number(a.year) -Number(b.year),
    },
    {
      title: "Start Month",
      dataIndex: "startMonth",
    },
    {
      title: "End Month",
      dataIndex: "endMonth",
    },
    
  ];


  const onChange: TableProps<TTableData>['onChange'] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === 'filter') {
      const queryParams : TQueryParams[] = [];

      filters.name?.forEach((item) =>
        queryParams.push({ name: 'name', value: item })
      );

      // filters.year?.forEach((item) =>
      //   queryParams.push({ name: 'year', value: item })
      // );

      setParams(queryParams);
    }
  };

  return (
    <Table<TTableData>  loading={isFetching} columns={columns} dataSource={tableData} onChange={onChange} />
  );
};

export default AcademicSemester;
