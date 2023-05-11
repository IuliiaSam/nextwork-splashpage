import { ResourceCardProps } from "../../types/instructions";
const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  subtitle,
  image,
  link,
}) => {
  return (
    <div className="card w-96 shadow-xl bg-base-100 image-full ">
      <figure><img src={image} alt="Article image"/></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{subtitle}</p>
        <div className="card-actions justify-end">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary">Read more</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ResourceCard;