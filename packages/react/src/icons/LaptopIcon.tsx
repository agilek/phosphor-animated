import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M40,176V72A16,16,0,0,1,56,56H200a16,16,0,0,1,16,16V176" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><path d="M24,176H232a0,0,0,0,1,0,0v16a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V176A0,0,0,0,1,24,176Z" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M40,176V72A16,16,0,0,1,56,56H200a16,16,0,0,1,16,16V176" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><path d="M24,176H232a0,0,0,0,1,0,0v16a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V176A0,0,0,0,1,24,176Z" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M40,176V72A16,16,0,0,1,56,56H200a16,16,0,0,1,16,16V176" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M24,176H232a0,0,0,0,1,0,0v16a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V176A0,0,0,0,1,24,176Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  bold: <><path d="M40,168V72A16,16,0,0,1,56,56H200a16,16,0,0,1,16,16v96" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><path d="M24,168H232a0,0,0,0,1,0,0v24a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V168a0,0,0,0,1,0,0Z" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M232,168h-8V72a24,24,0,0,0-24-24H56A24,24,0,0,0,32,72v96H24a8,8,0,0,0-8,8v16a24,24,0,0,0,24,24H216a24,24,0,0,0,24-24V176A8,8,0,0,0,232,168ZM112,72h32a8,8,0,0,1,0,16H112a8,8,0,0,1,0-16ZM224,192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8v-8H224Z" fill="currentColor"/></>,
  duotone: <><path d="M40,176V72A16,16,0,0,1,56,56H200a16,16,0,0,1,16,16V176Z" opacity="0.2" fill="currentColor"/><path d="M40,176V72A16,16,0,0,1,56,56H200a16,16,0,0,1,16,16V176" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M24,176H232a0,0,0,0,1,0,0v16a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V176A0,0,0,0,1,24,176Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
};

export const LaptopIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
