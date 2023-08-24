'use client'

const Navbar = () => {

  return (
    <>
     <div className='h-10 flex flex-row justify-between'>
        <div className="flex flex-col justify-center">
          <span className="ml-4 font-bold text-xl ">
            HomeSculpt
          </span>
        </div>
        <div className="mr-5 flex flex-col justify-center">
          <span>Register</span>
        </div>
     </div>
    </>
  );
};

export default Navbar;
