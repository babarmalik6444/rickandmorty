import { useQuery } from '@apollo/client'
import {  ExpisodeDetails }  from '../common/interface/episodes.interface'
import { GET_EPISODE_DETAILS } from '../common/queries/episodes'
import moment from 'moment'


const Details = (props : {
        id: number;
        isShow: boolean;
        onCloseModal: (isShow: boolean) => void;
      } ) => {
    
    const { loading, error, data  } = useQuery<ExpisodeDetails>(GET_EPISODE_DETAILS, { variables: { id: props.id } });
    
    const showHideClassName: string = props.isShow ? "modal display-block" : "modal display-none";
    return <div className={showHideClassName} >
          
            <div className="container modal-content">
              <div className='row'>
                <div className='col-md-5 offset-md-5'>
                  <h2>Expisode Details</h2>
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
                              {data.episode.name}
                            </li>
                            <li className='list-item pd-7'>
                              <span className="label">Type:</span>
                              {data.episode.air_date}
                            </li>
                            <li className='list-item pd-7'>
                              <span className="label">Episode:</span>
                              {data.episode.episode}
                            </li>
                            <li className='list-item pd-7'>
                              <span className="label">Created:</span>
                              {moment(data.episode.created).format("DD.MM.YYYY")}
                            </li>
                          </ul>
                      </div>
                      <div className='col-md-10 offset-md-1'>
                        <h3>Characters</h3>
                        <div className='overflow-scroll'>
                              <table className="table caption-top">
                                      <thead>
                                          <tr>
                                              <th scope="col">#</th>
                                              <th scope="col">Image</th>
                                              <th scope="col">Name</th>
                                              <th scope="col">Status</th>
                                              <th scope="col">Species</th>
                                              <th scope="col">Type</th>
                                              <th scope="col">Gender</th>
                                              <th scope="col">Created</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          {data && data.episode.characters.map(( char ) => (
                                          <tr key={char.id}>
                                              <td>{char.id}</td>
                                              <td><img height={50} width={50} className='img-responsive' src={char.image} /></td>
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