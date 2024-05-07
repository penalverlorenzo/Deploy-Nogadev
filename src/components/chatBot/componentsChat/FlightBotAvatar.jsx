
import img from '../../../assets/img/nogadevIcon.jpg'
import LazyImageLoader from '../../LazyLoading/LazyLoadingContainer'
export const FlightBotAvatar = () => {
  
  return (
    <div className="size-10 mr-3 ">
      <LazyImageLoader>
      <img className="rounded-t-full rounded-r-full object-cover w-[40px] h-[40px]" src={img} alt="" />
      </LazyImageLoader>
    </div>
  )
}