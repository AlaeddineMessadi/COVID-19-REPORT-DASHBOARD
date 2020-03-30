// import { MDBDataTable } from 'mdbreact';
import { fatalityRate } from '../../utils';
import MaterialTable from 'material-table';
import { useState } from 'react';

// const filteredItems = rows.filter(item => item.country && item.country.toLowerCase().includes(filterText.toLowerCase()));


const DataTableComponent = ({ options, latest }) => {
  // DESC asc
  const columns = [
    { title: 'Country', field: 'country', options: { filter: true, sort: true, } },
    { title: 'Confirmed', field: 'confirmed', options: { filter: true, sort: false, }, },
    { title: 'Deaths', field: 'deaths', options: { filter: true, sort: false, }, },
    { title: 'Recovered', field: 'recovered', options: { filter: true, sort: false, }, },
    { title: 'Fatality Rate', field: 'fatalityRate', options: { filter: true, sort: false, }, },
  ];

  const data = latest.map(({ countryregion: country, confirmed, deaths, recovered }) =>
    ({
      country,
      confirmed,
      deaths,
      recovered,
      fatalityRate: fatalityRate(deaths, confirmed)
    }))

  return (
    <MaterialTable
      columns={ columns }
      data={ data }
      options={ { rowsPerPage: 50 } }
    />
  );

  //   return (
  //     <MDBDataTable
  //       striped
  //       bordered
  //       hover
  //       barReverse
  //       btn
  //       fixed
  //       scrollX
  //       searching
  //       striped
  //       entries={ 100 }
  //       order={ ['confirmed', 'desc'] }
  //       tbodyColor="has-background-white has-text-black"
  //       data={ { columns, rows } } />
  //   );
}

export default DataTableComponent