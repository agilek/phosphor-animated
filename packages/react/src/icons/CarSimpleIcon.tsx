import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M216,208H192a8,8,0,0,1-8-8V176H72v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V112L61.89,44.75A8,8,0,0,1,69.2,40H186.8a8,8,0,0,1,7.31,4.75L224,112v88A8,8,0,0,1,216,208Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M216,208H192a8,8,0,0,1-8-8V176H72v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V112L61.89,44.75A8,8,0,0,1,69.2,40H186.8a8,8,0,0,1,7.31,4.75L224,112v88A8,8,0,0,1,216,208Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M216,208H192a8,8,0,0,1-8-8V176H72v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V112L61.89,44.75A8,8,0,0,1,69.2,40H186.8a8,8,0,0,1,7.31,4.75L224,112v88A8,8,0,0,1,216,208Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M216,208H188a8,8,0,0,1-8-8V176H76v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V112L61.89,44.75A8,8,0,0,1,69.2,40H186.8a8,8,0,0,1,7.31,4.75L224,112v88A8,8,0,0,1,216,208Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M216,208H192a8,8,0,0,1-8-8V176H72v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V112L61.89,44.75A8,8,0,0,1,69.2,40H186.8a8,8,0,0,1,7.31,4.75L224,112v88A8,8,0,0,1,216,208Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const CarSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
