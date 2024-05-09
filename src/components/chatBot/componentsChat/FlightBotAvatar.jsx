
import img from '../../../assets/img/nogadevIcon.jpg'
import LazyImageLoader from '../../LazyLoading/LazyLoadingContainer'
export const FlightBotAvatar = () => {
  
  return (
    <div className="size-10 mr-3 ">
      <LazyImageLoader>
      <img className="rounded-t-full rounded-r-full object-cover" src={img} alt="" />
      </LazyImageLoader>
    </div>
  )
}