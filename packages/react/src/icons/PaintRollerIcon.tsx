import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="40" y="56" width="168" height="80" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M208,96h24a8,8,0,0,1,8,8v50a8,8,0,0,1-5.8,7.69L133.8,190.34A8,8,0,0,0,128,198v34" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><rect x="40" y="56" width="168" height="80" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M208,96h24a8,8,0,0,1,8,8v50a8,8,0,0,1-5.8,7.69L133.8,190.34A8,8,0,0,0,128,198v34" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><rect x="40" y="56" width="168" height="80" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M208,96h24a8,8,0,0,1,8,8v50a8,8,0,0,1-5.8,7.69L133.8,190.34A8,8,0,0,0,128,198v34" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><rect x="44" y="56" width="156" height="80" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,96h32a8,8,0,0,1,8,8v54a8,8,0,0,1-5.8,7.69L133.8,194.34A8,8,0,0,0,128,202v30" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><rect x="40" y="56" width="168" height="80" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M208,96h24a8,8,0,0,1,8,8v50a8,8,0,0,1-5.8,7.69L133.8,190.34A8,8,0,0,0,128,198v34" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const PaintRollerIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
