
import '../styles/PhotoBox.css'
import Photos from './Photos';
import {projects} from "../assets/Data"
import Description from './Description';


  
  const PhotoBox = ({ num }) => {
    return (
      <div className='photo-box'>
        {projects.map(p => {
  return (
    <div className='photo-box'>
      <div>
        <Description p={p.p} id={p.id}/>
        <Photos src={p.src} id={p.id} />
      </div>
    </div>
  );
})}

      </div>
    );
  };

  export default PhotoBox;