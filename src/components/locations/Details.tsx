import { useQuery } from '@apollo/client'
import {  LocationDetails }  from '../common/interface/locations.interface'
import { GET_LOCATION_DETAILS } from '../common/queries/locations'
import moment from 'moment'


const Details = (props : {
        id: number;
        isShow: boolean;
        onCloseModal: (isShow: boolean) => void;
      } ) => {
    
    const { loading, error, data  } = useQuery<LocationDetails>(GET_LOCATION_DETAILS, { variables: { id: props.id } });
    
    const showHideClassName: string = props.isShow ? "modal display-block" : "modal display-none";
    return <div className={showHideClassName} >
          
            <div className="container modal-content">
              <div className='row'>
                <div className='col-md-5 offset-md-5'>
                  <h2>Locations Details</h2>
                </div>
                <div className='col-md-1 offer-md-1'><span className="close" onClick={() => props.onCloseModal(false)}>&times;</span>
              </div>
              </div>
              {loading && 
                <p>Lodading...</p>
              }
              {error && 
                <p>Error...</p>
              }
              {data && 
                <div className='row'>
                      <div className='col-md-10 offset-md-1'>
                          <ul className='list'>
                            <li className='list-item pd-7'>
                              <span className="label">Name:</span>
                              {data.location.name}
                            </li>
                            <li className='list-item pd-7'>
                              <span className="label">Type:</span>
                              {data.location.type}
                            </li>
                            <li className='list-item pd-7'>
                              <span className="label">Dimension:</span>
                              {data.location.dimension}
                            </li>
                            <li className='list-item pd-7'>
                              <span className="label">Created:</span>
                              {moment(data.location.created).format("DD.MM.YYYY")}
                            </li>
                          </ul>
                      </div>
                      <div className='col-md-10 offset-md-1'>
                        <h3>Residents</h3>
                        <div className='overflow-scroll'>
                              <table className="table caption-top">
                                      <thead>
                                          <tr>
                                              <th scope="col">#</th>
                                              <th scope="col">Name</th>
                                              <th scope="col">Status</th>
                                              <th scope="col">Species</th>
                                              <th scope="col">Type</th>
                                              <th scope="col">Gender</th>
                                              <th scope="col">Created</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          {data && data.location.residents.map(( char ) => (
                                          <tr key={char.id}>
                                              <td>{char.id}</td>
                                              <td>{char.name}</td>
                                              <td>{char.status}</td>
                                              <td>{char.species}</td>
                                              <td>{char.type}</td>
                                              <td>{char.gender}</td>
                                              <td>{moment(char.created).format("DD.MM.YYYY")}</td>
                                          </tr>
                                          ))}
                                      </tbody>
                              </table>
                          </div>
                      </div>
                </div>
              }
            </div>
          
          </div>
}

export default Details