import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M168,165a68,68,0,0,0-80,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M136,56.19q-4-.19-8-.19A163.31,163.31,0,0,0,24,93.19" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M136,104.27q-4-.27-8-.27a115.51,115.51,0,0,0-72,25" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M168,165a68,68,0,0,0-80,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M136,56.19q-4-.19-8-.19A163.31,163.31,0,0,0,24,93.19" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M136,104.27q-4-.27-8-.27a115.51,115.51,0,0,0-72,25" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M168,165a68,68,0,0,0-80,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M136,56.19q-4-.19-8-.19A163.31,163.31,0,0,0,24,93.19" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M136,104.27q-4-.27-8-.27a115.51,115.51,0,0,0-72,25" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M168,165a68,68,0,0,0-80,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M128,56A163.31,163.31,0,0,0,24,93.19" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M128,104a115.51,115.51,0,0,0-72,25" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M136,40.17q-4-.16-8-.17A179.58,179.58,0,0,0,19.11,76.48,7.79,7.79,0,0,0,17.8,87.69L121.85,213.12a8,8,0,0,0,12.3,0L191.49,144" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const WifiXIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
