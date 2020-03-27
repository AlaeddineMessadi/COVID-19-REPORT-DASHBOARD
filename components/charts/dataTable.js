import { MDBDataTable } from 'mdbreact';


const DataTableComponent = ({ options, latest }) => {

  // DESC asc
  const columns = [
    { label: 'Country', field: 'country', width: 200 },
    { label: 'Confirmed', field: 'confirmed', width: 100 },
    { label: 'Deaths', field: 'deaths', sort: 'asc', width: 100 },
    { label: 'Recovered', field: 'recovered', width: 100 },
  ];

  const rows = latest.map(({ countryregion: country, confirmed, deaths, recovered }) => ({ country, confirmed, deaths, recovered }))


  return (
    <MDBDataTable
      striped
      bordered
      hover
      barReverse
      btn
      fixed
      searching
      entries="100"
      order={ ['confirmed', 'desc'] }
      data={ { columns, rows } } />
  );
}

export default DataTableComponent