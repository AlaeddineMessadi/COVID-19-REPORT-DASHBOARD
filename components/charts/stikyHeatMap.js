import { HeatMap } from '@stickyboard/openlayers';


const StikyHeatMap = ({ pointList }) => {
  return <div className="grid-xl ">
    <HeatMap
      zoom={ 3 }
      minZoom={ 2 }
      maxZoom={ 17 }
      blur={ 40 }
      radius={ 30 }
      longitude={ 127.024792 }
      latitude={ 37.504296 }
      pointList={ pointList }
    />
  </div>
}

export default StikyHeatMap;