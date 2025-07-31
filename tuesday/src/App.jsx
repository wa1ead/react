import Header from "./components/Header";
import CardsContainer from "./components/CardsContainer";

function App() {
  let cardData = [
    {
      title: "Twitter",
      source:
        "https://store-images.s-microsoft.com/image/apps.26737.9007199266244427.c75d2ced-a383-40dc-babd-1ad2ceb13c86.ed1d047e-03d9-4cd8-a342-c4ade1e58951",
    },
    {
      title: "Instagram",
      source:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png",
    },
    {
      title: "Youtube",
      source:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKfPimrl1lwgrW3OHOuuyReVPqtc_Hd7mp4A&s",
    },
  ];

  return (
    <div>
      <Header />
      <CardsContainer cardData={cardData} />
    </div>
  );
}

export default App;
