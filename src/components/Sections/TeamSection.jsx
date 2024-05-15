import styled from 'styled-components';
import { Team } from '../Elements/Team';
import { UseLanguageSections } from '../../hooks/UseLanguageSections';

export const TeamSection = () => {
  const team = UseLanguageSections('team');


  return (
    <div className="">
      <div className="container">
        <Advertising className="flex flex-col items-center gap-8">
          <h2 className="text-4xl extraBold mx-auto text-center">{team.title}</h2>
          <p className="text-2xl font-medium mx-auto text-center">
            {team.description}
          </p>
          <Team />
        </Advertising>
      </div>
    </div>
  );
};

const Advertising = styled.div`
  margin: 80px 0; 
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;