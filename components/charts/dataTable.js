// import { MDBDataTable } from 'mdbreact';
import { fatalityRate } from '../../utils';
import MaterialTable from 'material-table';
import { COLORS } from '../../utils/constants';

const DataTableComponent = ({ options, latest }) => {
  const columns = [
    {
      title: 'Country', field: 'country', headerStyle: { fontWeight: 600 }
    },
    {
      title: 'Confirmed', field: 'confirmed', options: { filter: true, sort: true, }, defaultSort: 'desc',
      headerStyle: { backgroundColor: COLORS.confirmed, fontWeight: 600 },
      cellStyle: { backgroundColor: COLORS.confirmedLight },
    },
    {
      title: 'Deaths', field: 'deaths', options: { filter: true, sort: false, },
      headerStyle: { backgroundColor: COLORS.deaths, fontWeight: 600 },
      cellStyle: { backgroundColor: COLORS.deathsLight },
    },
    {
      title: 'Recovered', field: 'recovered', options: { filter: true, sort: false, },
      headerStyle: { backgroundColor: COLORS.recovered, fontWeight: 600 },
      cellStyle: { backgroundColor: COLORS.recoveredLight },
    },
    {
      title: 'Fatality Rate', field: 'fatalityRate', options: { filter: true, sort: false, },
      headerStyle: { backgroundColor: COLORS.fatalityRate, fontWeight: 600 },
      cellStyle: { backgroundColor: COLORS.fatalityRateLight },
    },
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
      title="COVID-19 Cases by countries"
      columns={ columns }
      data={ data }
      options={ {
        pageSize: 20,
        loadingType: 'linear',
        sorting: true,
        searchFieldStyle: { color: '#fff' }
      } }
    />
  );
}

export default DataTableComponent