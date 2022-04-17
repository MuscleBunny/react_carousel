import './App.css';
import Carousel from './pages/Carousel'

const images = [
  "https://static.tildacdn.com/tild3761-6433-4163-b461-333833633462/89.png",
  "https://static.tildacdn.com/tild6165-6231-4635-b962-393538353831/44.png",
  "https://thumb.tildacdn.com/tild6434-6435-4430-a366-656630653533/-/resize/200x/-/format/webp/25.png",
  "https://thumb.tildacdn.com/tild3164-6338-4566-b230-336339663438/-/resize/200x/-/format/webp/11.png",
  "https://thumb.tildacdn.com/tild3431-3161-4563-a561-353735343730/-/resize/200x/-/format/webp/93.png",
  "https://thumb.tildacdn.com/tild3161-3733-4134-a331-663666633566/-/resize/200x/-/format/webp/128.png",
  "https://thumb.tildacdn.com/tild3238-6662-4834-a237-636137313937/-/resize/200x/-/format/webp/112.png",
];

function App() {
  return (
    <Carousel imageUrls={images} imgW={200} imgH={200}></Carousel>
  );
}

export default App;
