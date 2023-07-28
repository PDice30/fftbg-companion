import Overlay from './components/Overlay';

// TODO: Minimum Height and width of document, otherwise: Display a message they need to adjust
const App = () => {

  console.log(import.meta.env);
  // // TODO: Use effect to track window changes?
  // // Could also grab root Length/ Height?
  // if (window.location.href !== 'http://localhost:8080/') {
  //   const videoPlayer = document.getElementsByClassName('video-player__overlay')[0];
  //   if (videoPlayer && (videoPlayer.clientWidth < 600 || videoPlayer.clientHeight < 400)) {
  //     console.log(videoPlayer.clientWidth);
  //     console.log(videoPlayer.clientHeight);
  //     console.log('Video Player too small');
  //     return (
  //       <div>
  //         Please adjust your browser size!  
  //       </div>
  //     )
  //   }
  // }

  // if (window.innerWidth < 600 ||  window.innerHeight < 400) {
  //   console.log('Overlay extension too small');
  //   return (
  //     <div>
  //       Please adjust your browser size!
  //     </div>
  //   )
  // }
  

  return (
    <Overlay />
  )
}

export default App
