import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M216,24,152,72l-40,8L28.69,163.31a16,16,0,0,0,0,22.63l41.37,41.37a16,16,0,0,0,22.63,0L176,144l8-40,48-64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M216,24,152,72l-40,8L28.69,163.31a16,16,0,0,0,0,22.63l41.37,41.37a16,16,0,0,0,22.63,0L176,144l8-40,48-64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M216,24,152,72l-40,8L28.69,163.31a16,16,0,0,0,0,22.63l41.37,41.37a16,16,0,0,0,22.63,0L176,144l8-40,48-64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M216,24,152,72l-40,8L28.69,163.31a16,16,0,0,0,0,22.63l41.37,41.37a16,16,0,0,0,22.63,0L176,144l8-40,48-64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M216,24,152,72l-40,8L28.69,163.31a16,16,0,0,0,0,22.63l41.37,41.37a16,16,0,0,0,22.63,0L176,144l8-40,48-64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const BeerBottleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
