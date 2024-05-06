import img from '../../../assets/img/nogadevIcon.jpg'
export const MyUserAvatar = () => {
  return (
    <div className="size-10 ml-3 ">
      <img className="rounded-l-full rounded-t-full object-cover w-[40px] h-[40px]" src={img} alt="" />
    </div>
  )
}