import { useQuery } from '@apollo/client'
import {  CharacterDetails }  from '../common/interface/characters.interface'
import { GET_CHARACTER_DETAILS } from '../common/queries/characters'
import moment from 'moment'

const Details = (props : {
        id: number;
        isShow: boolean;
        onCloseModal: (isShow: boolean) => void;
      } ) => {
    
    const { loading, error, data  } = useQuery<CharacterDetails>(GET_CHARACTER_DETAILS, { variables: { id: props.id } });
    
    const showHideClassName: string = props.isShow ? "modal display-block" : "modal display-none";
    return <div className={showHideClassName} >
          
            <div className="container modal-content">
              <div className='row'>
                <div className='col-md-5 offset-md-5'>
                  <h2>Characters Details</h2>
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
                  <div className='col-md-4'>
                    <div className="card">
                      <img src={data.character.image} alt={data.character.name} />
                      <h3>{data.character.name}</h3>
                      <ul className='list'>
                        <li className='list-item pd-7'>
                          <span className="label">Type:</span>
                          {data.character.type}
                        </li>
                        <li className='list-item pd-7'>
                          <span className="label">Species:</span>
                          {data.character.species}
                        </li>
                        <li className='list-item pd-7'>
                          <span className="label">Status:</span>
                          {data.character.status}
                        </li>
                        <li className='list-item pd-7'>
                          <span className="label">Gender:</span>
                          {data.character.gender}
                        </li>
                        <li className='list-item pd-7'>
                          <span className="label">Created:</span>
                          {moment(data.character.created).format("DD.MM.YYYY")}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='col-md-8'>
                    <div className='row'> 
                      <div className='col-md-6'>
                        <h3>Location Details</h3>
                          <ul className='list'>
                            <li className='list-item pd-7'>
                              <span className="label">Name:</span>
                              {data.character.location.name}
                            </li>
                            <li className='list-item pd-7'>
                              <span className="label">Type:</span>
                              {data.character.location.type}
                            </li>
                            <li className='list-item pd-7'>
                              <span className="label">Dimension:</span>
                              {data.character.location.dimension}
                            </li>
                            <li className='list-item pd-7'>
                              <span className="label">Created:</span>
                              {moment(data.character.location.created).format("DD.MM.YYYY")}
                            </li>
                          </ul>
                      </div>
                      <div className='col-md-5'>
                      <h3>Origin Details</h3>
                        <ul className='list'>
                            <li className='list-item pd-7'>
                              <span className="label">Name:</span>
                              {data.character.origin.name}
                            </li>
                            <li className='list-item pd-7'>
                              <span className="label">Type:</span>
                              {data.character.origin.type}
                            </li>
                            <li className='list-item pd-7'>
                              <span className="label">Dimension:</span>
                              {data.character.origin.dimension}
                            </li>
                            <li className='list-item pd-7'>
                              <span className="label">Created:</span>
                              {moment(data.character.origin.created).format("DD.MM.YYYY")}
                            </li>
                          </ul>
                        
                      </div>
                    </div>
                      <h3>Episodes</h3>
                      <div className='overflow-scroll'>
                        <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Air Date</th>
                                            <th scope="col">episode</th>
                                            <th scope="col">Creation Date</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data && data.character.episode.map(( episode ) => (
                                        <tr key={episode.id}>
                                            <td>{episode.id}</td>
                                            <td>{episode.name}</td>
                                            <td>{episode.air_date}</td>
                                            <td>{episode.episode}</td>
                                            <td>{moment(episode.created).format("DD.MM.YYYY")}</td>
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