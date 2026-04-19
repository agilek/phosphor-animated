import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M55.27,48H40a8,8,0,0,0-8,8V184a8,8,0,0,0,8,8h65.07l16,28a8,8,0,0,0,13.9,0l16-28h35.25" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M224,186V56a8,8,0,0,0-8-8H98.52" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M55.27,48H40a8,8,0,0,0-8,8V184a8,8,0,0,0,8,8h65.07l16,28a8,8,0,0,0,13.9,0l16-28h35.25" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M224,186V56a8,8,0,0,0-8-8H98.52" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M55.27,48H40a8,8,0,0,0-8,8V184a8,8,0,0,0,8,8h65.07l16,28a8,8,0,0,0,13.9,0l16-28h35.25" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M224,186V56a8,8,0,0,0-8-8H98.52" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M55.27,48H40a8,8,0,0,0-8,8V184a8,8,0,0,0,8,8h65.07l16,28a8,8,0,0,0,13.9,0l16-28h35.25" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M224,174.14V56a8,8,0,0,0-8-8H109.33" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M55.27,48H40a8,8,0,0,0-8,8V184a8,8,0,0,0,8,8h65.07l16,28a8,8,0,0,0,13.9,0l16-28h35.25" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M224,186V56a8,8,0,0,0-8-8H98.52" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const ChatCenteredSlashIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
