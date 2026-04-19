import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M167.83,98.79a48,48,0,1,1-23.9,71.65L160,224H96l16.07-53.56a48,48,0,1,1-23.9-71.65,48,48,0,1,1,79.66,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M167.83,98.79a48,48,0,1,1-23.9,71.65L160,224H96l16.07-53.56a48,48,0,1,1-23.9-71.65,48,48,0,1,1,79.66,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M167.83,98.79a48,48,0,1,1-23.9,71.65L160,224H96l16.07-53.56a48,48,0,1,1-23.9-71.65,48,48,0,1,1,79.66,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M105,178.82a48,48,0,1,1-16.87-80,48,48,0,1,1,79.66,0,48,48,0,1,1-16.87,80L160,224H96Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><path d="M167.83,98.79a48,48,0,1,1-23.9,71.65L160,224H96l16.07-53.56a48,48,0,1,1-23.9-71.65,48,48,0,1,1,79.66,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const ClubIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
