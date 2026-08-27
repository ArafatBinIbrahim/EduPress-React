import React from 'react';
import Banner from '../components/Banner';
import Counter from '../components/Counter';
import NewBanner from '../components/NewBanner';
import Categories from '../components/Categories';
import Courses from '../components/Courses';
import Feedback from '../components/Feedback';

export default function Home() {
  return (
    <div>
      <Banner />
      <Counter />
      <NewBanner />
      <Categories />
      <Courses />
      <Feedback />
    </div>
  );
}