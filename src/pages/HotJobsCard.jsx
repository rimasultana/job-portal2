import { p } from "motion/react-client";
import { IoLocation } from "react-icons/io5";

const HotJobsCard = ({ job }) => {
  const {
    title,
    company_logo,
    hr_name,
    hr_email,
    status,
    requirements,
    company,
    description,
    salaryRange,
    applicationDeadline,
    location,
  } = job;
  return (
    <div>
      <div className="card card-compact w-[300px] h-[400px] bg-base-100 shadow-xl">
        <div className="flex gap-2 m-2">
          <figure>
            <img className="w-16 object-cover" src={company_logo} alt={title} />
          </figure>
          <div>
            <h4>{company}</h4>
            <h2 className="flex items-center">
              <span>
                <IoLocation />
              </span>
              <span>{location}</span>
            </h2>
          </div>
        </div>
        <div className="card-body overflow-auto">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">NEW</div>
          </h2>

          <p>{description}</p>
          <div className="flex gap-2 flex-wrap">
            {
                requirements.map(skill => <p className="border rounded-md py-2 text-center hover:bg-red-200 hover:text-green-500">{skill}</p>)
            }
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotJobsCard;
