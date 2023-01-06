import React from 'react';
import "./assets/styles/skillsanimated.css"

// const COLORS = ['#bbf7d0', '#99f6e4', '#bfdbfe', '#ddd6fe', '#f5d0fe', '#fed7aa', '#fee2e2'];
const TAGS = ['LOOK AT THE WORLD FROM A DIFFERENT ANGLE','LOOK AT THE WORLD FROM A DIFFERENT ANGLE','LOOK AT THE WORLD FROM A DIFFERENT ANGLE'];
const DURATION = 10000;
const ROWS = 3;
const TAGS_PER_ROW = 1;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort( () => .5 - Math.random() );

const InfiniteLoopSlider = ({children, duration, reverse = false}) => {
  return (
    <div className='' style={{
        '--duration': `${duration}ms`,
        '--direction': reverse ? 'reverse' : 'normal'
      }}>
      <div className='loop-slider'>
        {children}
        {children}
      </div>
    </div>
  );
};

const Tag = ({text, color}) => (
  <div className='tag' style={{ '--color': color}}><span></span> {text}</div>
);

const Animation = () => (
    <div className="flex justify-center">
  <div className=' mx-auto flex'>
    <div className='tag-list'>
      {[...new Array(ROWS)].map((_, i) => (
        <InfiniteLoopSlider key={i} duration={random(DURATION - 500, DURATION + 500)} reverse={i % 2}>
          {shuffle(TAGS).slice(0, TAGS_PER_ROW).map(tag => (
            <Tag text={tag} key={tag}/>
          ))}
        </InfiniteLoopSlider>
      ))}
    </div>
  </div></div>
);

export default Animation;