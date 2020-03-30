import { MDBDataTable } from 'mdbreact';
import { fatalityRate } from '../../utils';


const DataTableComponent = ({ options, latest }) => {

  // DESC asc
  const columns = [
    {
      label: 'Country', field: 'country', sort: 'asc',
    },
    {
      label: 'Confirmed', field: 'confirmed', sort: 'asc', width: 150, attributes: {
        "className": "has-background-info"
      }
    },
    {
      label: 'Deaths', field: 'deaths', sort: 'asc', width: 150, attributes: {
        "className": "has-background-danger"
      }
    },
    {
      label: 'Recovered', field: 'recovered', sort: 'asc', width: 150, attributes: {
        "className": "has-background-success"
      }
    },
    {
      label: 'Fatality Rate', field: 'fatalityRate', sort: 'asc', width: 150, attributes: {
        "className": "has-background-waring",
        "data-tooltip": "Fatility rate"
      }
    },
  ];

  const rows = latest.map(({ countryregion: country, confirmed, deaths, recovered }) =>
    ({
      country,
      confirmed,
      deaths,
      recovered,
      fatalityRate: fatalityRate(deaths, confirmed)
    }))


  return (
    <MDBDataTable
      striped
      bordered
      hover
      barReverse
      btn
      fixed
      scrollX
      searching
      striped
      entries={ 100 }
      order={ ['confirmed', 'desc'] }
      tbodyColor="has-background-white has-text-black"
      data={ { columns, rows } } />
  );
}

export default DataTableComponent