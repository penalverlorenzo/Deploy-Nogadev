import img from '../../../assets/img/nogadevIcon.jpg'
import LazyImageLoader from '../../LazyLoading/LazyLoadingContainer'
export const MyUserAvatar = () => {
  return (
    <div className="size-10 ml-3 ">
      <LazyImageLoader>
      <img className="rounded-l-full rounded-t-full object-cover w-[40px] h-[40px]" src={img} alt="" />
      </LazyImageLoader>
    </div>
  )
}