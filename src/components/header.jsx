export const Header = (props) => {
  return (
      <div className='flex-box'>
      <img className='description-logo' src={"img/PATIO-nobg.png"} alt="Patio logo"/>
      <div className='description-content'>
              <h1>
                  {props.data ? props.data.title : 'Loading'}
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <form id={'contactForm'} data-sb-from-api-token={"TOKEN"}><div className="col">
                  <input className="form-control" id="email" type="email"
                         placeholder="Enter email address..." aria-label="Enter email address..."
                         data-sb-validations="required,email"/>
                </div>
                <div className="col-auto">
                  <button className="btn btn-custom btn-lg disabled" id="submitButton" type="submit">Notify Me!</button>
                </div></form>
          </div>
      </div>
  )
}
