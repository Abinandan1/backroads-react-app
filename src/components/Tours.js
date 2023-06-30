import { tours } from "../data";
import { Title } from "./Title";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subtitle="tours" />
      <div className="section-center featured-center">
        {tours.map(
          ({
            id,
            img,
            tourDate,
            tourTitle,
            tourDescription,
            icon,
            location,
            days,
            price,
          }) => {
            return (
              <article key={id} className="tour-card">
                <div className="tour-img-container">
                  <img src={img} className="tour-img" alt="" />
                  <p className="tour-date">{tourDate}</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{tourTitle}</h4>
                  </div>
                  <p>{tourDescription}</p>
                  <div className="tour-footer">
                    <p>
                      <span>
                        <i className={icon}></i>
                      </span>
                      {location}
                    </p>
                    <p>{days}</p>
                    <p>{price}</p>
                  </div>
                </div>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};
export default Tours;
