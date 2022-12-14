import './ratingItemWithoutScore.scss';

export default function ratingItemWithoutScore(props) {
  return (
    <div className='ratingItemWithoutScore'>

        <div className='logo' >
            <svg preserveAspectRatio="xMidYMid meet" data-bbox="40.026 40.026 319.948 319.948" viewBox="40.026 40.026 319.948 319.948" height="40" width="40" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true">
                <g>
                    <path d="M200 40.026c-88.351 0-159.974 71.623-159.974 159.974S111.649 359.974 200 359.974c88.352 0 159.974-71.623 159.974-159.974S288.352 40.026 200 40.026zm17.786 228.68h-50.202l-.638-1.422.054-.117-12.914-28.099v-.001l-35.254-76.47h51.493l22.422 48.548 36.928-79.852h51.494l-63.383 137.413z" 
                    fill='#e66e4d' data-color="1"></path>
                    <path fill="#000001" opacity=".3" d="M192.747 211.146l-25.039 57.56-10.601-23.065 17.82-73.079 17.82 38.584z" data-color="1"></path>
                </g>
            </svg>
        </div>

        <div>
          <a className='titleRateWScore' href={props.link} target="_blank">{props.title}</a>
        </div>

        <p className='UnTiteRate'>{props.UndTitle}</p>

    </div>
  )
}
