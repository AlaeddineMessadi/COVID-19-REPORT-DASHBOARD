import dynamic from 'next/dynamic';
import SectionTitle from '../components/sectionTitle';
import ApiManager from '../utils/apiManager';
import { convertISODate } from '../utils';
import { Fragment } from 'react';



const DataTablePage = ({ lastUpdate, latest }) => {
  const DataTable = dynamic(async () => {
    const Component = await import('../components/charts/dataTable');
    return Component;
  }, { ssr: false })

  return (
    <Fragment>
      <div className="hero is-medium is-primary">
        <div className="hero-body">
          <SectionTitle
            title="DataTable"
            subtitle={ lastUpdate ? `Last Update: ${convertISODate(lastUpdate)}` : '' } />
        </div>
      </div>
      <div className="section">
        <div className="container">
          <DataTable
            latest={ latest } />
        </div>
      </div>
    </Fragment>
  );
}


DataTablePage.getInitialProps = async (ctx) => {
  try {
    let { data: latest, lastUpdate } = await ApiManager.readLatest(null, null, true);

    return { lastUpdate, latest }
  } catch (error) {
    console.error(error);
    return { error: error }
  }
}

export default DataTablePage