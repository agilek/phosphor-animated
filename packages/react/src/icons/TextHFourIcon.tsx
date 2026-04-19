import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/><polyline points="248 184 176 184 232 112 232 208" strokeWidth="8" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
  light: <><line strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/><polyline points="248 184 176 184 232 112 232 208" strokeWidth="12" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
  regular: <><line strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/><polyline points="248 184 176 184 232 112 232 208" strokeWidth="16" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
  bold: <><line strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/><polyline points="244 184 180 184 232 112 232 208" strokeWidth="24" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
  fill: <><path d="M164.46,144,184,119.13V144ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM128,80a8,8,0,0,0-16,0v32H72V80a8,8,0,0,0-16,0v80a8,8,0,0,0,16,0V128h40v32a8,8,0,0,0,16,0Zm84,72a8,8,0,0,0-8-8h-4V96a8,8,0,0,0-14.29-4.94l-44,56A8,8,0,0,0,148,160h36v16a8,8,0,0,0,16,0V160h4A8,8,0,0,0,212,152Z" fill="currentColor"/></>,
  duotone: <><path d="M40,56H232a16,16,0,0,1,16,16V192a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A0,0,0,0,1,40,56Z" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/><polyline points="248 184 176 184 232 112 232 208" strokeWidth="16" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
};

export const TextHFourIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
