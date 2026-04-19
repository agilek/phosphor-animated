import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M72,88a56,56,0,0,1,112,0v24a56,56,0,0,1-112,0Z" strokeWidth="8" className="draw-line"/><path d="M184,32V168a56,56,0,0,1-56,56c-19,0-37.88-9.49-48-24" strokeWidth="8" className="draw-line"/></>,
  light: <><path d="M72,88a56,56,0,0,1,112,0v24a56,56,0,0,1-112,0Z" strokeWidth="12" className="draw-line"/><path d="M184,32V168a56,56,0,0,1-56,56c-19,0-37.88-9.49-48-24" strokeWidth="12" className="draw-line"/></>,
  regular: <><path d="M72,88a56,56,0,0,1,112,0v24a56,56,0,0,1-112,0Z" strokeWidth="16" className="draw-line"/><path d="M184,32V168a56,56,0,0,1-56,56c-19,0-37.88-9.49-48-24" strokeWidth="16" className="draw-line"/></>,
  bold: <><path d="M72,88a56,56,0,0,1,112,0v24a56,56,0,0,1-112,0Z" strokeWidth="24" className="draw-line"/><path d="M184,32V168a56,56,0,0,1-56,56c-19,0-37.88-9.49-48-24" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM176,160a48,48,0,0,1-86.4,28.8,8,8,0,1,1,12.8-9.6A32,32,0,0,0,160,160V147.74A48,48,0,0,1,80,112v-8a48,48,0,0,1,80-35.74V64a8,8,0,0,1,16,0Zm-16-56v8a32,32,0,0,1-64,0v-8a32,32,0,0,1,64,0Z" fill="currentColor"/></>,
  duotone: <><path d="M72,88a56,56,0,0,1,112,0v24a56,56,0,0,1-112,0Z" opacity="0.2" fill="currentColor"/><path d="M72,88a56,56,0,0,1,112,0v24a56,56,0,0,1-112,0Z" strokeWidth="16" className="draw-line"/><path d="M184,32V168a56,56,0,0,1-56,56c-19,0-37.88-9.49-48-24" strokeWidth="16" className="draw-line"/></>,
};

export const GoodreadsLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
