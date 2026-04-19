import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="132" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M72,72,40.83,127.43a8,8,0,0,0,.73,8.29L128,248l86.43-112.28a8,8,0,0,0,.73-8.29L184,72Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M184,72V32a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8V72" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><circle cx="128" cy="132" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M72,72,40.83,127.43a8,8,0,0,0,.73,8.29L128,248l86.43-112.28a8,8,0,0,0,.73-8.29L184,72Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M184,72V32a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8V72" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><circle cx="128" cy="132" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M72,72,40.83,127.43a8,8,0,0,0,.73,8.29L128,248l86.43-112.28a8,8,0,0,0,.73-8.29L184,72Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M184,72V32a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8V72" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><circle cx="128" cy="134" r="22" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M72,72,40.83,127.43a8,8,0,0,0,.73,8.29L128,244l86.43-108.28a8,8,0,0,0,.73-8.29L184,72Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M184,72V32a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8V72" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="128" cy="132" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M72,72,40.83,127.43a8,8,0,0,0,.73,8.29L128,248l86.43-112.28a8,8,0,0,0,.73-8.29L184,72Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M184,72V32a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8V72" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const PenNibStraightIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
