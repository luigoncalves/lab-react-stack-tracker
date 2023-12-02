import { Link } from 'react-router-dom';

function HomePage({ comp }) {
  return (
    <>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div className='companies'>
        {comp.map(company => {
          return (
            <div id={company.id} className='card'>
              <Link to={`/company/${company.slug}`}>
                <>
                  <h3>{company.name}</h3>
                  <img className='logo' src={company.logo} alt='company-logo' />
                </>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default HomePage;
