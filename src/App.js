import React, { useState } from "react";
import moment from "moment";

const prettyDateTime = (Component) => {
  return function (props) {
    return <Component {...props} date={moment(props.date).fromNow()} />;
  };
};

const DateTimePretty = prettyDateTime(DateTime);

function DateTime(props) {
  return <p className="date">{props.date}</p>;
}

function Video(props) {
  return (
    <div className="video">
      <iframe
        src={props.url}
        // frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <DateTimePretty date={props.date} />
    </div>
  );
}

function VideoList(props) {
  return props.list.map((item) => (
    <Video url={item.url} date={item.date} key={item.url} />
  ));
}

export default function App() {
  const [list, setList] = useState([
    {
      url: "https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2021-04-15 13:24:00",
    },
    {
      url: "https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2022-10-08 12:10:00",
    },
    {
      url: "https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2023-06-05 23:16:00",
    },
    {
      url: "https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2023-12-03 12:10:00",
    },
    {
      url: "https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2024-03-01 16:17:00",
    },
    {
      url: "https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2024-04-16 05:24:00",
    },
  ]);

  return <VideoList list={list} />;
}
