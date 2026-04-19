import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="40" y="40" width="176" height="176" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M152,176H104l43.17-57.56A24,24,0,1,0,105.37,96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><rect x="40" y="40" width="176" height="176" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M152,176H104l43.17-57.56A24,24,0,1,0,105.37,96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><rect x="40" y="40" width="176" height="176" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M152,176H104l43.17-57.56A24,24,0,1,0,105.37,96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><rect x="40" y="40" width="176" height="176" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M152,176H104l43.17-57.56A24,24,0,1,0,105.37,96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><rect x="40" y="40" width="176" height="176" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M152,176H104l43.17-57.56A24,24,0,1,0,105.37,96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const NumberSquareTwoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
