import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M192,112h48l-28,40a28,28,0,1,1-20,47.6" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/><line strokeWidth="8" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
  light: <><path d="M192,112h48l-28,40a28,28,0,1,1-20,47.6" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/><line strokeWidth="12" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
  regular: <><line strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/><path d="M192,112h48l-28,40a28,28,0,1,1-20,47.6" strokeWidth="16" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
  bold: <><path d="M192,112h48l-28,40a28,28,0,1,1-20,47.6" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/><line strokeWidth="24" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
  fill: <><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM128,160a8,8,0,0,1-16,0V128H72v32a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0v32h40V80a8,8,0,0,1,16,0Zm40,24a32,32,0,0,1-21.34-8.15,8,8,0,1,1,10.68-11.92A16,16,0,1,0,168,136a8,8,0,0,1-6.4-12.8L176,104H152a8,8,0,0,1,0-16h40a8,8,0,0,1,6.4,12.8l-16.71,22.28A32,32,0,0,1,168,184Z" fill="currentColor"/></>,
  duotone: <><path d="M40,56H224a16,16,0,0,1,16,16V192a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A0,0,0,0,1,40,56Z" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/><path d="M192,112h48l-28,40a28,28,0,1,1-20,47.6" strokeWidth="16" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
};

export const TextHThreeIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
