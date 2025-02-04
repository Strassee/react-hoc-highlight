import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

function New(props) {
  return (
    <div className="wrap-item wrap-item-new">
      <span className="label">New!</span>
      {props.children}
    </div>
  )
};

function Popular(props) {
  return (
    <div className="wrap-item wrap-item-popular">
      <span className="label">Popular!</span>
      {props.children}
    </div>
  )
};

function Article(props) {
  return (
    <div className="item item-article">
      <h3><a href="/#/">{props.title}</a></h3>
      <p className="views">Прочтений: {props.views}</p>
    </div>
  )
};

function Video(props) {
  return (
    <div className="item item-video">
      <iframe title="iframe" src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <p className="views">Просмотров: {props.views}</p>
    </div>
  )
};

function List(props) {
  let component;
  return props.list.map(item => {
    switch (item.type) {
      case 'video':
        component = <Video {...item} key={uuid()} />
        break;

      case 'article':
        component = <Article {...item} key={uuid()} />
        break;

      default:
        break;
    }
    if (item.views < 100) {
      return (
        <New>{component}</New>
      )
    } else if (item.views > 1000) {
      return (
        <Popular>{component}</Popular>
      )
    } else {
      return (
        component
      )
    }
  });
};

export default function App() {
  const [list] = useState([
    {
      type: 'video',
      url: 'https://rutube.ru/play/embed/cfe464c34c3ac4e16349622c3c24fce5/',
      views: 50
    },
    {
      type: 'video',
      url: 'https://rutube.ru/play/embed/79c11723f75382f41147f26a7daedbca/',
      views: 12
    },
    {
      type: 'article',
      title: 'Невероятные события в неизвестном поселке...',
      views: 175
    },
    {
      type: 'article',
      title: 'Секретные данные были раскрыты!',
      views: 1532
    },
    {
      type: 'video',
      url: 'https://rutube.ru/play/embed/d5f4d6b51b7858a2893808af5467fd87/',
      views: 4253
    },
    {
      type: 'article',
      title: 'Кот Бегемот обладает невероятной...',
      views: 12,
    },
  ]);

  return (
    <List list={list} />
  );
}