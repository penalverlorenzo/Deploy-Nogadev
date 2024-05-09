import { LinkedIn } from "../../assets/svg/LinkedIn";
import ferImage from "../../assets/img/team/ferMini.jpg";
import jorgeImage from "../../assets/img/team/jorge.jpg";
import lucasImage from "../../assets/img/team/lucasMini.jpg";
import yateImage from "../../assets/img/team/YateMini.jpg";
import davidImage from "../../assets/img/team/davidMini.avif";

/* eslint-disable react/prop-types */
const team =[
  {
    name: 'Fernando Nogara',
    description: 'Co-founder - Chief Executive Officer',
    image: ferImage,
    url: 'https://www.linkedin.com/in/fernogara/'
  },
  {
    name: 'Juan Pablo Shaw',
    description: 'Chief Operating Officer',
    image: yateImage,
    url: 'https://www.linkedin.com/in/juan-pablo-shaw-15a1475/'
  },
  {
    name: 'Jorge Viani',
    description: 'Co-founder - Senior Developer',
    image: jorgeImage,
    url: 'https://www.linkedin.com/in/jorge-david-viani-5bb02777/'
  },
  {
    name: 'David Nogara',
    description: 'Co-founder - Senior Developer',
    image: davidImage,
    url: 'https://www.linkedin.com/in/davidnogara/'
  },
  {
    name: 'Larisa Paraschiv',
    description: 'Account Executive',
    image: 'https://media.licdn.com/dms/image/D5603AQHV_b6-ZlcUyw/profile-displayphoto-shrink_200_200/0/1705407820129?e=1717027200&v=beta&t=yBAMZws_yOhtrLaOYX2GdDz4jBOjUVnHFcb0vafJl-8',
    url: 'https://www.linkedin.com/in/larisa-paraschiv-0618ab130/'
  },
  {
    name: 'Lucas Muñoz',
    description: 'Account Executive',
    image: lucasImage,
    url: 'https://www.linkedin.com/in/lucasantoniomunoz/'
  },
]

export const Team = () => {
  return (
      <div className="items-center justify-center w-full grid p-2 sm:p-4 relative gap-1 sm:gap-3 max-w-5xl" style={{
        gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 146px))',
        padding: '20px'
      }}>
        {team?.map((member, i) => (
          <a key={i} className="col-span-1 transition flex flex-col justify-center rounded-md items-center hover:shadow-lg p-2 cursor-pointer " href={member.url} target="__blank">
            <img className="object-cover object-center w-24 h-24 rounded-full"  src={member.image} alt={member.name} />
            <h3 className="text-sm font-medium tracking-tighter decoration-black text-center">{member.name}</h3>
            <p className="text-xs text-center">{member.description}</p>
              <LinkedIn className={'size-6'} />
          </a>
        ))}
        
      </div>
  );
};
