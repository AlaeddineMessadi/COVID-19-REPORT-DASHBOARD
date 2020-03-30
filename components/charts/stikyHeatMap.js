import { HeatMap } from '@stickyboard/openlayers';


const StickyHeatMap = ({ pointList }) => {
  return <div className="grid-xl ">
    <HeatMap
      zoom={ 5 }
      minZoom={ 2 }
      maxZoom={ 8 }
      blur={ 30 }
      radius={ 30 }
      longitude={ 12 }
      latitude={ 43 }
      pointList={ pointList }
    />
  </div>
}

export default StickyHeatMap;