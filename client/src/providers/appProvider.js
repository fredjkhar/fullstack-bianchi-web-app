import React, { useState } from "react";

import moment from "moment";

const AppContext = React.createContext();

const en = {
  lang: "en",
  navbar: {
    a: "About",
    b: "Services",
    c: "Location",
    d: "book",
  },
  header: {
    a: "Men's haircuts and hairstyles.",
    b: "The barber shop used to be more than just a place to get a new hairstyle or a fresh cut - it was a community center. ",
    c: "Book",
    d: "About us",
  },
  about: {
    a: "About us",
    b: "From any old school shave or classic haircut style to even the most popular current ones, our barbers create amazing looks that enhance people's appearance and get them noticed whether they like it or not.",
  },
  menu: {
    a: "haircuts",
    b: "shaves",
    c: "men haircut",
    d: "senior haircut",
    e: "kid haircut",
    f: "cut and shampoo",
    g: "hair coloring",
    h: "classic shave",
    i: "hot towel shave",
    j: "steam shave",
    k: "head shave",
    l: "beard trimming",
  }
};

const fr = {
  lang: "fr",
  navbar: {
    a: "A propos",
    b: "Services",
    c: "Emplacement",
    d: "Reservation",
  },
  header: {
    a: "Coupes de cheveux et coiffures pour hommes",
    b: "Le salon de coiffure n'était pas seulement un endroit où l'on pouvait se faire coiffer ou couper les cheveux, c'était aussi un centre communautaire. ",
    c: "Reservation",
    d: "A Propos",
  },
  about: {
    a: "A propos de nous",
    b: "Qu'il s'agisse d'un rasage à l'ancienne ou d'une coupe de cheveux classique, ou même des styles les plus populaires d'aujourd'hui, nos barbiers créent des looks étonnants qui mettent en valeur l'apparence des gens et les font remarquer, qu'ils le veuillent ou non.",
  },
  menu: {
    a: "coupes",
    b: "rasages",
    c: "coupe hommes",
    d: "coupe seniors",
    e: "coupe enfants",
    f: "coupe et shampooing",
    g: "coloration des cheveux",
    h: "rasage classique",
    i: "rasage à serviette chaude",
    j: "rasage à la vapeur",
    k: "rasage des cheveux",
    l: "taille de la barbe",
  }
};

const AppProvider = ({ children }) => {
  const [data, setData] = useState(en);
  const switchLang = () => setData(data === en ? fr : en);

  const [value, setValue] = useState(moment());
  const [bookings, setBookings] = useState([]);
  const [displayTimeSlots, setDisplayTimeSlots] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  return (
    <AppContext.Provider
      value={{
        data,
        switchLang,
        value,
        setValue,
        bookings,
        setBookings,
        displayTimeSlots,
        setDisplayTimeSlots,
        successMessage,
        setSuccessMessage
      }}
    >
      <div className="wrapper">{children}</div>
    </AppContext.Provider>
  );
};

export const useAppContext = () => React.useContext(AppContext);

export default AppProvider;
