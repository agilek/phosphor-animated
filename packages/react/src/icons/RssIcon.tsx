import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M56,136a64,64,0,0,1,64,64" strokeWidth="8" className="draw-line"/><path d="M56,88A112,112,0,0,1,168,200" strokeWidth="8" className="draw-line"/><path d="M56,40A160,160,0,0,1,216,200" strokeWidth="8" className="draw-line"/><circle cx="60" cy="196" r="8" fill="currentColor"/></>,
  light: <><path d="M56,136a64,64,0,0,1,64,64" strokeWidth="12" className="draw-line"/><path d="M56,88A112,112,0,0,1,168,200" strokeWidth="12" className="draw-line"/><path d="M56,40A160,160,0,0,1,216,200" strokeWidth="12" className="draw-line"/><circle cx="60" cy="196" r="10" fill="currentColor"/></>,
  regular: <><path d="M56,136a64,64,0,0,1,64,64" strokeWidth="16" className="draw-line"/><path d="M56,88A112,112,0,0,1,168,200" strokeWidth="16" className="draw-line"/><path d="M56,40A160,160,0,0,1,216,200" strokeWidth="16" className="draw-line"/><circle cx="60" cy="196" r="12" fill="currentColor"/></>,
  bold: <><path d="M56,136a64,64,0,0,1,64,64" strokeWidth="24" className="draw-line"/><path d="M56,88A112,112,0,0,1,168,200" strokeWidth="24" className="draw-line"/><path d="M56,40A160,160,0,0,1,216,200" strokeWidth="24" className="draw-line"/><circle cx="60" cy="196" r="16" fill="currentColor"/></>,
  fill: <><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM76,192a12,12,0,1,1,12-12A12,12,0,0,1,76,192Zm44,0a8,8,0,0,1-8-8,40,40,0,0,0-40-40,8,8,0,0,1,0-16,56.06,56.06,0,0,1,56,56A8,8,0,0,1,120,192Zm32,0a8,8,0,0,1-8-8,72.08,72.08,0,0,0-72-72,8,8,0,0,1,0-16,88.1,88.1,0,0,1,88,88A8,8,0,0,1,152,192Zm32,0a8,8,0,0,1-8-8A104.11,104.11,0,0,0,72,80a8,8,0,0,1,0-16A120.13,120.13,0,0,1,192,184,8,8,0,0,1,184,192Z" fill="currentColor"/></>,
  duotone: <><path d="M56,200V40A160,160,0,0,1,216,200Z" opacity="0.2" fill="currentColor"/><path d="M56,136a64,64,0,0,1,64,64" strokeWidth="16" className="draw-line"/><path d="M56,88A112,112,0,0,1,168,200" strokeWidth="16" className="draw-line"/><path d="M216,200A160,160,0,0,0,56,40" strokeWidth="16" className="draw-line"/><circle cx="60" cy="196" r="12" fill="currentColor"/></>,
};

export const RssIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
