import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M16,183.87C272,240,220,38.7,219,37,217.29,36,16-16,72.1,240" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M202.45,151.85a104,104,0,0,1-98.3-98.3" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M16,183.87C272,240,220,38.7,219,37,217.29,36,16-16,72.1,240" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M202.45,151.85a104,104,0,0,1-98.3-98.3" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M16,183.87C272,240,220,38.7,219,37,217.29,36,16-16,72.1,240" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M202.45,151.85a104,104,0,0,1-98.3-98.3" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M16,183.87C272,240,220,38.7,219,37,217.29,36,16-16,72.1,240" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M202.45,151.85a104,104,0,0,1-98.3-98.3" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M16,183.87C272,240,220,38.7,219,37,217.29,36,16-16,72.1,240" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M202.45,151.85a104,104,0,0,1-98.3-98.3" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const FishSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
