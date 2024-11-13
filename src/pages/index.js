import React from 'react';
import Layout from '../components/Layout';
import './index.css';

const Home = () => (
  <Layout>
    <section className="banner">
      <div className="banner-text-item">
        <h1>Find your Next tour!</h1>
        <form className="form">
          <input type="text" list="destinations" placeholder="Where would you like to go?" />
          <datalist id="destinations">
            <option>London</option>
            <option>Canada</option>
            <option>Monaco</option>
            <option>France</option>
            <option>Japan</option>
            <option>Switzerland</option>
            <option>Seoul</option>
          </datalist>
          <input type="date" className="date" />
          <button className="book">Book</button>
        </form>
      </div>
    </section>
    {/* Add Services, Places, and About sections here */}
  </Layout>
);

export default Home;
