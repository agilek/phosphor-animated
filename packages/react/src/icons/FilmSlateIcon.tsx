import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M40,112H216a0,0,0,0,1,0,0v88a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V112A0,0,0,0,1,40,112Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M40.43,112,208,67.77l-8.16-30a7.9,7.9,0,0,0-9.66-5.49L37.85,72.47A7.76,7.76,0,0,0,32.27,82Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><path d="M40,112H216a0,0,0,0,1,0,0v88a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V112A0,0,0,0,1,40,112Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M40.43,112,208,67.77l-8.16-30a7.9,7.9,0,0,0-9.66-5.49L37.85,72.47A7.76,7.76,0,0,0,32.27,82Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><path d="M40,112H216a0,0,0,0,1,0,0v88a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V112A0,0,0,0,1,40,112Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M40.43,112,208,67.77l-8.16-30a7.9,7.9,0,0,0-9.66-5.49L37.85,72.47A7.76,7.76,0,0,0,32.27,82Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><path d="M40,112H216a0,0,0,0,1,0,0v88a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V112A0,0,0,0,1,40,112Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M40.43,112,208,67.77l-8.16-30a7.9,7.9,0,0,0-9.66-5.49L37.85,72.47A7.76,7.76,0,0,0,32.27,82Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><path d="M40,112H216a0,0,0,0,1,0,0v88a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V112A0,0,0,0,1,40,112Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M40.43,112,208,67.77l-8.16-30a7.9,7.9,0,0,0-9.66-5.49L37.85,72.47A7.76,7.76,0,0,0,32.27,82Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const FilmSlateIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
