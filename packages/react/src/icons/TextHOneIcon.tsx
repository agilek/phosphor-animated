import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="224 208 224 112 200 128" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/><line strokeWidth="8" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
  light: <><polyline points="224 208 224 112 200 128" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/><line strokeWidth="12" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
  regular: <><line strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/><polyline points="224 208 224 112 200 128" strokeWidth="16" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
  bold: <><polyline points="224 208 224 112 200 128" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/><line strokeWidth="24" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
  fill: <><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM144,160a8,8,0,0,1-16,0V128H72v32a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0v32h56V80a8,8,0,0,1,16,0Zm56,16a8,8,0,0,1-16,0V111l-11.56,7.71a8,8,0,1,1-8.88-13.32l24-16A8,8,0,0,1,200,96Z" fill="currentColor"/></>,
  duotone: <><path d="M40,56H208a16,16,0,0,1,16,16V208a0,0,0,0,1,0,0H56a16,16,0,0,1-16-16V56A0,0,0,0,1,40,56Z" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/><polyline points="224 208 224 112 200 128" strokeWidth="16" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
};

export const TextHOneIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
