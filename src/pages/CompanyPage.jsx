import { Link, useParams } from 'react-router-dom';

function CompanyPage({ comp }) {
  const { companySlug } = useParams();
  const singleComp = comp.find(company => {
    return company.slug === companySlug;
  });

  return (
    <div>
      <h3>Company Profile</h3>

      {!singleComp && <h2>Company not found</h2>}

      {singleComp && (
        <>
          <h1>{singleComp.name}</h1>
          <h3>{singleComp.website}</h3>

          <p>{singleComp.description}</p>

          <img
            className='logo'
            src={singleComp.logo}
            alt={`${singleComp.name} logo `}
          />

          <div className='tech'>
            {singleComp.techStack.map(technology => {
              return (
                <div id={technology.slug} className='card'>
                  <Link
                    className='techStacks'
                    to={`/tech/${technology.slug}?company=${singleComp.slug}`}
                  >
                    <>
                      <h3>{technology.name}</h3>
                      <img
                        className='logo'
                        src={technology.image}
                        alt='tech-logo'
                      />
                    </>
                  </Link>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default CompanyPage;
