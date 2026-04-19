import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M72,88a56,56,0,0,1,112,0v24a56,56,0,0,1-112,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M184,32V168a56,56,0,0,1-56,56c-19,0-37.88-9.49-48-24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M72,88a56,56,0,0,1,112,0v24a56,56,0,0,1-112,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M184,32V168a56,56,0,0,1-56,56c-19,0-37.88-9.49-48-24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M72,88a56,56,0,0,1,112,0v24a56,56,0,0,1-112,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M184,32V168a56,56,0,0,1-56,56c-19,0-37.88-9.49-48-24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M72,88a56,56,0,0,1,112,0v24a56,56,0,0,1-112,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M184,32V168a56,56,0,0,1-56,56c-19,0-37.88-9.49-48-24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M72,88a56,56,0,0,1,112,0v24a56,56,0,0,1-112,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M184,32V168a56,56,0,0,1-56,56c-19,0-37.88-9.49-48-24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const GoodreadsLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
