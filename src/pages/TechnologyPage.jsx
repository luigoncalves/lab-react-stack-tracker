import { Link, useParams, useSearchParams } from 'react-router-dom';

function TechnologyPage({ tech }) {
  const { slug } = useParams();
  const singleTech = tech.find(technology => {
    return technology.slug === slug;
  });

  const [searchParam, setSearchParam] = useSearchParams();
  const backToCompany = searchParam.get('company');

  console.log(singleTech);
  return (
    <div>
      <h3>Technology Profile</h3>

      {!singleTech && <h2>Technology not found</h2>}

      {singleTech && (
        <>
          <h1>{singleTech.name}</h1>

          <p>{singleTech.description}</p>

          <img
            className='logo'
            src={singleTech.image}
            alt={`${singleTech.name} logo `}
          />
        </>
      )}
      <Link to={`/company/${backToCompany}`}>Back</Link>
    </div>
  );
}

export default TechnologyPage;
