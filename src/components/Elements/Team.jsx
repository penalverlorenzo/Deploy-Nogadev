import { LinkedIn } from "../../assets/svg/LinkedIn";
import LazyImageLoader from "../LazyLoading/LazyLoadingContainer";

/* eslint-disable react/prop-types */
const team =[
  {
    name: 'Fernando Nogara',
    description: 'Co-founder - Chief Executive Officer',
    imageUrl: 'https://media.licdn.com/dms/image/C5603AQH54pbnKFoQCw/profile-displayphoto-shrink_200_200/0/1561068467736?e=1717027200&v=beta&t=C2-lPCIAG2VN12xYL9uqXOHfsPWeqCwKEgBGVtP5wcc',
    url: 'https://www.linkedin.com/in/fernogara/'
  },
  {
    name: 'Juan Pablo Shaw',
    description: 'Chief Operating Officer',
    imageUrl: 'https://media.licdn.com/dms/image/D4D03AQEIH1zPvstsgQ/profile-displayphoto-shrink_200_200/0/1711393121484?e=1717027200&v=beta&t=kcAtND76Z_MzY2e0yOIHPc3PzwWdEf8m1L9lXUru3As',
    url: 'https://www.linkedin.com/in/juan-pablo-shaw-15a1475/'
  },
  {
    name: 'Jorge Viani',
    description: 'Co-founder - Senior Developer',
    imageUrl: 'https://media.licdn.com/dms/image/D4D03AQEGG-KzGmMY0w/profile-displayphoto-shrink_200_200/0/1692379906688?e=1717027200&v=beta&t=Q8DmVTmcTvtQYtfp2eemC_x7jdjv3yRfRbeJ0dljq3E',
    url: 'https://www.linkedin.com/in/jorge-david-viani-5bb02777/'
  },
  {
    name: 'David Nogara',
    description: 'Co-founder - Senior Developer',
    imageUrl: 'https://media.licdn.com/dms/image/C4D03AQG0lw2ajsmIFw/profile-displayphoto-shrink_200_200/0/1628122380566?e=1717027200&v=beta&t=skzb9fZbeMwBvX18cSBZo3dSgU2EusAFc1a_9YrMsE0',
    url: 'https://www.linkedin.com/in/davidnogara/'
  },
  {
    name: 'Larisa Paraschiv',
    description: 'Account Executive',
    imageUrl: 'https://media.licdn.com/dms/image/D5603AQHV_b6-ZlcUyw/profile-displayphoto-shrink_200_200/0/1705407820129?e=1717027200&v=beta&t=yBAMZws_yOhtrLaOYX2GdDz4jBOjUVnHFcb0vafJl-8',
    url: 'https://www.linkedin.com/in/larisa-paraschiv-0618ab130/'
  },
]

export const Team = () => {
  return (
      <div className="grid grid-cols-2 md:grid-cols-5 items-center justify-center w-full max-w-5xl p-4 gap-3 relative">
        {team?.map((member, i) => (
          <a key={i} className="col-span-1 transition flex flex-col justify-center rounded-md items-center hover:shadow-lg p-2 cursor-pointer " href={member.url} target="__blank">
            <LazyImageLoader>
            <img className="object-cover object-center w-24 h-24 rounded-full"  src={member.imageUrl} alt={member.name} />
            </LazyImageLoader>
            <h3 className="text-sm font-medium tracking-tighter decoration-black text-center">{member.name}</h3>
            <p className="text-xs text-center">{member.description}</p>
            {/* <a className="cursor-pointer" href={member.url} target="__blank"> */}
              <LinkedIn className={'size-6'} />
            {/* </a> */}
          </a>
        ))}
        
      </div>
  );
};
