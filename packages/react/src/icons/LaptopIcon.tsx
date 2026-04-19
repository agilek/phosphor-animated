import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M40,176V72A16,16,0,0,1,56,56H200a16,16,0,0,1,16,16V176" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M24,176H232a0,0,0,0,1,0,0v16a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V176A0,0,0,0,1,24,176Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M40,176V72A16,16,0,0,1,56,56H200a16,16,0,0,1,16,16V176" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M24,176H232a0,0,0,0,1,0,0v16a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V176A0,0,0,0,1,24,176Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M40,176V72A16,16,0,0,1,56,56H200a16,16,0,0,1,16,16V176" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M24,176H232a0,0,0,0,1,0,0v16a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V176A0,0,0,0,1,24,176Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><path d="M40,168V72A16,16,0,0,1,56,56H200a16,16,0,0,1,16,16v96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M24,168H232a0,0,0,0,1,0,0v24a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V168a0,0,0,0,1,0,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><path d="M40,176V72A16,16,0,0,1,56,56H200a16,16,0,0,1,16,16V176" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M24,176H232a0,0,0,0,1,0,0v16a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V176A0,0,0,0,1,24,176Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const LaptopIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
