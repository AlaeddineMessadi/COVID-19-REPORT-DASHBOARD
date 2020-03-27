import dynamic from 'next/dynamic';
import SectionTitle from '../components/sectionTitle';
import ApiManager from '../utils/apiManager';
import { convertISODate } from '../utils';
import { Fragment, useState, useEffect } from 'react';



const DataTablePage = ({ lastUpdate, latest }) => {
  const [loading, setLoading] = useState();


  const DataTable = dynamic(async () => {
    const Component = await import('../components/charts/dataTable');
    return Component;
  }, { ssr: false })

  useEffect

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
    let { data: briefTimeseries } = await ApiManager.readBriefTimeseries(null, null, true);
    let { data: latest, lastUpdate } = await ApiManager.readLatest(null, null, true);


    return { lastUpdate, latest, briefTimeseries }
  } catch (error) {
    console.error(error);
    return { error: error }
  }
}

export default DataTablePage