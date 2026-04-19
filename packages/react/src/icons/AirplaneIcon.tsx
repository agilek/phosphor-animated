import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M152,96l80,40v32l-80-16v32l16,16v32l-40-16L88,232V200l16-16V152L24,168V136l80-40V48a24,24,0,0,1,48,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M152,96l80,40v32l-80-16v32l16,16v32l-40-16L88,232V200l16-16V152L24,168V136l80-40V48a24,24,0,0,1,48,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M152,96l80,40v32l-80-16v32l16,16v32l-40-16L88,232V200l16-16V152L24,168V136l80-40V48a24,24,0,0,1,48,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M152,96l80,40v32l-80-16v32l16,16v32l-40-16L88,232V200l16-16V152L24,168V136l80-40V48a24,24,0,0,1,48,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><path d="M152,96l80,40v32l-80-16v32l16,16v32l-40-16L88,232V200l16-16V152L24,168V136l80-40V48a24,24,0,0,1,48,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const AirplaneIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
