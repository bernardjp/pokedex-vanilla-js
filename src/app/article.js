import { renderArticle } from '../ui/ui-article.js';

export function initializeArticle() {
  const articleContent = {
    title: 'Welcome to the PokéDex',
    excerpt: `"To make a complete guide on all the Pokémon in the world… 
    That was my dream! But, I'm too old! I can't do it! So, I want you to 
    fulfill my dream for me! Get moving! This is a great undertaking in 
    Pokémon history!"  <strong>-- Professor Oak</strong>`,
  };

  renderArticle(articleContent);
}

export function setAboutArticle() {
  const articleContent = {
    title: 'About me',
    excerpt: `This simple project is an exercise of the introductory course to JavaScript provided by <a href="https://argentinaprograma.com" target="_blank">"r/Argentina Programa"</a>. The data used for this exercise was provided by <a href="https://pokeapi.co/" target="_blank">PokeAPI.co</a> API. The web design and page layout is based on the design of the PokeAPI.co webpage.`,
  };

  renderArticle(articleContent);
}

export function setContactArticle() {
  const articleContent = {
    title: 'Contact me',
    excerpt: `Greets! My name is <strong>Juan Pablo Bernard</strong>, a Web Dev in the making, and you can find more about me on <a href="https://www.linkedin.com/in/juan-pablo-bernard/" target="_blank">LinkeIn</a> or <a href="https://github.com/bernardjp" target="_blank">GitHub</a>.`,
  };

  renderArticle(articleContent);
}
