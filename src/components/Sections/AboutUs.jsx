export const AboutUs = () => {
  return (
    <div className="mx-auto px-4 relative max-w-7xl sm:px-6">

    <div className="flex items-center md:py-20 py-12">
      <div className="mx-auto max-w-5xl md:pb-16 pb-10 text-start">
        <p className="font-bold text-base text-[#1e3a8a] tracking-wide uppercase">About us</p>
        <h1 className="font-bold font-heading leading-tighter tracking-tighter mb-4 text-black md:text-6xl text-5xl">
          Enhance your digital footprint with our<br />
          <a className="highlight text-[#6d28d9]" href="/#services">Services</a>
        </h1>
        <div className="mx-auto max-w-3xl">
          <p className="text-xl text-[#101010e6] mb-6">
            Our company is dedicated to providing top-notch digital solutions that help businesses grow. We offer a wide range of services, from web design and development to digital marketing strategies. Our team of experienced professionals is committed to delivering high-quality results that meet the unique needs of each client. We believe in the power of digital technology to transform businesses, and we strive to create digital experiences that are engaging, user-friendly, and effective.
          </p>
        </div>
      </div>
      <div>
        <div className="relative hidden m-auto max-w-2xl md:block">
          <img
            alt="Company Image"
            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"
            className="mx-auto w-full rounded-md"
            decoding="async"
            height="1024"
            loading="eager"
            sizes="(max-width: 767px) 400px, (max-width: 1023px) 768px, (max-width: 2039px) 1024px, 2040px"
            srcSet="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80&amp;h=400 400w, https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=768&amp;q=80&amp;h=768 768w, https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1024&amp;q=80&amp;h=1024 1024w, https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=2040&amp;q=80&amp;h=2040 2040w, https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=2048&amp;q=80&amp;h=2048 2048w"
            style={{ objectFit: 'cover', objectPosition: 'center', maxWidth: '1024px', maxHeight: '1024px', aspectRatio: '1', width: '100%' }}
            width="1024"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

