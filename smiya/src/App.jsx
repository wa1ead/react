import "./App.css";
import Card from "./Card";

function App() {
  let cardData = [
    {
      title: "Zlatan",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/09/Zlatan_Ibrahimovi%C4%87_June_2018.jpg",
      paragraph: "football player",
    },
    {
      title: "Leo Messi",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/lionel-messi-celebrates-after-their-sides-third-goal-by-news-photo-1686170172.jpg",
      paragraph: "football player",
    },
    {
      title: "CR7",
      image:
        "https://img.a.transfermarkt.technology/portrait/big/8198-1748102259.jpg?lm=1",
      paragraph: "football player",
    },
  ];
  return (
    <div>
      {cardData.map((valeur) => (
        <Card
          title={valeur.title}
          image={valeur.image}
          paragraph={valeur.paragraph}
        />
      ))}
    </div>
  );
}

export default App;
