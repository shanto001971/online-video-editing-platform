import { BsChevronDown } from 'react-icons/bs';

const CreateModal = () => {
    return (
      
          <div className="dropdown ">
  <label tabIndex={0} className="px-3 py-1 text-white text-base bg-violet-500 rounded-lg m-1  md:flex items-center gap-2">Create New<BsChevronDown className='hidden md:block'/></label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 mt-3 rounded-box w-auto lg:w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
    
        
    );
};

export default CreateModal;