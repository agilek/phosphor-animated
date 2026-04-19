import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M189.59,195.75A91.6,91.6,0,0,1,132,216H48a8,8,0,0,1-8-8V124A91.72,91.72,0,0,1,66.05,59.85" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M92.19,41A91.53,91.53,0,0,1,132,32h0a92,92,0,0,1,92,92h0a91.58,91.58,0,0,1-13.2,47.51" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M189.59,195.75A91.6,91.6,0,0,1,132,216H48a8,8,0,0,1-8-8V124A91.72,91.72,0,0,1,66.05,59.85" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M92.19,41A91.53,91.53,0,0,1,132,32h0a92,92,0,0,1,92,92h0a91.58,91.58,0,0,1-13.2,47.51" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M189.59,195.75A91.6,91.6,0,0,1,132,216H48a8,8,0,0,1-8-8V124A91.72,91.72,0,0,1,66.05,59.85" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M92.19,41A91.53,91.53,0,0,1,132,32h0a92,92,0,0,1,92,92h0a91.58,91.58,0,0,1-13.2,47.51" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M189.59,195.75A91.6,91.6,0,0,1,132,216H48a8,8,0,0,1-8-8V124A91.72,91.72,0,0,1,66.05,59.85" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M100,37.72A91.8,91.8,0,0,1,132,32h0a92,92,0,0,1,92,92h0a91.59,91.59,0,0,1-9.16,40.06" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M189.59,195.75A91.6,91.6,0,0,1,132,216H48a8,8,0,0,1-8-8V124A91.72,91.72,0,0,1,66.05,59.85" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M92.19,41A91.53,91.53,0,0,1,132,32h0a92,92,0,0,1,92,92h0a91.58,91.58,0,0,1-13.2,47.51" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const ChatTeardropSlashIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
