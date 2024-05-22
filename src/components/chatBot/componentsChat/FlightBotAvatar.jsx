
// import img from '../../../assets/img/nogadevIcon.jpg'
import lowResImg from '../../../assets/img/lowResIcon.jpg'
import LazyImageLoader from '../../LazyLoading/LazyLoadingContainer'
export const FlightBotAvatar = () => {
  
  return (
    <div className="size-10 mr-3 ">
      <LazyImageLoader>
      <img className="rounded-t-full rounded-r-full" src={lowResImg} alt="" />
      </LazyImageLoader>
    </div>
  )
}