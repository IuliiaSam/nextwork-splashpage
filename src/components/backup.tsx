// import { ResourcesProps } from "../../types/instructions";
// import ResourceCard from "./resourceCard";
// const Resources: React.FC<ResourcesProps> = ({resourceCards}) => {
//   return (
//     <section className="resources text-gray-800 text-center p-4 bg-base-200 pb-20">
//       <h2 className="text-3xl font-bold mb-12">
//         Resources
//       </h2>
//       <div className="grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-xl-12">
//       {/* <div className="flex justify-around flex-wrap gap-x-6 gap-y-6"> */}
//         {resourceCards.map(({ title, subtitle, image, link }, index) => {
//           return (
//             <ResourceCard
//               title={title}
//               subtitle={subtitle}
//               image={image}
//               link={link}
//               key={`resourceCard${index}`}
//             />
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default Resources;


// import { ResourceCardProps } from "../../types/instructions";
// const ResourceCard: React.FC<ResourceCardProps> = ({
//   title,
//   subtitle,
//   image,
//   link,
// }) => {
//   return (
//     <div className="card w-96 h-60 bg-base-100 shadow-xl image-full">
//       <figure><img src={image} alt="Article image"/></figure>
//       <div className="card-body">
//         <h2 className="card-title">{title}</h2>
//         <p>{subtitle}</p>
//         <div className="card-actions justify-end">
//           <a href={link} target="_blank" rel="noopener noreferrer">
//             <button className="btn btn-primary">Read more</button>
//           </a>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ResourceCard;