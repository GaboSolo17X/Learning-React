import { Link } from "react-router";

export const HeroCard = ({id,
superhero,
publisher,
alter_ego,
first_appearance,
characters,
}) => {
    const heroURL=`/assets/heroes/${id}.jpg`
  return (
    <div className="col animate__animated animate__fadeIn">
        <div className="card">
            <div className="row no-gutters">
                <div className="col-4 ">
                    <img src={heroURL} alt={superhero} className="card-img " />
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-tittle">{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>
                        <hr />
                        {
                            (alter_ego!==characters) && (                        <p>{characters}</p>
                            )
                        }
                        <p className="card-text">
                            <small className="text-muted">{first_appearance}</small>
                        </p>

                        <Link to={`/hero/${id}`}>
                            Mas...
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    </div>
  )
}
