import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Programming Skills for Data Science</h1>
          <div id="links">
            <a href="#about">about</a>
            <a href="#purchase">get the book</a>
            <a href="#reviews">resources</a>
            <a href="#reviews">reviews</a>
          </div>        
        </header>
        <div id="top-quote">
            <blockquote>"The definitive resource for new and aspiring data scientists to learn foundational programming skills." <br/></blockquote>
            <span>- Jared Lander, Series Editor</span>
          </div>
        <section id="about">                 
          <h1 class="section-title">About</h1>
          <p>Want to learn how to write code to work with data? <em>Programming Skills for Data Science</em> provides a comprehensive primer for people seeking data science skills that can be applied across a variety of domains. With no background experience required, this text covers the following:</p>
          <ul>
            <li>Install (free) data science software to write, execute, and manage code</li>
            <li>Manage and collaborate on projects efficiently with the version control systems <code>git</code> and GitHub</li>
            <li>Understand the foundational programming concepts and data structures (of the <code>R</code> programming language) for working with quantitative information.</li>
            <li>Load, format, explore, and restructure data for successful analysis</li>
            <li>Interact with various data sources, including CSV files, databases, and web APIs</li>
            <li>Design and build interactive visualizations that are accurate, engaging, and intuitive</li>
            <li>Build interactive web applications to facilitate the data science process.</li>
          </ul>
        </section>
        <section id="purchase">                 
          <h1 class="section-title">Get the Book</h1>
          <div id="book-description"><p>The book is available both online and in print. <strong>Students:</strong> you may have access through your University's subscription to <a href="https://www.safaribooksonline.com/library/view/programming-skills-for/9780135159071/">Safari Books Online</a>. For other shopping options, see:</p>
          <ul>
            <li><a href="https://www.pearson.com/us/higher-education/program/Freeman-Programming-Skills-for-Data-Science-Start-Writing-Code-to-Wrangle-Analyze-and-Visualize-Data-with-R/PGM2047488.html" target="_blank">Pearson</a></li>
            <li><a href="" target="_blank">Amazon</a></li>
            <li>Your local bookstore (availability may vary)</li>            
          </ul>
          </div>
          <div id="book-cover"></div>
        </section>
        <section id="resources">
          <h1 class="section-title">Resources</h1>
          <p>To suppliment the text, there are a number of free and open-source resources to support your learning.</p>
          <p><strong>Online Exercises: </strong>The full set of online exercises is available online. We have provided both <a href="" target="_blank">excercise instructions</a>, as well as the <a href="" target="_blank">complete code.</a></p>
          <p><strong>In Action Examples: </strong>The text includes a number of applied examples in the form of <em>In Action</em> sections. These include:</p>
        </section>
        <section id="reviews">
          <h1 class="section-title">Reviews</h1>
          <p>Forthcoming (book released 11/16).</p>

        </section>
        
      </div>
    );
  }
}

export default App;
