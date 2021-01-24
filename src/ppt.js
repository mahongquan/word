import React from 'react';
import ReactReveal from './react-revealjs';
let sections= [
    {
      "name": "Intro",
      "markup": "<section>## Page title\nA paragraph with some text and a [link](http://hakim.se).</section>"
    },
    {
      "name": "Two",
      "markup": "<section>## Next Slide\n Some other infor on the next slide</section>"
    },
    {
      "name": "Three",
      "markup": "<section><h2>Third slide as markup</h2><p>Some text</p><aside class='notes'>Hey some notes here</aside>"
    }
  ];
const revealConfig = {
    width: 1000,
    height: 800,
    margin: 0.1,
    controls: true,
    progress: true,
    slideNumber: true,
    history: true,
    keyboard: true,
    overview: true,
    center: true,
    touch: true,
    loop: false,
    rtl: false,
    shuffle: false,
    fragments: true,
    embedded: false,
    help: true,
    showNotes: false,
    autoSlide: 0,
    autoSlideStoppable: true,
    mouseWheel: false,
    hideAddressBar: true,
    previewLinks: false, 
    transition: 'default',
    transitionSpeed: 'default',
    backgroundTransition: 'default',
    viewDistance: 10, 
    parallaxBackgroundImage: '', 
    parallaxBackgroundSize: '',
    parallaxBackgroundHorizontal: null,
    parallaxBackgroundVertical: null
}
export default class MyComponent extends React.Component {
    render(){
        return(<ReactReveal name="hi"
      sections={sections}
      reveal={revealConfig}
    />);
    }
}
