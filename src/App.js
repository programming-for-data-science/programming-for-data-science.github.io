import React, { Component } from 'react';
import './App.css';

const ReactGA = require('react-ga');

function logPageView() {
    ReactGA.set({
        page: window.location.pathname + window.location.search
    });
    ReactGA.pageview(window.location.pathname + window.location.search);
}

class App extends Component {
    componentDidMount() {
        ReactGA.initialize('UA-49431863-7');
        logPageView();
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Programming Skills for Data Science</h1>
                    <div id="links">
                        <a rel="noopener noreferrer"href="#learning">learning</a>
                        <a rel="noopener noreferrer"href="#about">details</a>
                        <a rel="noopener noreferrer"href="#purchase">purchase</a>
                        <a rel="noopener noreferrer"href="#reviews">resources</a>
                        <a rel="noopener noreferrer"href="#reviews">reviews</a>
                    </div>
                </header>
                <div id="top-quote">
                    <blockquote>"The definitive resource for new and aspiring data scientists to learn foundational programming skills." <br /></blockquote>
                    <span>- Jared Lander, Series Editor</span>
                </div>
                <section id="learning">
                    <div class="section-container">
                        <h1 class="section-title">What You'll Learn</h1>
                        <p><em>Programming Skills for Data Science</em> teaches you how to write code to work with data. Using the R software, you will programmatically work with real datasets to build interactive visualizations, web applications, and well-crafted data reports. All the images below come from exercises in the book's <a rel="noopener noreferrer"href="https://github.com/programming-for-data-science/in-action" target="_blank">In Action</a> code repository.</p>
                        <img id="projects" src="imgs/projects.png" />
                    </div>
                </section>
                <section id="about">
                    <div class="section-container">
                        <h1 class="section-title">Details</h1>
                        <p><em>Programming Skills for Data Science</em> is a comprehensive primer for people seeking data science skills that can be applied across a variety of domains. With no background experience required, this text covers the following:</p>
                        <ul>
                            <li>Install (free) <strong>data science software</strong> to write, execute, and manage code</li>
                            <li>Manage and collaborate on projects efficiently with the <strong>version control systems</strong> <code>git</code> and GitHub</li>
                            <li>Understand the <strong>foundational programming concepts</strong> and data structures (of the <code>R</code> programming language) for working with quantitative information.</li>
                            <li>Load, format, explore, and <strong>wrangle data</strong> for successful analysis</li>
                            <li>Interact with <strong>complex data sources</strong>, including CSV files, databases, and web APIs</li>
                            <li>Design and build <strong>interactive visualizations</strong> that are accurate, engaging, and intuitive</li>
                            <li>Build interactive <strong>web applications</strong> to facilitate the data science process.</li>
                        </ul>
                    </div>
                </section>
                <section id="purchase">
                    <div class="section-container">
                        <h1 class="section-title">Get the Book</h1>
                        <div id="book-description"><p>The book is available both online and in print. <strong>Students:</strong> you may have access through your University's subscription to <a rel="noopener noreferrer"href="https://www.safaribooksonline.com/library/view/programming-skills-for/9780135159071/">Safari Books Online</a>. For other shopping options, see:</p>
                            <ul>
                                <li><a rel="noopener noreferrer" href="https://www.indiebound.org/book/9780135133101" target="_blank">Local bookstore</a> (availability may vary)</li>
                                <li><a rel="noopener noreferrer"href="http://www.informit.com/store/programming-skills-for-data-science-start-writing-code-9780135133101" target="_blank">InformIT</a></li>
                                <li><a rel="noopener noreferrer"href="https://www.pearson.com/us/higher-education/program/Freeman-Programming-Skills-for-Data-Science-Start-Writing-Code-to-Wrangle-Analyze-and-Visualize-Data-with-R/PGM2047488.html" target="_blank">Pearson</a></li>
                                <li><a rel="noopener noreferrer"href="https://www.amazon.com/gp/product/0135133106" target="_blank">Amazon</a></li>                                
                            </ul>
                        </div>
                        <div id="book-cover"></div>
                    </div>
                </section>
                <section id="resources">
                    <div class="section-container">
                        <h1 class="section-title">Resources</h1>
                        <p>To supplement the text, there are a number of free and open-source resources to support your learning.</p>
                        <p><strong>Online Exercises: </strong>The full set of book exercises is available online. We have provided both <a rel="noopener noreferrer"href="https://github.com/programming-for-data-science/book-exercises" target="_blank">exercise instructions</a>, as well as the <a rel="noopener noreferrer"href="https://github.com/programming-for-data-science/book-exercises/tree/solution" target="_blank">complete code.</a></p>
                        <p><strong>In Action Examples: </strong>The text includes a number of applied examples in the form of <em>In Action</em> sections. These include:</p>
                        <ul>
                            <li><a rel="noopener noreferrer"target="_blank" href="https://github.com/programming-for-data-science/in-action/tree/master/dplyr">Flight Delays</a>: The <em><code>dplyr</code> In Action</em> section uses the <code>dplyr</code> package to explore the <code>nycflights13</code> data set, asking targeting questions about the 300,000+ flights that departed from New York City airports in 2013.</li>
                            <li><a rel="noopener noreferrer"target="_blank" href="https://github.com/programming-for-data-science/in-action/tree/master/tidyr">Exploring Educational Statistics</a>: The <em><code>tidyr</code> In Action</em> section uses the <code>tidyr</code> package to explore variations in educational investment and attainment around the world using data from the World Bank.</li>
                            <li><a rel="noopener noreferrer"target="_blank" href="https://github.com/programming-for-data-science/in-action/tree/master/apis">Finding Cuban Food in Seattle</a>: The <em>APIS In Action</em> section uses the Yelp and Google Maps APIs to build a map of the highest rated Cuban Restaurants (in Seattle) on Yelp.</li>
                            <li><a rel="noopener noreferrer"target="_blank" href="https://github.com/programming-for-data-science/in-action/tree/master/ggplot2">Mapping Evictions in San Francisco</a>: The <em><code>ggplot2</code> In Action</em> section uses the <code>ggplot2</code> package to expose the intensity and distribution of evictions in the city of San Francisco.</li>
                            <li><a rel="noopener noreferrer"target="_blank" href="https://github.com/programming-for-data-science/in-action/tree/master/interacitve-vis">Visualizing Building Permits in Seattle</a>: The <em>Interactive Visualization In Action</em> section uses various interactive visualization packages to explore new building permits in Seattle since 2010.</li>
                            <li><a rel="noopener noreferrer"target="_blank" href="https://github.com/programming-for-data-science/in-action/tree/master/r-makrdown">Reporting on Life Expectancy</a>: The <em>R Markdown in Action</em> section demonstrates the use of R Markdown to generate a website as a report on life expectancy data from the World Bank.</li>
                            <li><a rel="noopener noreferrer"target="_blank" href="https://github.com/programming-for-data-science/in-action/tree/master/shiny">Visualizing Fatal Police Shootings</a>: The <em>Shiny in Action</em> section walk through building an interactive web application for exploring the volume of fatal police shootings in the United States (using the <code>shiny</code> package).</li>
                        </ul>
                    </div>
                </section>
                <section id="reviews">
                    <div class="section-container">
                        <h1 class="section-title">Reviews</h1>
                        <p>Forthcoming (book released 11/16).</p>
                    </div>
                </section>

            </div>
        );
    }
}

export default App;
